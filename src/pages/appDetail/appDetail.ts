import {Component} from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'app-detail',
  templateUrl: 'appDetail.html'
})
export class AppDetailComponent{
  constructor(private navParams: NavParams) {
    //console.log(navParams.data);
  }
  ItemInfo = this.navParams.data;
}
