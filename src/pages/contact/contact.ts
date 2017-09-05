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
    var ggLng = '';
    var ggLat = '';

    //cordova baidu SDK plugin获取原始经纬度
    baidu_location.getCurrentPosition(function (result) {
      console.dir(result);
      //alert(JSON.stringify(result, null, 4));
      console.log(result.longitude+','+result.latitude);
      ggLng = result.longitude;
      ggLat = result.latitude;

      //初始化地图
      var map = new BMap.Map(this.mapElement.nativeElement);
      var ggpoint = new BMap.Point(ggLng,ggLat);//120.61990712,31.31798737
      map.centerAndZoom(ggpoint, 15);
      //加载地图插件
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.GeolocationControl());
      map.addControl(new BMap.MapTypeControl());
      map.setCurrentCity("苏州");
      //坐标转换回调函数
      var translateCallback = function (data) {
        if (data.status === 0) {
          console.log(data.points[0]);
          map.centerAndZoom(data.points[0], 15);
          var mk = new BMap.Marker(data.points[0]);
          map.addOverlay(mk);
          map.panTo(data.points[0]);

          //逆地址解析
          var geoc = new BMap.Geocoder();
          geoc.getLocation(data.points[0], function(rs){
            var addComp = rs.addressComponents;
            var posMessage = "您当前的位置："+ addComp.province + ", " + addComp.city + ", " + addComp.district+ ", " + addComp.street + ", " + addComp.streetNumber;
            document.getElementById('position').textContent = posMessage;
            console.log(posMessage);
          });
        }
      };
                //坐标转换
      setTimeout(function(){
        var convertor = new BMap.Convertor();
        var pointArr = [];
        pointArr.push(ggpoint);
        convertor.translate(pointArr, 1, 5, translateCallback);
      }, 1000);
    }, function (err) {
      alert(err);
    });

  }//loadmap function en
    //获取经纬度
    // var geolocation = new BMap.Geolocation();
    // geolocation.getCurrentPosition(function(r){
    //   if(this.getStatus() == 0){
    //     console.log(r.point);
    //坐标转换回调函数
    //     var translateCallback = function (data){
    //       if(data.status === 0) {
    //         console.log(data.points[0]);
    //         //var fixedPoint = new BMap.Point(data.points[0]);
    //         //console.log(point);
    //         map.centerAndZoom(data.points[0], 15);
    //         var mk = new BMap.Marker(data.points[0]);
    //         map.addOverlay(mk);
    //         map.panTo(data.points[0]);
            //var marker = new BMap.Marker(data.points[0]);
            //bm.addOverlay(marker);
            //var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
            //marker.setLabel(label); //添加百度label
            //bm.setCenter(data.points[0]);
            //console.log('您的位置：'+r.point.lng+','+r.point.lat);

          d

}//export class end
    //坐标转换
    //     setTimeout(function(){
    //       var convertor = new BMap.Convertor();
    //       var pointArr = [];
    //       pointArr.push(r.point);
    //       convertor.translate(pointArr, 1, 5, translateCallback);
    //     }, 1000);



    //     }else {
    //     document.getElementById('position').textContent = "您当前的位置：定位失败";
    //     console.log('failed'+this.getStatus());
    //   }
    // },{enableHighAccuracy: true})




// presentPopover(myEvent) {
//     alert("功能开发中，敬请期待!")
//     // let popover = this.popoverCtrl.create(PopOver);
//     // popover.present({
//     //   ev: myEvent
//     // });
//   }

