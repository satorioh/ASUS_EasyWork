import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {PopoverController} from 'ionic-angular';
import {MapService} from '../../app/map.service';
import { PopOver} from '../../components/pop-over/pop-over';

declare var BMap;

@Component({
  selector: 'page-contact',
  providers:[MapService],
  templateUrl: 'contact.html'
})

export class ContactPageComponent implements OnInit{
  @ViewChild('map') mapElement: ElementRef;

  constructor(
    private navCtrl: NavController,
    public platform: Platform,
    public mapService: MapService,
    public popoverCtrl: PopoverController
  ) {}

  //bMap = this.mapService;
  mapLocation = this.mapService.locate;

  ngOnInit() {
    this.platform.ready().then(() => {

      //初始化地图
      let map = new BMap.Map(this.mapElement.nativeElement);
      let point = new BMap.Point(120.61990712,31.31798737);
      map.centerAndZoom(point, 15);

      //加载地图插件
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.GeolocationControl());
      map.addControl(new BMap.MapTypeControl());
      map.setCurrentCity("苏州");

      let mapLocate = this.mapLocation();
      console.dir(mapLocate);

      console.dir(mapLocate.address);
      console.dir(mapLocate.ifSuccess);
      console.dir(mapLocate.ggpoint);

      if(mapLocate.ifSuccess){
        let ggpoint = mapLocate.ggpoint;
        map.centerAndZoom(ggpoint, 15);
        let mk = new BMap.Marker(ggpoint);
        map.addOverlay(mk);
        map.panTo(ggpoint);

        document.getElementById('position').textContent = mapLocate.address;
      }else{
        //alert(mapLocate.address);
        alert("定位失败");
      }

    });
  }







}//export class end


// presentPopover(myEvent) {
//     alert("功能开发中，敬请期待!")
//     // let popover = this.popoverCtrl.create(PopOver);
//     // popover.present({
//     //   ev: myEvent
//     // });
//   }

