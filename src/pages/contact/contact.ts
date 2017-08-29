import {Component, OnInit} from '@angular/core';
import { OfflineOptions, ControlAnchor, NavigationControlType } from 'angular2-baidu-map';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPageComponent implements OnInit{

  constructor(public platform: Platform) {}

  opts: any;
  offlineOpts: OfflineOptions;

  ngOnInit() {
    this.platform.ready().then(() => {
      this.opts = {
        center: {
          longitude: 121.506191,
          latitude: 31.245554
        },
        zoom: 17,
        markers: [{
          longitude: 121.506191,
          latitude: 31.245554,
          title: 'Where',
          content: 'Put description here',
          enableDragging: true
        }],
        geolocationCtrl: {
          anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
        },
        scaleCtrl: {
          anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
        },
        overviewCtrl: {
          isOpen: true
        },
        navCtrl: {
          type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
        }
      };

      this.offlineOpts = {
        retryInterval: 5000,
        txt: 'NO-NETWORK'
      };
    });
  }

  loadMap(map: any) {
    console.log('map instance here', map);
  }

  clickMarker(marker: any) {
    console.log('The clicked marker is', marker);
  }

  clickmap(e: any) {
    console.log(`Map clicked with coordinate: ${e.point.lng}, ${e.point.lat}`);
  }
}
