import { Component,Input } from '@angular/core';

@Component({
  selector: 'slide-show',
  templateUrl: 'slideShow.html'
})

export class SlideShowComponent {
  @Input() slides: any = {};
}
