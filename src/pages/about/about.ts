import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPageComponent implements OnInit{

  constructor(
    public sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController
  ) {}

  manualUrl() {
    let dangerousUrl = 'http://appservice.asus.com/app_userguide/index.html';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
  }
  loader = this.loadingCtrl.create({
       content: "载入中...",
       duration: 1500
     });

  ngOnInit(){
    this.loader.present();
  }
}
