webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePageComponent */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPageComponent */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPageComponent */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="应用" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="指南" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="打卡" tabIcon="checkbox-outline" #usercenter></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_appData_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent(appData) {
        this.appData = appData;
        this.appDatas = [];
        this.appDatas = appData.appArr;
    }
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="blue">\n\n    <ion-title>ASUS EasyWork</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list no-border>\n\n\n\n    <ion-list-header>\n\n      应用\n\n    </ion-list-header>\n\n    <ul>\n\n      <li *ngFor="let app of appDatas">\n\n        <app-item [app]="app"></app-item>\n\n      </li>\n\n    </ul>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_appData_service__["a" /* AppDataService */]])
    ], HomePageComponent);
    return HomePageComponent;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDataService = (function () {
    function AppDataService() {
        this.appArr = [
            {
                id: 1,
                name: 'Skype for Business',
                packageName: 'com.microsoft.office.lync15',
                version: '6.16.0.6',
                size: '41.4 MB',
                icon: 'assets/img/icon/skype-icon.png',
                corp: 'Microsoft Corporation',
                info: 'Skype for Business(原来的 Lync 2013)将Lync和Skype的强大功能扩展至常用的移动设备 – 在简单易用的单一界面中，你可以进行无线语音和视频通话、查看丰富的状态信息、传递即时消息、参加会议以及拨打电话。',
                method: '',
                buttonColor: 'blue',
                percent: 100,
                slideImg: ['assets/img/slide/skype_1.png', 'assets/img/slide/skype_2.png', 'assets/img/slide/skype_3.png', 'assets/img/slide/skype_4.png', 'assets/img/slide/skype_5.png', 'assets/img/slide/skype_6.png']
            },
            {
                id: 2,
                name: 'ASUS IT Mobile Portal',
                packageName: 'com.asusit.ap5.asusitmobileportal',
                version: '1.1.9',
                size: '5.8 MB',
                icon: 'assets/img/icon/e-form-icon.png',
                corp: 'ASUSTeK COMPUTER INC.',
                info: '本APP是華碩員工專屬，提供MIS所開發的各項免費應用程式，可以幫助同仁在工作效率上、或生活便利性，利用您隨身的智慧手機，創造更優質的華碩科技生活！',
                method: '',
                buttonColor: 'blue',
                percent: 100,
                slideImg: ['assets/img/slide/asusitmobile_1.png', 'assets/img/slide/asusitmobile_2.png', 'assets/img/slide/asusitmobile_3.png', 'assets/img/slide/asusitmobile_4.png']
            },
            {
                id: 3,
                name: 'Outlook',
                packageName: 'com.microsoft.office.outlook',
                version: '2.1.219',
                size: '37.0 MB',
                icon: 'assets/img/icon/outlook-icon.png',
                corp: 'Microsoft Corporation',
                info: '快来体验 Android 版 Outlook，这个应用可帮助数百万用户在一个便利位置连接他们的所有电子邮件帐户、日历和文件。Android 版 Outlook 经过重新设计，让你能够在一个功能强大的收件箱执行更多操作。想要先查看最重要的邮件就到“重点”收件箱，该收件箱将重要邮件放在最上方。点击几下就可以在电子邮件和日历之间进行切换，方便你安排下一个会议或共享你的空闲时间。你也可以从文件列表中选择一个文档，再将其无缝附加到电子邮件中。',
                method: '',
                buttonColor: 'blue',
                percent: 100,
                slideImg: ['assets/img/slide/outlook_1.png', 'assets/img/slide/outlook_2.png', 'assets/img/slide/outlook_3.png', 'assets/img/slide/outlook_4.png', 'assets/img/slide/outlook_5.png', 'assets/img/slide/outlook_6.png']
            },
            {
                id: 4,
                name: 'VPN',
                packageName: 'com.blazasoft.vpn',
                version: '1.1',
                size: '156 KB',
                icon: 'assets/img/icon/vpn-icon.png',
                corp: 'BlazaSoft',
                info: 'This application is a single-tap shortcut to the VPN Settings menu. There are no ads, permissions or unnecessary features, nor will there be in the future.You can use it to access the VPN Settings menu right from your home screen, with a single tap.',
                method: '',
                buttonColor: 'blue',
                percent: 100,
                slideImg: ['assets/img/slide/vpn_1.png', 'assets/img/slide/vpn_2.png', 'assets/img/slide/vpn_3.png', 'assets/img/slide/vpn_4.png', 'assets/img/slide/vpn_5.png']
            }
        ];
    }
    AppDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppDataService);
    return AppDataService;
}());

//# sourceMappingURL=appData.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPageComponent = (function () {
    function AboutPageComponent(sanitizer, loadingCtrl) {
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this.loader = this.loadingCtrl.create({
            content: "载入中...",
            duration: 1500
        });
    }
    AboutPageComponent.prototype.manualUrl = function () {
        var dangerousUrl = 'http://appservice.asus.com/app_userguide/index.html';
        return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
    };
    AboutPageComponent.prototype.ngOnInit = function () {
        this.loader.present();
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="blue">\n\n    <ion-title>\n\n      ASUS EasyWork\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <iframe [src]="manualUrl()" frameborder="0"></iframe>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pop_over_pop_over__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_calendar_calendar__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContactPageComponent = (function () {
    function ContactPageComponent(navCtrl, platform, popoverCtrl, datePipe, toastCtrl, network) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.popoverCtrl = popoverCtrl;
        this.datePipe = datePipe;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.myCheckIn = {
            knockontime: '',
            knockonpos: '',
            knockofftime: '',
            knockoffpos: ''
        };
        this.CheckInDate = JSON.parse(localStorage.getItem("CheckInDate"));
    }
    ContactPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.ionViewCanEnter();
            //this.loadMap();
            setInterval(function () {
                _this.myDate = Date.now();
            }, 1000);
        });
    };
    ContactPageComponent.prototype.ionViewCanEnter = function () {
        if (this.network.type == "none") {
            alert("请先连接网络");
            return false;
        }
        else {
            return true;
        }
    };
    ContactPageComponent.prototype.loadMap = function () {
        //初始化地图
        var map = new BMap.Map(this.mapElement.nativeElement);
        //调用baidu SDK plugin获取经纬度
        baidu_location.getCurrentPosition(function (result) {
            if (result.describe == "网络定位成功") {
                console.dir(result);
                var ggpoint = new BMap.Point(result.longitude, result.latitude);
                //逆地址解析
                var geoc = new BMap.Geocoder();
                geoc.getLocation(ggpoint, function (rs) {
                    var addComp = rs.addressComponents;
                    var address = "您当前的位置：" + addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                    console.log(address);
                    document.getElementById('position').textContent = address;
                });
            }
            else {
                alert("确保网络已连接，并在设置-应用-ASUS EasyWork-权限中开启位置信息权限，以正常使用定位功能");
            }
        }, //function success
        function (err) {
            document.getElementById('position').textContent = err + "定位失败，请重试";
        });
    };
    ContactPageComponent.prototype.presentPopover = function (e) {
        if (e.target.textContent == "地图") {
            var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_pop_over_pop_over__["a" /* PopOver */]);
            popover.present({
                ev: e
            });
        }
        else if (e.target.textContent == "日历") {
            var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_calendar_calendar__["a" /* Calendar */]);
            popover.present({
                ev: e
            });
        }
    };
    ContactPageComponent.prototype.presentToast = function (str) {
        var toast = this.toastCtrl.create({
            message: str,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    ContactPageComponent.prototype.ampmChoose = function () {
        var time = parseInt(this.datePipe.transform(this.myDate, 'HH'));
        console.log(time);
        if (time <= 12) {
            this.checkIn('knock-on', 'knockontime', 'knockonpos');
        }
        else {
            this.checkIn('knock-off', 'knockofftime', 'knockoffpos');
        }
    };
    ContactPageComponent.prototype.checkIn = function (knockType, knockTime, knockPos) {
        var knockOnTime = document.querySelector("#" + knockType + " span.knock-time");
        var knockOnPost = document.querySelector("#" + knockType + " p.knock-pos");
        var str = '';
        console.log(knockOnTime.textContent);
        if (knockOnTime.textContent) {
            str = "亲，不要重复打卡哦";
            this.presentToast(str);
            return;
        }
        else {
            knockOnTime.textContent = "打卡时间" + this.datePipe.transform(this.myDate, 'HH:mm:ss');
            this.myCheckIn[knockTime] = this.datePipe.transform(this.myDate, 'HH:mm:ss');
            knockOnPost.textContent = document.getElementById('position').textContent.substr(7);
            this.myCheckIn[knockPos] = knockOnPost.textContent;
            var knockDate = new Date(this.myDate).getDate();
            if (this.CheckInDate) {
                this.CheckInDate.push(knockDate);
                localStorage.setItem("CheckInDate", JSON.stringify(this.CheckInDate));
            }
            else {
                localStorage.setItem("CheckInDate", JSON.stringify(new Array(knockDate)));
            }
            str = "打卡成功！";
            this.presentToast(str);
        }
    };
    ContactPageComponent.prototype.goToLogin = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__components_login_login__["a" /* Login */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('bmap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ContactPageComponent.prototype, "mapElement", void 0);
    ContactPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]],template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar color="blue">\n\n    <ion-item color="blue">\n\n      <button ion-button menuToggle icon-only left>\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n      <ion-title></ion-title>\n\n      <button ion-button item-end small (click)="presentPopover($event)">日历</button>\n\n      <button ion-button item-end small (click)="presentPopover($event)">地图</button>\n\n    </ion-item>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name="pin" item-start color="danger" small></ion-icon>\n\n      <h2 id="position">您当前的位置：获取中...</h2>\n\n    </ion-item>\n\n      <div id="bmap" #bmap></div>\n\n    <ion-item id="knock-on">\n\n      <span class="knock-icon">上</span>\n\n      <span class="knock-time"></span>\n\n      <span>(上班时间8:00)</span>\n\n      <p class="knock-pos"></p>\n\n    </ion-item>\n\n    <ion-item id="knock-off">\n\n      <span class="knock-icon">下</span>\n\n      <span class="knock-time"></span>\n\n      <span>(下班时间17:00)</span>\n\n      <p class="knock-pos"></p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div id="check-in" (click)="ampmChoose($event)">\n\n    <span>打卡<br/>{{ myDate | date:\'HH:mm:ss\' }}</span>\n\n    <!--<span></span>-->\n\n  </div>\n\n</ion-content>\n\n\n\n<!--用户中心-->\n\n<ion-menu [content]="usercenter">\n\n  <ion-header>\n\n    <ion-navbar color="blue">\n\n      <ion-title>用户中心</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content id="ucenter-header">\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/img/icon/user.png" id="avator">\n\n        </ion-avatar>\n\n        <h2 id="show-ucname">未登录</h2>\n\n        <p id="show-uename"></p>\n\n      </ion-item>\n\n\n\n      <ion-card-content>\n\n      </ion-card-content>\n\n\n\n      <ion-row>\n\n          <button ion-button block clear small full (click)="goToLogin($event)">\n\n            <div>登 录</div>\n\n          </button>\n\n      </ion-row>\n\n    </ion-card>\n\n\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav #usercenter [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], ContactPageComponent);
    return ContactPageComponent;
}()); //export class end

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopOver = (function () {
    function PopOver(viewCtrl, platform) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
    }
    PopOver.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loadMap();
        });
    };
    PopOver.prototype.loadMap = function () {
        //初始化地图
        var map = new BMap.Map(this.mapElement.nativeElement);
        var point = new BMap.Point(120.61990712, 31.31798737);
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
                var ggpoint = new BMap.Point(result.longitude, result.latitude);
                map.centerAndZoom(ggpoint, 15);
                var mk = new BMap.Marker(ggpoint);
                map.addOverlay(mk);
                map.panTo(ggpoint);
                //逆地址解析
                var geoc = new BMap.Geocoder();
                geoc.getLocation(ggpoint, function (rs) {
                    var addComp = rs.addressComponents;
                    var address = "您当前的位置：" + addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                    console.log(address);
                    //document.getElementById('position').textContent = address;
                });
            }
            else {
                alert("确保网络已连接，并在设置-应用-ASUS EasyWork-权限中开启位置信息权限，以正常使用定位功能");
            }
        }, //function success
        function (err) {
            //document.getElementById('position').textContent = err + "定位失败，请重试";
        });
    };
    PopOver.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PopOver.prototype, "mapElement", void 0);
    PopOver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pop-over',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\components\pop-over\pop-over.html"*/'<button ion-button icon-only clear color="dark" class="close" (click)="close()">\n\n  <ion-icon name="close-circle"></ion-icon>\n\n</button>\n\n<div id="map" #map></div>\n\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\components\pop-over\pop-over.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], PopOver);
    return PopOver;
}());

//# sourceMappingURL=pop-over.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login = (function () {
    function Login(toastCtrl, navCtrl) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.goBack = function () {
            _this.navCtrl.pop();
        };
        this.presentToast = function (str) {
            var toast = _this.toastCtrl.create({
                message: str,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        };
    }
    Login.prototype.login = function () {
        var _this = this;
        console.log(this.uwid + ',' + this.upwd);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    doResponse(xhr);
                }
                else {
                    alert("响应完成但有问题");
                }
            }
        };
        xhr.open('POST', 'http://192.168.2.6/login.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send("uwid=" + this.uwid + "&upwd=" + this.upwd);
        var doResponse = function (xhr) {
            console.log('开始处理响应消息');
            var result = JSON.parse(xhr.responseText);
            console.dir(result);
            if (result !== null) {
                localStorage.setItem("uwid", result.uwid);
                localStorage.setItem("upwd", result.upwd);
                document.getElementById('show-ucname').innerHTML = result.ucname;
                document.getElementById('show-uename').innerHTML = result.uename;
                document.getElementById('avator').setAttribute("src", "assets/img/icon/asus.png");
                _this.presentToast("登陆成功");
                _this.goBack();
            }
            else {
                _this.presentToast("用户名或密码错误");
            }
        };
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\components\login\login.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="ucenter-content">\n  <ion-list inset>\n    <ion-item>\n      <ion-label>工号</ion-label>\n      <ion-input type="text" [(ngModel)]="uwid"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>OA密码</ion-label>\n      <ion-input type="password" [(ngModel)]="upwd"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="blue" block id="loginBt" (click)="login($event)">登录</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Calendar = (function () {
    function Calendar(viewCtrl, platform) {
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    Calendar.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.lockSwipeToPrev = true;
        });
    };
    Calendar.prototype.onViewTitleChanged = function (title) {
        console.log(title);
        var eventText = document.getElementsByClassName('no-events-label')[0];
        eventText.innerHTML = title;
    };
    Calendar.prototype.onTimeSelected = function (ev) {
        console.dir(ev);
        var selected = new Date(ev.selectedTime);
        var selectedDate = selected.getDate();
        var tbody = document.querySelector(".monthview-datetable>tbody");
        var tds = tbody.querySelectorAll("td:not(.text-muted)");
        //console.dir(tds);
        for (var i = 0, len = tds.length; i < len; i++) {
            var td = tds[i];
            if (td.innerText == selectedDate.toString()) {
                td.setAttribute("class", "hook");
            }
        }
    };
    Calendar.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    Calendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\components\calendar\calendar.html"*/'<button ion-button icon-only clear color="dark" class="close" (click)="close()">\n  <ion-icon name="close-circle"></ion-icon>\n</button>\n<calendar [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          [lockSwipeToPrev]="lockSwipeToPrev"\n          (onTitleChanged)="onViewTitleChanged($event)"\n          (onTimeSelected)="onTimeSelected($event)"\n          step="30"\n          class="calendar">\n</calendar>\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\components\calendar\calendar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], Calendar);
    return Calendar;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppDetailComponent = (function () {
    function AppDetailComponent(navParams) {
        this.navParams = navParams;
        this.ItemInfo = this.navParams.data;
    }
    AppDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detail',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\pages\appDetail\appDetail.html"*/'<ion-header>\n\n  <ion-navbar color="blue" #nav>\n\n    <ion-title>\n\n      应用详情\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-thumbnail class="detailPageIcon">\n\n      <img src={{ItemInfo.icon}}>\n\n    </ion-thumbnail>\n\n    <h2>{{ItemInfo.name}}</h2>\n\n\n\n    <!--<button ion-button item-right>View</button>-->\n\n  </ion-item>\n\n  <h6>配置演示</h6>\n\n  <slide-show [slides]="ItemInfo"></slide-show>\n\n  <h6>应用描述</h6>\n\n  <p>{{ItemInfo.info}}</p>\n\n\n\n  <h6>其他信息</h6>\n\n  <p>开发者：{{ItemInfo.corp}}<br/>\n\n  版本：{{ItemInfo.version}}<br/>\n\n  大小：{{ItemInfo.size}}</p>\n\n\n\n  <button ion-button block><progress-bar [app]="ItemInfo"></progress-bar></button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\pages\appDetail\appDetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AppDetailComponent);
    return AppDetailComponent;
}());

//# sourceMappingURL=appDetail.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_availability__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProgressBarComponent = (function () {
    function ProgressBarComponent(appAvailability, platform, transfer, file, fileOpener) {
        this.appAvailability = appAvailability;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.fileOpener = fileOpener;
        this.app = {}; //从appItem.component的app对象导入
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //检查app是否已经安装
            var appcopy = _this.app;
            _this.appAvailability.check(_this.app.packageName)
                .then(function () {
                appcopy.method = "打开";
                appcopy.buttonColor = "secondary";
            }, function () {
                appcopy.method = "下载";
            });
            //获取progress-bar的height值，并设置其line-height
            _this.setLineHeight("progress-inner");
        });
    };
    ProgressBarComponent.prototype.setLineHeight = function (element) {
        var elementAll = document.getElementsByClassName(element);
        var height = window.getComputedStyle(elementAll[0], null).height;
        for (var i = 0, len = elementAll.length; i < len; i++) {
            var target = elementAll[i];
            target.style.lineHeight = height;
        }
    };
    ProgressBarComponent.prototype.startApp = function () {
        window.startApp.set({ "package": this.app.packageName }).start();
    };
    ProgressBarComponent.prototype.downloadApp = function (e) {
        var _this = this;
        //console.log(e);
        var fileTransfer = this.transfer.create();
        var url = encodeURI('http://221.224.163.10:9443/temp/' + this.app.packageName + '.apk');
        var fileURL;
        fileTransfer.onProgress(function (ProgressEvent) {
            var percent = ProgressEvent.loaded / ProgressEvent.total * 100;
            percent = Math.round(percent);
            e.style.width = percent + "%";
            e.textContent = percent + "%";
        });
        fileTransfer.download(url, this.file.externalDataDirectory + this.app.packageName + '.apk', true)
            .then(function (entry) {
            if (confirm(_this.app.name + '下载完成，是否立即安装？')) {
                fileURL = entry.toURL();
                _this.file.checkFile(_this.file.externalDataDirectory, _this.app.packageName + '.apk').then(function (entry) {
                    _this.fileOpener.open(fileURL, 'application/vnd.android.package-archive')
                        .then(function (entry) {
                        e.textContent = "打开";
                    } //open file success
                    , function (error) {
                        alert('开启安装包错误，请重新再试！');
                    }); //open file fail
                }, function (error) {
                    alert('文件无法找到，请重新再试！');
                }); //file.checkFile file not exist
            }
            else {
            } //user choose not install app now
        }, function (error) {
            alert('无可用网络连接！' + error.code);
        }); //fileTransfer.download error
    };
    //检测点击的按钮，分别调用对应的函数
    ProgressBarComponent.prototype.callApp = function (e) {
        var str = e.target.textContent.replace(/^\s+|\s+$/g, "");
        if (str == "下载") {
            this.app.buttonColor = "secondary";
            this.downloadApp(e.target);
        }
        else if (str == "打开") {
            this.startApp();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "app", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\app\progressBar.html"*/'<div class="progress-outer">\n\n  <div class="progress-inner" id={{app.buttonColor}} (click)="callApp($event)">\n\n    {{app.method}}\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\app\progressBar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_app_availability__["a" /* AppAvailability */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */]])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progressBar.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_appDetail_appDetail__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__appData_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_appItem_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progressBar_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__slideShow_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pop_over_pop_over__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_calendar_calendar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_availability__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_transfer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_opener__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic2_calendar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//核心组件





//自定义组件












//第三方组件









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_appDetail_appDetail__["a" /* AppDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_appItem_component__["a" /* AppItemComponent */],
                __WEBPACK_IMPORTED_MODULE_11__progressBar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__slideShow_component__["a" /* SlideShowComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pop_over_pop_over__["a" /* PopOver */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_15__components_calendar_calendar__["a" /* Calendar */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_appDetail_appDetail__["a" /* AppDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pop_over_pop_over__["a" /* PopOver */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_15__components_calendar_calendar__["a" /* Calendar */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_availability__["a" /* AppAvailability */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_transfer__["b" /* TransferObject */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_9__appData_service__["a" /* AppDataService */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* LoadingController */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        // this.appData = appData;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appDetail_appDetail__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_progressBar_component__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppItemComponent = (function () {
    function AppItemComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.app = {};
    }
    AppItemComponent.prototype.goToDetailPage = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appDetail_appDetail__["a" /* AppDetailComponent */], this.app);
    };
    AppItemComponent.prototype.ionViewCanLeave = function (e) {
        var str = e.target.textContent.replace(/^\s+|\s+$/g, "");
        if (str == "下载") {
            return false;
        }
        else if (str == "打开") {
            return false;
        }
        else {
            this.goToDetailPage(e);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppItemComponent.prototype, "app", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__app_progressBar_component__["a" /* ProgressBarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__app_progressBar_component__["a" /* ProgressBarComponent */])
    ], AppItemComponent.prototype, "progressBar", void 0);
    AppItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\pages\home\appItem.html"*/'<ion-item (click)="ionViewCanLeave($event)">\n\n  <ion-thumbnail item-left>\n\n    <img src={{app.icon}}>\n\n  </ion-thumbnail>\n\n  <h2>{{app.name}}</h2>\n\n  <p>{{app.corp}}</p>\n\n\n\n  <button ion-button item-right><progress-bar [app]="app" item-right></progress-bar></button>\n\n</ion-item>\n\n<!--ionViewCanLeave($event)-->\n\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\pages\home\appItem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AppItemComponent);
    return AppItemComponent;
}());

//# sourceMappingURL=appItem.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideShowComponent = (function () {
    function SlideShowComponent() {
        this.slides = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideShowComponent.prototype, "slides", void 0);
    SlideShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'slide-show',template:/*ion-inline-start:"C:\Users\work\ASUS EasyWork\src\app\slideShow.html"*/'<ion-slides pager>\n\n  <ion-slide *ngFor="let slide of slides.slideImg">\n\n    <img [src]="slide" class="slide-image"/>\n\n  </ion-slide>\n\n</ion-slides>\n\n'/*ion-inline-end:"C:\Users\work\ASUS EasyWork\src\app\slideShow.html"*/
        })
    ], SlideShowComponent);
    return SlideShowComponent;
}());

//# sourceMappingURL=slideShow.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[209]);
//# sourceMappingURL=main.js.map