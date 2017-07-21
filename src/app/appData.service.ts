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
      icon: 'assets/img/icon/skype-icon.png',
      corp: 'Microsoft Corporation',
      info: 'Skype for Business(原来的 Lync 2013)将Lync和Skype的强大功能扩展至常用的移动设备 – 在简单易用的单一界面中，你可以进行无线语音和视频通话、查看丰富的状态信息、传递即时消息、参加会议以及拨打电话。',
      method:'',
      buttonColor:'blue',
      percent:100,
      slideImg:['assets/img/slide/skype_1.png','assets/img/slide/skype_2.png','assets/img/slide/skype_3.png','assets/img/slide/skype_4.png','assets/img/slide/skype_5.png','assets/img/slide/skype_6.png']
    },
      {
        id: 2,
        name: 'ASUS IT Mobile Portal',
        packageName: 'com.asusit.ap5.asusitmobileportal',
        version: '1.1.9',
        size:'5.8 MB',
        icon: 'assets/img/icon/e-form-icon.png',
        corp: 'ASUSTeK COMPUTER INC.',
        info: '本APP是華碩員工專屬，提供MIS所開發的各項免費應用程式，可以幫助同仁在工作效率上、或生活便利性，利用您隨身的智慧手機，創造更優質的華碩科技生活！',
        method:'',
        buttonColor:'blue',
        percent:100,
        slideImg:['assets/img/slide/asusitmobile_1.png','assets/img/slide/asusitmobile_2.png','assets/img/slide/asusitmobile_3.png','assets/img/slide/asusitmobile_4.png']
      },
    {
      id: 3,
      name: 'Outlook',
      packageName: 'com.microsoft.office.outlook',
      version: '2.1.219',
      size:'37.0 MB',
      icon: 'assets/img/icon/outlook-icon.png',
      corp: 'Microsoft Corporation',
      info: '快来体验 Android 版 Outlook，这个应用可帮助数百万用户在一个便利位置连接他们的所有电子邮件帐户、日历和文件。Android 版 Outlook 经过重新设计，让你能够在一个功能强大的收件箱执行更多操作。想要先查看最重要的邮件就到“重点”收件箱，该收件箱将重要邮件放在最上方。点击几下就可以在电子邮件和日历之间进行切换，方便你安排下一个会议或共享你的空闲时间。你也可以从文件列表中选择一个文档，再将其无缝附加到电子邮件中。',
      method:'',
      buttonColor:'blue',
      percent:100,
      slideImg:['assets/img/slide/outlook_1.png','assets/img/slide/outlook_2.png','assets/img/slide/outlook_3.png','assets/img/slide/outlook_4.png','assets/img/slide/outlook_5.png','assets/img/slide/outlook_6.png']
    },
      {
        id: 4,
        name: 'VPN',
        packageName: 'com.blazasoft.vpn',
        version: '1.1',
        size:'156 KB',
        icon: 'assets/img/icon/vpn-icon.png',
        corp: 'BlazaSoft',
        info: 'This application is a single-tap shortcut to the VPN Settings menu. There are no ads, permissions or unnecessary features, nor will there be in the future.You can use it to access the VPN Settings menu right from your home screen, with a single tap.',
        method:'',
        buttonColor:'blue',
        percent:100,
        slideImg:['assets/img/slide/vpn_1.png','assets/img/slide/vpn_2.png','assets/img/slide/vpn_3.png','assets/img/slide/vpn_4.png','assets/img/slide/vpn_5.png']
      }
  ];

  constructor(){
  }
  // goToDetailPage() {
  //   this.navCtrl.push(AppDetail);
  // }
}
