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
  lockSwipeToPrev:boolean;

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
      this.lockSwipeToPrev = true;

    })
  }

  onViewTitleChanged(title) {
    console.log(title);
    let eventText = document.getElementsByClassName('no-events-label')[0];
    eventText.innerHTML = title;

  }
  onTimeSelected(ev){
    console.dir(ev);
    let selected = new Date(ev.selectedTime);
    let selectedDate = selected.getDate();
    let tbody = document.querySelector(".monthview-datetable>tbody");
    let tds = tbody.querySelectorAll("td:not(.text-muted)");
    //console.dir(tds);
    for(let i=0,len=tds.length;i<len;i++){
      let td = <HTMLElement><any>tds[i];
      if(td.innerText==selectedDate.toString()){
          td.setAttribute("class","hook");
      }
    }
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
