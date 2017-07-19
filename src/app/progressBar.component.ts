import { Component, Input,OnInit } from '@angular/core';
import { AppAvailability } from '@ionic-native/app-availability';
//import { Device  } from '@ionic-native/device';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progressBar.html'
})
export class ProgressBarComponent implements OnInit{

  @Input() progress:any;
  @Input() app:any = {};

  constructor(private appAvailability: AppAvailability) {
  }
  ngOnInit(){
    let appcopy = this.app;
    this.appAvailability.check(this.app.packageName)
      .then(function() {  // Success callback
          appcopy.method = "打开";
          appcopy.buttonColor = "secondary";
        },
        function() {  // Error callback
          appcopy.method = "下载";
          //appcopy.buttonColor = "secondary";
        })
  }

  test(){
    var pro = this.progress;
    console.log(pro);
    pro = 0;
    setInterval(function () {
      pro++;
      console.log(pro);
    },1000);
  }
}
