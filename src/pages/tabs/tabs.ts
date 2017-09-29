import { Component } from '@angular/core';
import { HomePageComponent } from '../home/home';
import { AboutPageComponent } from '../about/about';
import { ContactPageComponent } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePageComponent;
  tab2Root = AboutPageComponent;
  tab3Root = ContactPageComponent;

  constructor(
  ) {}


}
