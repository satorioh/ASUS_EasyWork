import { Component } from '@angular/core';
import { APPDATA } from '../../app/appData.service';

@Component({
  selector: 'vpn',
  templateUrl: 'vpn.html'
})

export class VPN {
  constructor(private appData:APPDATA){

  }
}
