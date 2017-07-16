import {Component} from '@angular/core';
import { AppDataService } from '../../app/appData.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePageComponent{
  appDatas:any[] = [];
  constructor(private appData:AppDataService) {
    this.appDatas = appData.appArr;
  }

}

