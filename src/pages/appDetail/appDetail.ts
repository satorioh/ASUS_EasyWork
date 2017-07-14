import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: 'appDetail.html'
})
export class AppDetail {
  @ViewChild('nav') nav;
  constructor(public navCtrl: NavController) {

  }

}
