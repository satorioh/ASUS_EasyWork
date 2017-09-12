import { Component } from '@angular/core';

/**
 * Generated class for the UserCenter component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'user-center',
  templateUrl: 'user-center.html'
})
export class UserCenter {

  text: string;

  constructor() {
    console.log('Hello UserCenter Component');
    this.text = 'Hello World';
  }

}
