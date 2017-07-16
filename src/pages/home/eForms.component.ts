import { Component } from '@angular/core';
import { AppDataService } from '../../app/appData.service';

@Component({
  selector: 'eforms',
  templateUrl: 'eForms.html'
})

export class eFormsComponent {
  constructor(private appData:AppDataService){

  }
}
