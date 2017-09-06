import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';
import {MapService} from '../../app/map.service';
import { PopOver} from '../../components/pop-over/pop-over';

declare var BMap;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPageComponent implements OnInit{
  @ViewChild('map') mapElement: ElementRef;

//bMap = {};

  constructor(
    private navCtrl: NavController,
    public platform: Platform,
    private _bMap: MapService,
    public popoverCtrl: PopoverController
  ) {}

  mapResult = this._bMap.locateResult;
  mapLocate = this._bMap.locate();
  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap(){
    //初始化地图
    let map = new BMap.Map(this.mapElement.nativeElement);
    let point = new BMap.Point(120.61990712,31.31798737);
    map.centerAndZoom(point, 15);

    //加载地图插件
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.GeolocationControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("苏州");

    this.mapLocate;
    //;
    if(this.mapResult.ifSuccess=="success"){
      let ggpoint = this.mapResult.ggpoint;
      map.centerAndZoom(ggpoint, 15);
      let mk = new BMap.Marker(ggpoint);
      map.addOverlay(mk);
      map.panTo(ggpoint);

      document.getElementById('position').textContent = this.mapResult.address;
    }else{
      alert(this.mapResult.address);
    }

  }


}//export class end


// presentPopover(myEvent) {
//     alert("功能开发中，敬请期待!")
//     // let popover = this.popoverCtrl.create(PopOver);
//     // popover.present({
//     //   ev: myEvent
//     // });
//   }

