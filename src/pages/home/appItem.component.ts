import { Component, Input } from '@angular/core';
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
  goToDetailPage() {
    this.navCtrl.push(AppDetailComponent);
  }
}
