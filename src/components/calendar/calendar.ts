import { Component } from '@angular/core';
import {ViewController,Platform} from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class Calendar {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(
    public viewCtrl: ViewController,
    public platform: Platform
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      //this.showMonth();
    })
  }

  onViewTitleChanged(title) {
    console.log(title);
    let eventText = document.getElementsByClassName('no-events-label')[0];
    eventText.innerHTML = title;

  }
  onTimeSelected(ev){
    console.dir(ev);
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
