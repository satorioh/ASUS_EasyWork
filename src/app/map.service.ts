import {Injectable} from "@angular/core";
//import {ViewChild, ElementRef} from '@angular/core';

declare var BMap;
declare var baidu_location: any;

@Injectable()
export  class MapService {
  constructor(){}



  locate():Promise<{}> {
    let ggLng = '';
    let ggLat = '';
    let locateResult = {
      ifSuccess:'',
      ggpoint:{},
      address:''
    };
    //使用cordova baidu SDK plugin获取原始经纬度
    baidu_location.getCurrentPosition(function (result) {
      if(result.describe=="网络定位成功"){
        console.dir(result);
        ggLng = result.longitude;
        ggLat = result.latitude;
        locateResult.ifSuccess = "success";
        locateResult.ggpoint = new BMap.Point(ggLng,ggLat);

        //逆地址解析
        let geoc = new BMap.Geocoder();
        geoc.getLocation(locateResult.ggpoint, function(rs){
          let addComp = rs.addressComponents;
          locateResult.address = "您当前的位置："+ addComp.province + addComp.city + addComp.district+ addComp.street +addComp.streetNumber;
          console.log(locateResult.address);
        });

      }else{
        locateResult.ifSuccess = "error";
        locateResult.address ="请在设置-应用-ASUS EasyWork-权限中开启位置信息权限，以正常使用定位功能";
      }
    }, function (err) {
      locateResult.ifSuccess = "error";
      locateResult.address ="定位失败";
    });
    return Promise.resolve(locateResult;
  }//loadmap function en


  //逆地址解析
  // addressResolve(ggpoint){
  //   let geoc = new BMap.Geocoder();
  //   geoc.getLocation(ggpoint, function(rs){
  //     let addComp = rs.addressComponents;
  //     locateResult.address = "您当前的位置："+ addComp.province + addComp.city + addComp.district+ addComp.street +addComp.streetNumber;
  //     console.log(locateResult.address);
  //   });
  // }

}
