import {Component, EventEmitter, Input, Output} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppDetailComponent } from "../appDetail/appDetail";

@Component({
  selector: 'app-item',
  templateUrl: 'appItem.html'
})

export class AppItemComponent {
  constructor(public navCtrl: NavController){
  }
  @Input() app:any = {};

  goToDetailPage(e) {
    this.navCtrl.push(AppDetailComponent,this.app);
  }
  callApp(e){
    console.log("test");
  }
  ionViewCanLeave(e): boolean{
    if(e.target.nodeName == "SPAN"){
      this.callApp(e);
      return false;
    }else {
      this.goToDetailPage(e);
    }
  }

}
