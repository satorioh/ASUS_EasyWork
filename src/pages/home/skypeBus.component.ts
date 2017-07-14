import { Component } from '@angular/core';
import { APPDATA } from '../../app/appData.service';

@Component({
  selector: 'skypebus',
  templateUrl: 'skypeBus.html'
})

export class SkypeBus {
  constructor(private appData:APPDATA){

  }
}
