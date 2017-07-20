import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ThemeableBrowser,ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPageComponent {

  constructor(
    public navCtrl: NavController,
    public sanitizer: DomSanitizer
    // private themeableBrowser: ThemeableBrowser
  ) {}
  // options: ThemeableBrowserOptions = {
  //   backButtonCanClose: true
  // };
  // browser: ThemeableBrowserObject = this.themeableBrowser.create('http://appservice.asus.com/app_userguide/index.html','_self',this.options);
  updateVideoUrl() {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data, so
    // that it's easier to check if the value is safe.
    let dangerousVideoUrl = 'http://appservice.asus.com/app_userguide/index.html';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }
}
