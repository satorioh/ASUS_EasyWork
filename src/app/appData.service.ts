import {Injectable} from "@angular/core";

@Injectable()
export  class AppDataService {
  appArr:any[] = [
    {
      id: 1,
      name: 'Skype for Business',
      packageName: 'com.microsoft.office.lync15',
      version: '6.16.0.6',
      size:'41.4 MB',
      icon: 'assets/img/skype-icon.png',
      corp: 'Microsoft Corporation',
      info: 'Skype for Business(原来的 Lync 2013)将Lync和Skype的强大功能扩展至常用的移动设备 – 在简单易用的单一界面中，你可以进行无线语音和视频通话、查看丰富的状态信息、传递即时消息、参加会议以及拨打电话。',
      method:'',
      buttonColor:'blue',
      percent:100
    },
      {
        id: 2,
        name: 'ASUS IT Mobile Portal',
        packageName: 'com.asusit.ap5.asusitmobileportal',
        version: '1.1.9',
        size:'5.8 MB',
        icon: 'assets/img/e-form-icon.png',
        corp: 'ASUSTeK COMPUTER INC.',
        info: '本APP是華碩員工專屬，提供MIS所開發的各項免費應用程式，可以幫助同仁在工作效率上、或生活便利性，利用您隨身的智慧手機，創造更優質的華碩科技生活！',
        method:'',
        buttonColor:'blue',
        percent:100
      },
      {
        id: 3,
        name: 'VPN',
        packageName: 'com.blazasoft.vpn',
        version: '1.1',
        size:'156 KB',
        icon: 'assets/img/vpn-icon.png',
        corp: 'BlazaSoft',
        info: 'This application is a single-tap shortcut to the VPN Settings menu. There are no ads, permissions or unnecessary features, nor will there be in the future.You can use it to access the VPN Settings menu right from your home screen, with a single tap.',
        method:'',
        buttonColor:'blue',
        percent:100
      }
  ];

  constructor(){
  }
  // goToDetailPage() {
  //   this.navCtrl.push(AppDetail);
  // }
}
