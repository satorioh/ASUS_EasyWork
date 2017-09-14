import { Component } from '@angular/core';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login {

  uwid:string;
  upwd:string;

  constructor(public toastCtrl: ToastController,) {}

  login() {
    console.log(this.uwid+','+this.upwd);
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
    xhr.open('POST','http://192.168.1.5/login.php',true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`uwid=${this.uwid}&upwd=${this.upwd}`);
    let successToast = this.toastCtrl.create({
      message: "登录成功",
      duration: 2000,
      position: 'top'
    });
    let errorToast = this.toastCtrl.create({
      message: "用户名或密码错误",
      duration: 2000,
      position: 'top'
    });

    function doResponse(xhr){
      console.log('开始处理响应消息');
      if(xhr.responseText=='success'){
        document.getElementById('ucenter-content').innerHTML="";
        successToast.present();
      }else if(xhr.responseText=='error'){
        errorToast.present();
      }else {
        alert('不可识别的响应数据');
      }
    }
  }

}
