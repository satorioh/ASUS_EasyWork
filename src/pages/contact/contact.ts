import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';
import {PopOver} from '../../components/pop-over/pop-over';
import { DatePipe } from '@angular/common';
import { ToastController } from 'ionic-angular';

declare var BMap;
declare var baidu_location: any;

@Component({
  selector: 'page-contact',
  providers:[DatePipe],
  templateUrl: 'contact.html'
})

export class ContactPageComponent implements OnInit {
  @ViewChild('bmap') mapElement: ElementRef;
  myDate: number;
  myCheckIn = {
    knockontime:'',
    knockonpos:'',
    knockofftime:'',
    knockoffpos:''
  };

  constructor(private navCtrl: NavController,
              public platform: Platform,
              public popoverCtrl: PopoverController,
              private datePipe: DatePipe,
              public toastCtrl: ToastController
  ) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap();
      setInterval(() => {
        this.myDate = Date.now();
      }, 1000);
    })
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

  presentPopover(myEvent) {
    //alert("功能开发中，敬请期待!")
    let popover = this.popoverCtrl.create(PopOver);
    popover.present({
      ev: myEvent
    });
  }

  presentToast(str) {
    let toast = this.toastCtrl.create({
      message: str,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  checkIn(e){
    let knockOnTime = document.querySelector('#knock-on span.knock-time');
    let knockOnPost = document.querySelector('#knock-on p.knock-pos');
    let str = '';
    console.log(knockOnTime.textContent);
    if(knockOnTime.textContent){
      str="亲，你已经打过卡了哦";
      this.presentToast(str);
      return;
    }else{
      knockOnTime.textContent = "打卡时间"+this.datePipe.transform(this.myDate,'hh:mm:ss');
      this.myCheckIn.knockontime = this.datePipe.transform(this.myDate,'hh:mm:ss');
      knockOnPost.textContent = document.getElementById('position').textContent.substr(7);
      this.myCheckIn.knockonpos = knockOnPost.textContent;
      str = "打卡成功！";
      this.presentToast(str);
      console.dir(this.myCheckIn);
    }


  }

}//export class end




