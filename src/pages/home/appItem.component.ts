import {Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppDetailComponent } from "../appDetail/appDetail";
import { AppAvailability } from '@ionic-native/app-availability';
import { Device  } from '@ionic-native/device';

@Component({
  selector: 'app-item',
  templateUrl: 'appItem.html'
})

export class AppItemComponent {
  constructor(public navCtrl: NavController,private device: Device,private appAvailability: AppAvailability){

  }
  @Input() app:any = {};
note:string = 'test';


  goToDetailPage(e) {
    this.navCtrl.push(AppDetailComponent,this.app);
  }

  callApp(){
    let newarr = this.app;
    this.appAvailability.check(this.note)
      .then(function() {  // Success callback
          // console.log(' is available :)');
        },
        function() {  // Error callback
          // console.log(' is not available :(');
          newarr.method = "打开";
        })
  }

  test(){
    console.log(this.app.method);
  }

  // callApp(e){
  //   let packageName;
  //   let appName = this.app.name;
  //   // let method = this.app.method;
  //   if (this.device.platform === 'Android') {
  //     packageName = this.app.packageName;
  //   } else if (this.device.platform === 'iOS') {
  //     packageName = 'twitter://';
  //   }
  //
  //   /****************check if app has installed**************/
  //   this.appAvailability.check(packageName)
  //     .then(
  //       function() {//app has installed
  //         if(confirm('检测到您已安装'+appName+'，是否现在开启？')){
  //           (window as any).startApp.set({"package":packageName}).start();
  //         } else {
  //           document.getElementsByTagName('button')[1].innerHTML = "安装";
  //         }
  //       },
  //
  //       function () {// not installed,start download app
  //         alert("not installed");
  //         return false
  //         //document.getElementsByClassName('app-check')[1].textContent = "打开";
  //         // if(confirm('您尚未安装'+appName+'，是否现在下载安装？')){
  //         //
  //         //   fileTransfer.onProgress((ProgressEvent) => {//download progress listener
  //         //     var percent =  ProgressEvent.loaded / ProgressEvent.total * 100;
  //         //     percent = Math.round(percent);
  //         //     fatherItem.getElementsByTagName('progress')[0].setAttribute('value',percent.toString());
  //         //   });
  //         //
  //         //   fileTransfer.download(url, file.externalDataDirectory + packageName +'.apk',true)
  //         //     .then((entry) => {
  //         //       if(confirm(appName +'下载完成，是否立即安装？')){
  //         //         var fileURL = entry.toURL();
  //         //
  //         //         file.checkFile(file.externalDataDirectory, packageName +'.apk').then((entry) =>{//download file exists
  //         //           fileOpener.open(fileURL, 'application/vnd.android.package-archive')
  //         //             .then((entry) => {}//open file success
  //         //               ,(error) => {alert('开启安装包错误！');})//open file fail
  //         //         },(error) => {alert('文件无法找到！');})//file.checkFile file not exist
  //         //       }else{}//user choose not install app now
  //         //     },(error) => {alert('下载出错！' + error.code);})//fileTransfer.download error
  //         // } else {}//user choose not download app
  //       });
  // }//callApp event end

  // ionViewCanLeave(e): boolean{
  //   if(e.target.nodeName == "SPAN"){
  //     this.callApp(e);
  //     return false;
  //   }else {
  //     this.goToDetailPage(e);
  //   }
  // }

}
