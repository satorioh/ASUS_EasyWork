import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { PopoverController} from 'ionic-angular';
import { PopOver} from '../../components/pop-over/pop-over';

// declare var BMap;
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
    baidu_location.getCurrentPosition(function (data) {
      console.dir(data);
      alert(data.latitude);
      alert(data.longitude);
    }, function (err) {
      console.dir(err);
      alert(err);
    });

    //初始化地图
    // var map = new BMap.Map(this.mapElement.nativeElement);
    //   var point = new BMap.Point(120.61990712, 31.31798737);
    // const x_pi = 3.14159265358979324 * 3000.0 / 180.0;
    // var gg_lon = 0;
    //   var gg_lat = 0;
    //   map.centerAndZoom(point, 15);
    // //加载地图插件
    // map.addControl(new BMap.NavigationControl());
    // map.addControl(new BMap.GeolocationControl());
    // map.addControl(new BMap.MapTypeControl());
    // map.setCurrentCity("苏州");
    // //获取经纬度
    // var geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition(function(r){
    //   if(this.getStatus() == 0){
    //     console.log(r.point);
    //     bd_decrypt(r.point.lat,r.point.lng);
    //     console.log(gg_lon,gg_lat);
    // //坐标转换回调函数
    //     var translateCallback = function (data){
    //       if(data.status === 0) {
    //         console.log(data.points[0]);
    //         //var fixedPoint = new BMap.Point(data.points[0]);
    //         //console.log(point);
    //         map.centerAndZoom(data.points[0], 15);
    //         var mk = new BMap.Marker(data.points[0]);
    //         map.addOverlay(mk);
    //         map.panTo(data.points[0]);
    //         //var marker = new BMap.Marker(data.points[0]);
    //         //bm.addOverlay(marker);
    //         //var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
    //         //marker.setLabel(label); //添加百度label
    //         //bm.setCenter(data.points[0]);
    //         //console.log('您的位置：'+r.point.lng+','+r.point.lat);
    //         var geoc = new BMap.Geocoder();
    //         geoc.getLocation(data.points[0], function(rs){
    //           var addComp = rs.addressComponents;
    //           var posMessage = "您当前的位置："+ addComp.province + ", " + addComp.city + ", " + addComp.district;
    //           document.getElementById('position').textContent = posMessage;
    //           console.log(posMessage);
    //         });
    //       }
    //     };
    // //坐标转换
    //     setTimeout(function(){
    //       var convertor = new BMap.Convertor();
    //       var pointArr = [];
    //       pointArr.push(r.point);
    //       convertor.translate(pointArr, 1, 5, translateCallback);
    //     }, 1000);
    //
    //
    //
    //     }else {
    //     document.getElementById('position').textContent = "您当前的位置：定位失败";
    //     console.log('failed'+this.getStatus());
    //   }
    // },{enableHighAccuracy: true})
    //
    // function bd_decrypt(bd_lat, bd_lon) {
    //   var x = bd_lon - 0.0065, y = bd_lat - 0.006;
    //   var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    //   var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    //   gg_lon = z * Math.cos(theta);
    //   gg_lat = z * Math.sin(theta);
    //}
  }



presentPopover(myEvent) {
    alert("功能开发中，敬请期待!")
    // let popover = this.popoverCtrl.create(PopOver);
    // popover.present({
    //   ev: myEvent
    // });
  }
}
