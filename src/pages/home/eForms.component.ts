import { Component } from '@angular/core';
import { APPDATA } from '../../app/appData.service';

@Component({
  selector: 'eforms',
  templateUrl: 'eForms.html'
})

export class eForms {
  constructor(private appData:APPDATA){

  }
}
