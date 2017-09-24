import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';
import {PopOver} from '../../components/pop-over/pop-over';
import {DatePipe} from '@angular/common';
import {ToastController} from 'ionic-angular';
import {Network} from '@ionic-native/network';
import {Login} from '../../components/login/login';
import {Calendar} from '../../components/calendar/calendar'

declare var BMap;
declare var baidu_location: any;

@Component({
  selector: 'page-contact',
  providers: [DatePipe],
  templateUrl: 'contact.html'
})

export class ContactPageComponent implements OnInit {
  @ViewChild('bmap') mapElement: ElementRef;

  myDate: number;
  checkInData = {
    cwid:'',
    ccname:'',
    cinpos: '',
    coffpos: ''
  };

  constructor(private navCtrl: NavController,
              public platform: Platform,
              public popoverCtrl: PopoverController,
              private datePipe: DatePipe,
              public toastCtrl: ToastController,
              private network: Network) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.ionViewCanEnter();
      setInterval(() => {
        this.myDate = Date.now();
      }, 1000);
      this.loadMap();
      this.checkInfoInit();
      this.userLoginCheck();
    })
  }

  ionViewCanEnter() {
    if (this.network.type == "none") {
      alert("请先连接网络");
      return false;
    } else {
      return true;
    }
  }

  loadMap() {
    //初始化地图
    let map = new BMap.Map(this.mapElement.nativeElement);

    //调用baidu SDK plugin获取经纬度
    baidu_location.getCurrentPosition(function (result) {
        if (result.describe == "网络定位成功") {
          console.dir(result);
          let ggpoint = new BMap.Point(result.longitude, result.latitude);

          //逆地址解析
          let geoc = new BMap.Geocoder();
          geoc.getLocation(ggpoint, function (rs) {
            let addComp = rs.addressComponents;
            let address = "您当前的位置：" + addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
            console.log(address);
            document.getElementById('position').textContent = address;
          });
        } else {
          alert("确保网络已连接，并在设置-应用-ASUS EasyWork-权限中开启位置信息权限，以正常使用定位功能");
        }
      },//function success
      function (err) {
        document.getElementById('position').textContent = err + "定位失败，请重试";
      });
  }

  presentPopover(e) {
    if (e.target.textContent == "地图") {
      let popover = this.popoverCtrl.create(PopOver);
      popover.present({
        ev: e
      });
    } else if (e.target.textContent == "日历") {
      let popover = this.popoverCtrl.create(Calendar);
      popover.present({
        ev: e
      });
    }

  }

  presentToast(str) {
    let toast = this.toastCtrl.create({
      message: str,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  ampmChoose=()=> {
    if(localStorage.getItem("currentUser")){
      let time = parseInt(this.datePipe.transform(this.myDate, 'HH'));
      console.log(time);
      if (time <= 12) {
        this.setCheckData('cinpos');
        //this.xhrSend();
        this.showCheckInfo('knock-on');
      } else {
        this.setCheckData('coffpos');
        //this.xhrSend();
        this.showCheckInfo('knock-off');
      }
    }else{
      this.goToLogin();
    }

  };

  checkInfoInit=()=>{
    let today = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    console.log(today);
    if(localStorage["currentCheck"]){
      let currentCheck = JSON.parse(localStorage["currentCheck"]);
      if(today==currentCheck.cdate){
        if(currentCheck.cintime){
          document.querySelector(`#knock-on span.knock-time`).textContent = "打卡时间" + currentCheck.cintime;
          document.querySelector(`#knock-on p.knock-pos`).textContent = currentCheck.cinpos;
        }
        if(currentCheck.cofftime){
          document.querySelector(`#knock-off span.knock-time`).textContent = "打卡时间" + currentCheck.cofftime;
          document.querySelector(`#knock-off p.knock-pos`).textContent = currentCheck.coffpos;
        }

      }else{
        localStorage.removeItem("currentCheck");
      }
    }else{
      return;
    }


  };

  showCheckInfo=(knockType)=> {
    let knockTime = document.querySelector(`#${knockType} span.knock-time`);
    let knockPos = document.querySelector(`#${knockType} p.knock-pos`);
    let str = '';
    console.log(knockType);
    console.log(knockTime.textContent);
    if (knockTime.textContent) {
      str = "亲，不要重复打卡哦";
      this.presentToast(str);
      return;
    } else {
      knockTime.textContent = "打卡时间" + this.datePipe.transform(this.myDate, 'HH:mm:ss');
      knockPos.textContent = document.getElementById('position').textContent.substr(7);
      this.xhrSend();
      str = "打卡成功！";
      this.presentToast(str);
    }
  };

  setCheckData =(checkPos)=>{
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.checkInData.cwid = currentUser.uwid;
    this.checkInData.ccname = currentUser.ucname;
    this.checkInData[checkPos] = document.getElementById('position').textContent.substr(7);
};

  showUserInfo = (ucname,uename,img,loginstatus) =>{
    document.getElementById('show-ucname').innerHTML=ucname;
    document.getElementById('show-uename').innerHTML=uename;
    document.getElementById('avator').setAttribute("src",img);
    document.getElementById('login-status').innerHTML=loginstatus;
  };

  xhrSend=()=>{
    let arr=[];
    arr.push(this.checkInData);
    let data=JSON.stringify(arr);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if(xhr.readyState===4){
        if(xhr.status ===200){
          doResponse(xhr);
        }else{
          alert("响应完成但有问题");
        }
      }
    };
    xhr.open('POST','http://192.168.1.2/checkin.php',true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`checkInData=${data}`);

    let doResponse=(xhr)=>{
      console.log('开始接收服务器打卡信息');
      localStorage.setItem("currentCheck",xhr.responseText);
      console.dir(JSON.parse(localStorage["currentCheck"]));
    }
  };

  goToLogin() {
    this.navCtrl.push(Login);
  }

  logout=()=>{
    let loginStatus = document.getElementById('login-status').innerHTML;
    if(loginStatus=="退出"){
      localStorage.removeItem("currentUser");
      this.showUserInfo("未登录","","assets/img/icon/user.png","登录");
    }else if(loginStatus=="登录"){
      this.goToLogin();
    }

  };

  userLoginCheck=()=>{
    if(localStorage.getItem("currentUser")){
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));
      let avator = "assets/img/icon/asus.png";
      this.showUserInfo(currentUser["ucname"],currentUser["uename"],avator,"退出");
    }else{
      this.goToLogin();
    }
  }


}//export class end




