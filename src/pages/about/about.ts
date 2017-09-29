import {Component, OnInit,Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPageComponent implements OnInit{

  constructor(
    public sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController
  ) {}

  url = 'http://appservice.asus.com/app_userguide/index.html';

  loader = this.loadingCtrl.create({
       content: "载入中...",
       duration: 1500
     });

  ngOnInit(){
    this.loader.present();
  }
}
