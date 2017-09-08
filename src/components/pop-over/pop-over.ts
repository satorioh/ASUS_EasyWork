import {Component, ViewChild, ElementRef,OnInit} from '@angular/core';
import {ViewController, Platform} from 'ionic-angular';

declare var BMap;
declare var baidu_location: any;

@Component({
  selector: 'pop-over',
  templateUrl: 'pop-over.html'
})
export class PopOver implements OnInit{
  @ViewChild('map') mapElement: ElementRef;

  constructor(
    public viewCtrl: ViewController,
    public platform: Platform
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    })
  }
  loadMap() {
    //初始化地图
    let map = new BMap.Map(this.mapElement.nativeElement);
    let point = new BMap.Point(120.61990712, 31.31798737);
    map.centerAndZoom(point, 15);

    //加载地图插件
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.GeolocationControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("苏州");

    //调用baidu SDK plugin获取经纬度
    baidu_location.getCurrentPosition(function (result) {
        if (result.describe == "网络定位成功") {
          console.dir(result);
          let ggpoint = new BMap.Point(result.longitude, result.latitude);
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
            //document.getElementById('position').textContent = address;
          });
        } else {
          alert("确保网络已连接，并在设置-应用-ASUS EasyWork-权限中开启位置信息权限，以正常使用定位功能");
        }
      },//function success
      function (err) {
        //document.getElementById('position').textContent = err + "定位失败，请重试";
      });
  }

  // calendar = {
  //   mode: 'month',
  //   currentDate: new Date()
  //
  //   };

  close() {
    this.viewCtrl.dismiss();
  }
}
