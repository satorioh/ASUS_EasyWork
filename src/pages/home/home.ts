import {Component, OnInit} from '@angular/core';
import { AppDataService } from '../../app/appData.service';
import {Network} from '@ionic-native/network';
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent implements OnInit{
  appDatas:any[] = [];
  constructor(
    private appData:AppDataService,
    private network: Network,
    public toastCtrl: ToastController
  ) {
    this.appDatas = appData.appArr;
  }
  ngOnInit(){
    this.networkCheck();
  };

  networkCheck=()=>{
    if (this.network.type == "none") {
      alert("网络未连接，请连接网络后重新启动程序");
    }
  };

  // networkToast=(str)=> {
  //   let toast = this.toastCtrl.create({
  //     message: str,
  //     duration: 2000,
  //     position: 'top'
  //   });
  //   toast.present();
  // }
}

