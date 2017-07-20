import {AfterViewInit, Component, OnInit} from '@angular/core';
// import { LoadingController } from 'ionic-angular';
import { AppDataService } from '../../app/appData.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent{
  appDatas:any[] = [];
  constructor(
    private appData:AppDataService,
    // public loadingCtrl: LoadingController
  ) {
    this.appDatas = appData.appArr;
  }

  // loader = this.loadingCtrl.create({
  //     content: "载入中...",
  //     duration: 3000
  //   });
  //
  // ngOnInit(){
  //   this.loader.present();
  // }
  // ngAfterViewInit(){
  //   this.loader.dismiss();
  // }
}

