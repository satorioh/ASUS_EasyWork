//核心组件
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { MyApp } from './app.component';

//自定义组件
import { AboutPageComponent } from '../pages/about/about';
import { ContactPageComponent } from '../pages/contact/contact';
import { HomePageComponent } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AppDetailComponent } from '../pages/appDetail/appDetail';
import { AppDataService } from './appData.service';
import { AppItemComponent } from '../pages/home/appItem.component';
import { ProgressBarComponent } from './progressBar.component';
import { SlideShowComponent } from './slideShow.component';
import { PopOver } from '../components/pop-over/pop-over';
import { Login } from '../components/login/login';


//第三方组件
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device  } from '@ionic-native/device';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { NgCalendarModule  } from 'ionic2-calendar';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    TabsPage,
    AppDetailComponent,
    AppItemComponent,
    ProgressBarComponent,
    SlideShowComponent,
    PopOver,
    Login
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    AppDetailComponent,
    PopOver,
    Login
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
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
