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
  // @Output() toDetailPage = new EventEmitter<any>();
  // note = 'EventEmitter test';
  goToDetailPage(e) {
    // this.toDetailPage.emit(this.note);
    this.navCtrl.push(AppDetailComponent,this.app);
    //console.log(this.app);
  }
}
