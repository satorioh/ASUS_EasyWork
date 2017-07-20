import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPageComponent {

  constructor(
    public navCtrl: NavController,
    public sanitizer: DomSanitizer
  ) {}

  manualUrl() {
    let dangerousVideoUrl = 'http://appservice.asus.com/app_userguide/index.html';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }
}
