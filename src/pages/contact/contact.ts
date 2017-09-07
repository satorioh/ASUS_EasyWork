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
  result = this.mapService.locate();

  ngOnInit() {

    this.platform.ready().then(() => {

      //初始化地图
      let map = new BMap.Map(this.mapElement.nativeElement);
      let point = new BMap.Point(120.61990712, 31.31798737);
      map.centerAndZoom(point, 15);

      //加载地图插件
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.GeolocationControl());
      map.addControl(new BMap.MapTypeControl());
      map.setCurrentCity("苏州");

      console.log(this.result);
      console.log(this.result.longitude);
      console.log(this.result.latitude);
      let ggpoint = new BMap.Point(this.result.longitude, this.result.latitude);
      map.centerAndZoom(ggpoint, 15);
      let mk = new BMap.Marker(ggpoint);
      map.addOverlay(mk);
      map.panTo(ggpoint);

      //逆地址解析
      let geoc = new BMap.Geocoder();
      geoc.getLocation(ggpoint, function (rs) {
        let addComp = rs.addressComponents;
        let address = "您当前的位置：" + addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
        console.log(address);
        document.getElementById('position').textContent = address;
      });
    })
    // }else{
    //   console.log("请在设置-应用-ASUS EasyWork-权限中开启位置信息权限，以正常使用定位功能");
    // }
  };
}//export class end


// presentPopover(myEvent) {
//     alert("功能开发中，敬请期待!")
//     // let popover = this.popoverCtrl.create(PopOver);
//     // popover.present({
//     //   ev: myEvent
//     // });
//   }

