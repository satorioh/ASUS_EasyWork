import { Component } from '@angular/core';
import {ToastController} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {Network} from '@ionic-native/network';
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class Signup {

  uwid:string;
  upwd1:string;
  upwd2:string;

  constructor(
    public toastCtrl: ToastController,
    private navCtrl: NavController,
    private network: Network
  ) {}
  networkCheck=()=>{
    if (this.network.type == "none") {
      return false;
    }else{
      return true;
    }
  };
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
  userSignUp = () => {
    if(this.networkCheck()){
      if(this.upwd1 != this.upwd2){
        this.presentToast("两次输入的密码不一致")
      }else{
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
        xhr.open('POST','http://221.224.163.13/signup.php',true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(`uwid=${this.uwid}&upwd=${Md5.hashStr(this.upwd1)}`);

        let doResponse=(xhr)=>{
          console.log('开始接收服务器用户信息');
          let result = xhr.responseText;
          console.dir(result);
          if(JSON.parse(result)==null){
            this.presentToast("工号或密码错误");
          }else{
            localStorage.setItem("currentUser",result);
            let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            document.getElementById('show-ucname').innerHTML=currentUser["ucname"];
            document.getElementById('show-uename').innerHTML=currentUser["uename"];
            document.getElementById('avator').setAttribute("src","assets/img/icon/asus.png");
            document.getElementById('login-status').innerHTML="退出";
            this.presentToast("登录成功");
            this.goBack();
          }
        }
      }
    }else{
      this.presentToast("网络未连接");
    }
  }
}
