import {Injectable} from "@angular/core";
//import {ViewChild, ElementRef} from '@angular/core';

//declare var BMap;
declare var baidu_location: any;

@Injectable()
export  class MapService {
  constructor(){}

  locate(){
  let locateResult:any = {};
    //使用cordova baidu SDK plugin获取原始经纬度
    baidu_location.getCurrentPosition(function (result) {
      if(result.describe=="网络定位成功"){
        console.dir(result);
        locateResult = result;
  }
    });
    return locateResult;
  }

}

  //逆地址解析
  // addressResolve(ggpoint){
  //   let geoc = new BMap.Geocoder();
  //   geoc.getLocation(ggpoint, function(rs){
  //     let addComp = rs.addressComponents;
  //     locateResult.address = "您当前的位置："+ addComp.province + addComp.city + addComp.district+ addComp.street +addComp.streetNumber;
  //     console.log(locateResult.address);
  //   });
  // }


