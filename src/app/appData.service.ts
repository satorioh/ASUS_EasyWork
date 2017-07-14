import {Injectable} from "@angular/core";
import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppDetail } from '../pages/appDetail/appDetail';

@Injectable()
export  class APPDATA {
  appArr:any[] = [
    {
      id: 1,
      name: 'Skype for Business',
      packageName: 'com.microsoft.office.lync15',
      corp: 'Microsoft Corporation',
      info: 'Skype for Business(原来的 Lync 2013)将Lync和Skype的强大功能扩展至常用的移动设备 – 在简单易用的单一界面中，你可以进行无线语音和视频通话、查看丰富的状态信息、传递即时消息、参加会议以及拨打电话。'
    },
      {
        id: 2,
        name: 'eForms',
        packageName: 'com.asusit.ap5.asusitmobileportal',
        corp: 'ASUSTeK COMPUTER INC.',
        info: '华硕内部应用之eForms，可用此eForms快速快速签核表单/假单'
      },
      {
        id: 3,
        name: 'FortiClient VPN',
        packageName: 'com.fortinet.forticlient_vpn',
        corp: 'Fortinet',
        info: 'This FortiClient VPN App allows you to create a secure Virtual Private Network (VPN) connection using IPSec or SSL VPN "Tunnel Mode" connections between your Android device and FortiGate. Your connection will be fully encrypted and all traffic will be sent over the secure tunnel.'
      }
  ];

  constructor(public navCtrl: NavController){
    this.navCtrl = navCtrl;
  }
  goToDetailPage() {
    this.navCtrl.push(AppDetail);
  }
}
