import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login {

  uwid:string;
  upwd:string;

  constructor(
    public toastCtrl: ToastController,
    private navCtrl: NavController
  ) {}

  goBack = () => {
    this.navCtrl.pop();
  };

  presentToast = (str) =>{
    let toast = this.toastCtrl.create({
      message: str,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  };

  login() {
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
    xhr.open('POST','http://192.168.2.7/login.php',true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`uwid=${this.uwid}&upwd=${this.upwd}`);

    let doResponse=(xhr)=>{
      console.log('开始处理响应消息');
      let result = xhr.responseText;
      console.dir(result);
      if(result!==null){
        localStorage.setItem("currentUser",result);
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        //localStorage.setItem("upwd",result.upwd);
        document.getElementById('show-ucname').innerHTML=currentUser["ucname"];
        document.getElementById('show-uename').innerHTML=currentUser["uename"];
        document.getElementById('avator').setAttribute("src","assets/img/icon/asus.png");
        this.presentToast("登陆成功");
        this.goBack();
      }else{
        this.presentToast("用户名或密码错误");
      }
    }
  }

}
