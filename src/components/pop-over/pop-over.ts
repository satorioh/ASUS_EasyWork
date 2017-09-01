import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  selector: 'pop-over',
  templateUrl: 'pop-over.html'
})
export class PopOver {


  constructor(
    public viewCtrl: ViewController
  ) {}

  calendar = {
    mode: 'month',
    currentDate: new Date()

    };

  close() {
    this.viewCtrl.dismiss();
  }
}
