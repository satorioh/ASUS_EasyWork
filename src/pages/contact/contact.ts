import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { NavController, Platform} from 'ionic-angular';

declare var BMap;


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPageComponent implements OnInit{

  @ViewChild('map') mapElement: ElementRef;

  constructor(
    private navCtrl: NavController,
    public platform: Platform
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    var map = new BMap.Map(this.mapElement.nativeElement);
     var point = new BMap.Point(116.404, 39.915);
     map.centerAndZoom(point, 15);

    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.GeolocationControl());
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("苏州");

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == 0){
        //console.log(r.point);
        //var point = new BMap.Point(r.point);

        //map.centerAndZoom(point, 15);
        // var mk = new BMap.Marker(r.point);
        // map.addOverlay(mk);
        // map.panTo(r.point);

        var translateCallback = function (data){
          if(data.status === 0) {
            var marker = new BMap.Marker(data.points[0]);
            map.addOverlay(marker);
            var label = new BMap.Label("转换后的百度坐标（正确）",{offset:new BMap.Size(20,-10)});
            marker.setLabel(label); //添加百度label
            map.setCenter(data.points[0]);
          }
        };

        setTimeout(function(){
          var convertor = new BMap.Convertor();
          var pointArr = [];
          pointArr.push(r.point);
          console.log(r.point);

          convertor.translate(pointArr, 0, translateCallback);
          console.dir(pointArr);
        }, 1000);
        //console.log('您的位置：'+r.point.lng+','+r.point.lat);
        var geoc = new BMap.Geocoder();
        geoc.getLocation(r.point, function(rs){
          var addComp = rs.addressComponents;
          var posMessage = "您当前的位置："+ addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
          document.getElementById('position').textContent = posMessage;
          console.log(posMessage);
        });

      }
      else {
        console.log('failed'+this.getStatus());
      }
    },{enableHighAccuracy: true})
  }

}
