import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPageComponent } from '../pages/about/about';
import { ContactPageComponent } from '../pages/contact/contact';
import { HomePageComponent } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AppDetailComponent } from '../pages/appDetail/appDetail';
import { AppDataService } from './appData.service';
import { AppItemComponent } from '../pages/home/appItem.component';
import { ProgressBarComponent } from './progressBar.component'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device  } from '@ionic-native/device';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
//import { ThemeableBrowser} from '@ionic-native/themeable-browser';
//import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';


@NgModule({
  declarations: [
    MyApp,
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    TabsPage,
    AppDetailComponent,
    AppItemComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    AppDetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppAvailability,
    Device,
    Transfer,
    TransferObject,
    File,
    FileOpener,
    AppDataService,
    LoadingController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
