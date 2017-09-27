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
  lockSwipes:boolean;
  strDate:string;

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
      //this.lockSwipeToPrev = true;
      //this.lockSwipes = true;
    })
  }

  onViewTitleChanged(title) {
    console.log(title);
    let eventText = document.getElementsByClassName('no-events-label')[0];
    eventText.innerHTML = title;
  }

  onTimeSelected(ev){
    //console.dir(ev);
    let str = ev.selectedTime.toString();
    str = str.substring(0,str.indexOf(" GMT"));
    this.strDate = str;
    console.log(this.strDate);
  }

  dateSend=()=>{
    let data=this.strDate;
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let cwid = currentUser["uwid"];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if(xhr.readyState===4){
        if(xhr.status ===200){
          doResponse(xhr);
        }else{
          alert("响应完成但有问题");
        }
      }
    };
    xhr.open('POST','http://192.168.2.7/calendarDate.php',true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`calendarDate=${data}&cwid=${cwid}`);

    let doResponse=(xhr)=>{
      console.log('开始查询签到记录');
      let monthCheckData = JSON.parse(xhr.responseText);
      let arr = [];
      monthCheckData.forEach(function (item) {
        let d = new Date(item["cdate"]).getDate();
        arr.push(d);
      });
      console.log(arr);
      let tbody = document.querySelector(".swiper-slide-active");
      console.dir(tbody);
      let tds = tbody.querySelectorAll("td:not(.text-muted)");
      console.dir(tds);
      arr.forEach(function (item) {
        for(let i=0,len=tds.length;i<len;i++){
          let td = <HTMLElement><any>tds[i];
          if(td.innerText==item.toString()){
            td.setAttribute("class","hook");
          }
        }
      });

    }
  };
  close() {
    this.viewCtrl.dismiss();
  }
}
