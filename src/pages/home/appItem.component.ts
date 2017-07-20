import {Component, Input,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppDetailComponent } from "../appDetail/appDetail";
import {ProgressBarComponent} from "../../app/progressBar.component";

@Component({
  selector: 'app-item',
  templateUrl: 'appItem.html'
})

export class AppItemComponent {
  constructor(
    public  navCtrl: NavController
  ){

  }
  @Input() app:any = {};
  @ViewChild(ProgressBarComponent) progressBar:ProgressBarComponent;

  goToDetailPage(e) {
    this.navCtrl.push(AppDetailComponent,this.app);
  }

  ionViewCanLeave(e): boolean{
    let str = e.target.textContent.replace(/^\s+|\s+$/g,"");
    if(str == "下载"){
      return false;
     } else if (str == "打开"){
      return false;
    }else {
      this.goToDetailPage(e);
     }
  }

}
