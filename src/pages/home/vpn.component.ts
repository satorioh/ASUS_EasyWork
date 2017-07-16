import { Component } from '@angular/core';
import { AppDataService } from '../../app/appData.service';

@Component({
  selector: 'vpn',
  templateUrl: 'vpn.html'
})

export class VpnComponent {
  constructor(private appData:AppDataService){

  }
}
