import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { PopoverController} from 'ionic-angular';
import { PopOver} from '../../components/pop-over/pop-over';

declare var BMap;
declare var baidu_location: any;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPageComponent implements OnInit{

  @ViewChild('map') mapElement: ElementRef;

  constructor(
    private navCtrl: NavController,
    public platform: Platform,
    public popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    let ggLng = '';
    let ggLat = '';

    //初始化地图
    let map = new BMap.Map(this.mapElement.nativeElement);
    let point = new BMap.Point(120.61990712,31.31798737);
    map.centerAndZoom(point, 15);

    //加载地图插件
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.GeolocationControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("苏州");

    //使用cordova baidu SDK plugin获取原始经纬度
    baidu_location.getCurrentPosition(function (result) {
      if(result.describe=="网络定位成功"){
        console.dir(result);
        ggLng = result.longitude;
        ggLat = result.latitude;
        let ggpoint = new BMap.Point(ggLng,ggLat);
        map.centerAndZoom(ggpoint, 15);
        let mk = new BMap.Marker(ggpoint);
        map.addOverlay(mk);
        map.panTo(ggpoint);

        //逆地址解析
        let geoc = new BMap.Geocoder();
        geoc.getLocation(ggpoint, function(rs){
          let addComp = rs.addressComponents;
          let posMessage = "您当前的位置："+ addComp.province + addComp.city + addComp.district+ addComp.street +addComp.streetNumber;
          document.getElementById('position').textContent = posMessage;
          console.log(posMessage);
        });
      }else{
        alert("请在设置-应用-ASUS EasyWork-权限中开启位置信息权限，以正常使用定位功能")
      }
    }, function (err) {
      alert("定位失败");
    });
  }//loadmap function en

}//export class end


// presentPopover(myEvent) {
//     alert("功能开发中，敬请期待!")
//     // let popover = this.popoverCtrl.create(PopOver);
//     // popover.present({
//     //   ev: myEvent
//     // });
//   }

