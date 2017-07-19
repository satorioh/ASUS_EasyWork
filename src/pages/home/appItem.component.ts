import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { NavController } from 'ionic-angular';
import { AppDetailComponent } from "../appDetail/appDetail";
//import { AppAvailability } from '@ionic-native/app-availability';
//import { Device  } from '@ionic-native/device';
import {ProgressBarComponent} from "../../app/progressBar.component";

@Component({
  selector: 'app-item',
  templateUrl: 'appItem.html'
})

export class AppItemComponent implements OnInit{
  constructor(public navCtrl: NavController,private transfer: Transfer, private file: File,private fileOpener: FileOpener){

  }
  @Input() app:any = {};
  @ViewChild(ProgressBarComponent) progressBar:ProgressBarComponent

  goToDetailPage(e) {
    this.navCtrl.push(AppDetailComponent,this.app);
  }
  ngOnInit(){
    this.app.buttonColor = this.progressBar.app.buttonColor;
  }
  callApp(e){
    alert(e.target.textContent.replace(/^\s+|\s+$/g,""));
  }
  startApp(){
    (window as any).startApp.set({"package":this.app.packageName}).start();
  }
  downloadApp(e){
    const fileTransfer: TransferObject = this.transfer.create();
    const url = encodeURI('http://221.224.163.10:9443/temp/'+ this.app.packageName +'.apk')
    let fileURL:string;
    //this.progressBar.progress = 50;
    fileTransfer.onProgress((ProgressEvent) => {//download progress listener
      let percent =  ProgressEvent.loaded / ProgressEvent.total * 100;
      percent = Math.round(percent);
      console.log(e.target);
    });

    fileTransfer.download(url, this.file.externalDataDirectory + this.app.packageName +'.apk',true)
      .then((entry) => {
        if(confirm(this.app.name +'下载完成，是否立即安装？')){
          fileURL = entry.toURL();

          this.file.checkFile(this.file.externalDataDirectory, this.app.packageName +'.apk').then((entry) =>{//download file exists
            this.fileOpener.open(fileURL, 'application/vnd.android.package-archive')
              .then((entry) => {}//open file success
                ,(error) => {alert('开启安装包错误！');})//open file fail
          },(error) => {alert('文件无法找到！');})//file.checkFile file not exist
        }else{}//user choose not install app now
      },(error) => {alert('下载出错！' + error.code);})//fileTransfer.download error
  }

  ionViewCanLeave(e): boolean{
    let str = e.target.textContent.replace(/^\s+|\s+$/g,"");
    if(str == "下载"){
      // this.progressBar.app.buttonColor = "secondary";

      this.downloadApp(e);
      return false;
     }else if (str == "打开"){
      this.startApp();
      return false;
    } else {
      this.goToDetailPage(e);
     }
  }

}
