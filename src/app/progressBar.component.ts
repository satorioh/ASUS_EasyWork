import { Component, Input,OnInit } from '@angular/core';
import { AppAvailability } from '@ionic-native/app-availability';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progressBar.html'
})
export class ProgressBarComponent implements OnInit {

  @Input() progress: any;
  @Input() app: any = {};//从appItem.component的app对象导入

  constructor(private appAvailability: AppAvailability,
              public platform: Platform,
              private transfer: Transfer,
              private file: File,
              private fileOpener: FileOpener
  ) {}

  ngOnInit() {
    this.platform.ready().then(() =>{
      //检查app是否已经安装
      let appcopy = this.app;
      this.appAvailability.check(this.app.packageName)
        .then(function () {  // 已经安装则显示“打开”，并修改按钮颜色为绿色
            appcopy.method = "打开";
            appcopy.buttonColor = "secondary";
          },
          function () {  // 未安装则显示“下载”
            appcopy.method = "下载";
          });
      //获取progress-bar的height值，并设置其line-height
      this.setLineHeight("progress-inner");
    });
  }
  setLineHeight(element){
    let elementAll = document.getElementsByClassName(element);
    let height = window.getComputedStyle(elementAll[0],null).height;
    for(let i=0,len=elementAll.length;i<len;i++){
      let target = <HTMLElement><any>elementAll[i];
      target.style.lineHeight = height;
    }
  }
  startApp() {
    (window as any).startApp.set({"package": this.app.packageName}).start();
  }

  downloadApp(e) {
    //console.log(e);
    const fileTransfer: TransferObject = this.transfer.create();
    const url = encodeURI('http://221.224.163.10:9443/temp/' + this.app.packageName + '.apk');
    let fileURL: string;
    fileTransfer.onProgress((ProgressEvent) => {//download progress listener
      let percent = ProgressEvent.loaded / ProgressEvent.total * 100;
      percent = Math.round(percent);
      e.style.width = percent + "%";
      e.textContent = percent + "%";
    });

    fileTransfer.download(url, this.file.externalDataDirectory + this.app.packageName + '.apk', true)
      .then((entry) => {
        if (confirm(this.app.name + '下载完成，是否立即安装？')) {
          fileURL = entry.toURL();

          this.file.checkFile(this.file.externalDataDirectory, this.app.packageName + '.apk').then((entry) => {//download file exists
            this.fileOpener.open(fileURL, 'application/vnd.android.package-archive')
              .then((entry) => {
                  e.textContent = "打开"
                }//open file success
                , (error) => {
                  alert('开启安装包错误，请重新再试！');
                })//open file fail
          }, (error) => {
            alert('文件无法找到，请重新再试！');
          })//file.checkFile file not exist
        } else {
        }//user choose not install app now
      }, (error) => {
        alert('无可用网络连接！' + error.code);
      })//fileTransfer.download error
  }

  //检测点击的按钮，分别调用对应的函数
  callApp(e) {
    let str = e.target.textContent.replace(/^\s+|\s+$/g, "");
    if (str == "下载") {
      this.app.buttonColor = "secondary";
      this.downloadApp(e.target);
    } else if (str == "打开") {
      this.startApp();
    }
  }
}
