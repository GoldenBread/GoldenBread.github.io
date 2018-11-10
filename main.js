(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-carousel></app-carousel>\n<app-sponsors></app-sponsors>\n<app-register></app-register>\n<app-program></app-program>\n<app-infos></app-infos>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'typo3camp-nantes';
    }
    AppComponent.prototype.setLang = function (lang) {
        this.translate.use(lang);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupTranslateFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTranslateFactory", function() { return setupTranslateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./program/program.component */ "./src/app/program/program.component.ts");
/* harmony import */ var _infos_infos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infos/infos.component */ "./src/app/infos/infos.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sponsors_sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sponsors/sponsor/sponsor.component */ "./src/app/sponsors/sponsor/sponsor.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate.service.ts");
/* harmony import */ var _translate_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./translate.pipe */ "./src/app/translate.pipe.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















function setupTranslateFactory(service) {
    return function () { return service.use('fr'); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
                _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_5__["SponsorsComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _program_program_component__WEBPACK_IMPORTED_MODULE_7__["ProgramComponent"],
                _infos_infos_component__WEBPACK_IMPORTED_MODULE_8__["InfosComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _sponsors_sponsor_sponsor_component__WEBPACK_IMPORTED_MODULE_11__["SponsorComponent"],
                _translate_pipe__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production })
            ],
            providers: [
                _translate_service__WEBPACK_IMPORTED_MODULE_13__["TranslateService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: setupTranslateFactory,
                    deps: [_translate_service__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel style='height: 100vh; overflow: hidden' *ngIf=\"images\">\n  <ng-template style='height: 100%; width: 100%; object-fit: contain' ngbSlide>\n    <img src=\"{{'CAROUSEL_SLIDE1' | translate}}\" alt=\"Random first slide\">\n  </ng-template>\n  <ng-template style='height: 100%; width: 100%; object-fit: contain' ngbSlide>\n    <img [src]=\"images[1]\" alt=\"Random second slide\">\n    <div style=\"top: 30vh; font-family: 'Amatic SC'; font-size: 100px; font-weight: 300;\" class=\"carousel-caption\">\n      <span style=\"background-color: rgb(222, 84, 62);\">{{'CAROUSEL_SLIDE2_1' | translate}}<br/>\n      {{'CAROUSEL_SLIDE2_2' | translate}}<br/>\n      {{'CAROUSEL_SLIDE2_3' | translate}}</span>\n    </div>\n  </ng-template>\n</ngb-carousel>"

/***/ }),

/***/ "./src/app/carousel/carousel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.images = ["../../assets/images/onepage-slider-bg-1-1.jpg", "../../assets/images/bg-retro2017.jpg"];
    }
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subfooter\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <p>{{ 'FOOTER_BY' | translate }} <a target=\"_blank\" href=\"http://www.w-seils.com/\">W-Seils</a></p>\n      </div>\n      <div class=\"col-md-9\">\n        <nav class=\"navbar navbar-default\" role=\"navigation\">\n          <!-- Toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-2\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n          </div>   \n          <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-2\">\n            <ul style=\"display: inline-block;\" class=\"nav navbar-nav\">\n              <li><a href=\"#header-top\" class=\"smooth-scroll\">{{ 'NAVBAR_HOME' | translate }}</a></li>\n              <li><a href=\"#sponsors\" class=\"smooth-scroll\">{{ 'NAVBAR_SPONSORS' | translate }}</a></li>\n              <li><a href=\"#inscription\" class=\"smooth-scroll\">{{ 'NAVBAR_SIGNIN' | translate }}</a></li>\n              <li><a href=\"#programme\" class=\"smooth-scroll\">{{ 'NAVBAR_PROGRAM' | translate }}</a></li>\n              <li><a href=\"#infos\" class=\"smooth-scroll\">{{ 'NAVBAR_INFOS' | translate }}</a></li>\n              <li><a href=\"http://typo3-fr.org/mentions-legales/\" target=\"_blank\">{{ 'FOOTER_LEGAL' | translate }}</a></li>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/infos/infos.component.html":
/*!********************************************!*\
  !*** ./src/app/infos/infos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section clearfix object-non-visible animated object-visible fadeInUpSmall\" data-animation-effect=\"fadeInUpSmall\" data-effect-delay=\"300\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <h1 id=\"infos\" class=\"text-center\">{{ 'NAVBAR_INFOS' | translate }}</h1>\n        \n        <!-- Tabs start -->\n        <!-- ================ -->\n        <div class=\"vertical hc-tabs\">\n\n          <!-- Nav tabs -->\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li class=\"active\"><a href=\"https://typo3-fr.org/typo3-camp-nantes/index.html#tab3\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-map-marker pr-10\"></i> Lieu et contact</a></li>\n            <li><a href=\"https://typo3-fr.org/typo3-camp-nantes/index.html#tab1\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-train pr-10\"></i> Transports</a></li>\n            <li><a href=\"https://typo3-fr.org/typo3-camp-nantes/index.html#tab2\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-hotel pr-10\"></i> Hôtels</a></li>\n            <!--<li><a href=\"#tab4\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-mobile pr-10\"></i> Applis utiles à Nantes</a></li>-->\n          </ul>\n\n          <!-- Tab panes -->\n          <div class=\"tab-content\">\n            <div class=\"tab-pane fade in active\" id=\"tab3\">\n              <h1 class=\"text-center title\">Lieu et contact</h1>\n              <div class=\"space\"></div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <img alt=\"\" src=\"../../assets/images/welcome-dojo-nantes.jpg\">\n                </div>\n                <div class=\"col-md-6\">\n                  <ul class=\"list-icons\">\n                    <li><i class=\"fa fa-map-marker\"></i> DOJO Nantes<br> 26 boulevard de Stalingrad<br> 44000 Nantes</li>\n                    <li><i class=\"fa fa-map\"></i> <a href=\"https://www.google.fr/maps/dir/&#39;&#39;/DOJO+Nantes,+26+Boulevard+de+Stalingrad,+44000+Nantes/@47.2179341,-1.6129945,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x4805eeb93a0404c5:0x15f766ceeffc9ca4!2m2!1d-1.5429548!2d47.2179554\" target=\"_blank\">Sur la carte Google</a></li>\n                    <li><i class=\"fa fa-envelope\"></i> <a href=\"http://typo3-fr.org/contact/\" target=\"_blank\">Contactez-nous via le site TYPO3 France</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tab1\">\n              <h1 class=\"text-center title\">Transports</h1>\n              <div class=\"space\"></div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <h2>Vous venez en train :</h2>\n                  \n                  <p>Bonne nouvelle : Dojo Nantes est situé juste en face de la Gare :). Il vous suffit de sortir de la gare par la sortie Nord, traverser la route et hop, vous y êtes !</p>\n                  <img alt=\"\" src=\"../../assets/images/gare.jpg\">\n                </div>\n                <div class=\"col-md-6\">\n                  <h2>Vous venez en avion :</h2>\n                  <p>Site de l'aeroport de Nantes : <a href=\"http://www.nantes.aeroport.fr/\" target=\"_blank\">http://www.nantes.aeroport.fr/</a></p>\n                  <p><a href=\"http://www.nantes.aeroport.fr/sites/nantes.aeroport.fr/files/160272_tan_fiche_horaires_aeroport_0516_p2_bd-web.pdf\" target=\"_blank\">La navette</a> assure la liaison entre l'aéroport, le centre-ville et la gare de Nantes en 20 minutes : </p>\n                  <ul class=\"list-icons\">\n                    <li><i class=\"icon-check\"></i>toutes les 20 minutes du lundi au samedi  de 5h30 à 23h.</li>\n                    <li><i class=\"icon-check\"></i>toutes les 30 minutes le dimanche et jour férié de 6h15 à 23h.</li>\n                    <li><i class=\"icon-check\"></i>7 jours sur 7 (sauf le 1er mai).</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tab2\">\n              <h1 class=\"text-center title\">Hôtels</h1>\n              <div class=\"space\"></div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <p>Il y a de nombreux hôtels, appartements et solutions d'hébergement à Nantes, de tout type et pour tous les budgets.</p>\n                  <p>Nous vous conseillons de choisir une solution en centre ville ou pas loin de la gare. Comme cela vous serez autonomes pendant toute la durée de l'évènement via les transports en commun.</p>\n                  \n                </div>\n                <div class=\"col-md-6\">\n                  <p>Voici une sélection de logements bien situés qui ont un rapport qualité / prix cohérent :</p>\n                  <ul class=\"list-icons\">\n                    <li><i class=\"icon-check pr-10\"></i> Ibis Style Nantes \n                    <a target=\"_blank\" href=\"http://www.accorhotels.com/fr/hotel-8464-ibis-styles-nantes-centre-place-graslin/index.shtml\">Graslin</a> ou \n                    <a target=\"_blank\" href=\"http://www.accorhotels.com/fr/hotel-6855-ibis-styles-nantes-centre-place-royale/index.shtml\">Royale</a></li>\n                    <li><i class=\"icon-check pr-10\"></i> Appart City Confort \n                    <a target=\"_blank\" href=\"https://www.appartcity.com/fr/appart-hotel/nantes-centre-a-nantes.html\">Nantes centre</a></li>\n                    <li><i class=\"icon-check pr-10\"></i> Kyriad Nantes \n                    <a target=\"_blank\" href=\"https://www.kyriad.com/fr/hotels/kyriad-nantes-centre-gare\">Gare</a> ou \n                    <a target=\"_blank\" href=\"https://www.kyriad.com/fr/hotels/kyriad-nantes-centre-graslin?gclid=Cj0KEQjwk-jGBRCbxoPLld_bp-IBEiQAgJaftbyl7pdP4KV_jsAb4DcSZu8kGGWMoJDwtrdrZyTILg8aAnYE8P8HAQ\">Graslin</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <!--<div class=\"tab-pane fade\" id=\"tab4\">\n              <h1 class=\"text-center title\">Applis utiles à Nantes</h1>\n              <div class=\"space\"></div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <ul class=\"list-icons\">\n                    <li><i class=\"icon-check pr-10\"></i> Fugiat rem consequatur neque</li>\n                    <li><i class=\"icon-check pr-10\"></i> Vitae magnam commodi repellendus</li>\n                    <li><i class=\"icon-check pr-10\"></i> Expedita placeat omnis pariatur</li>\n                    <li><i class=\"icon-check pr-10\"></i> Fugiat rem consequatur neque</li>\n                    <li><i class=\"icon-check pr-10\"></i> Lorem ipsum dolor sit amet maiores</li>\n                    <li><i class=\"icon-check pr-10\"></i> Consectetur adipisicing elit</li>\n                    <li><i class=\"icon-check pr-10\"></i> Aut earum numquam hic placeat</li>\n                  </ul>\n                </div>\n                <div class=\"col-md-6\">\n                  <p>Sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!</p>\n                  <p>Modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!</p>\n                  <p>Dignissimos quaerat. Iusto consequuntur natus quisquam vitae omnis ipsam dolorum praesentium.</p>\n                </div>\n              </div>\n            </div>-->\n          </div>\n        </div>\n        <!-- tabs end -->\n  \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/infos/infos.component.scss":
/*!********************************************!*\
  !*** ./src/app/infos/infos.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9zL2luZm9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/infos/infos.component.ts":
/*!******************************************!*\
  !*** ./src/app/infos/infos.component.ts ***!
  \******************************************/
/*! exports provided: InfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosComponent", function() { return InfosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfosComponent = /** @class */ (function () {
    function InfosComponent() {
    }
    InfosComponent.prototype.ngOnInit = function () {
    };
    InfosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infos',
            template: __webpack_require__(/*! ./infos.component.html */ "./src/app/infos/infos.component.html"),
            styles: [__webpack_require__(/*! ./infos.component.scss */ "./src/app/infos/infos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfosComponent);
    return InfosComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header header-small fixed clearfix navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n\n        <!-- header-left start -->\n        <!-- ================ -->\n        <div class=\"header-left clearfix\">\n\n          <!-- logo -->\n          <div class=\"logo smooth-scroll\">\n            <a href=\"#header-top\" class=\"hidden-sm hidden-xs\"><img id=\"logo\" src=\"../../assets/images/logo_red.png\" alt=\"TYPO3camp Nantes 2018\"></a>\n            <a href=\"#logo\" class=\"hidden-md hidden-lg\"><img id=\"logo\" src=\"../../assets/images/logo_red.png\" alt=\"TYPO3camp Nantes 2018\"></a>\n          </div>\n\n        </div>\n        <!-- header-left end -->\n\n      </div>\n      <div class=\"col-md-9\" >\n\n        <!-- header-right start -->\n        <!-- ================ -->\n        <div class=\"header-right clearfix\">\n\n          <!-- main-navigation start -->\n          <!-- ================ -->\n          <div class=\"main-navigation animated\">\n\n            <!-- navbar start -->\n            <!-- ================ -->\n            <nav class=\"navbar fixed-top navbar-default\" role=\"navigation\">\n              <div class=\"container-fluid\">\n\n                <!-- Toggle get grouped for better mobile display -->\n                <div class=\"navbar-header\">\n                  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                  </button>\n                </div>\n\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse scrollspy smooth-scroll\" id=\"navbar-collapse-1\">\n                  <ul style=\"display: inline-block;\" class=\"nav navbar-nav navbar-right\">\n                    <li><a href=\"#header-top\">{{ 'NAVBAR_HOME' | translate }}</a></li>\n                    <li><a href=\"#sponsors\">{{ 'NAVBAR_SPONSORS' | translate }}</a></li>\n                    <li><a href=\"#inscription\">{{ 'NAVBAR_SIGNIN' | translate }}</a></li>\n                    <li><a href=\"#programme\">{{ 'NAVBAR_PROGRAM' | translate }}</a></li>\n                    <li><a href=\"#infos\">{{ 'NAVBAR_INFOS' | translate }}</a></li>\n                    <li><a id=\"lang\" href=\"javascript:void(0);\" (click)=\"switchLang()\"><span>{{ oppositeLang() }}</span></a></li>\n                  </ul>\n                </div>\n\n              </div>\n            </nav>\n            <!-- navbar end -->\n\n          </div>\n          <!-- main-navigation end -->\n\n        </div>\n        <!-- header-right end -->\n\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translate.service */ "./src/app/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate) {
        this.translate = translate;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.oppositeLang = function () {
        var lang = this.translate.lang == "fr" ? "en" : "fr";
        return lang;
    };
    NavbarComponent.prototype.switchLang = function () {
        this.translate.use(this.oppositeLang());
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/program/program.component.html":
/*!************************************************!*\
  !*** ./src/app/program/program.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"container\">\n    <br>\n    <h1 class=\"text-center space-top\" id=\"programme\">{{ 'NAVBAR_PROGRAM' | translate }}</h1>\t\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <!-- isotope filters start -->\n        <div class=\"filters text-center button-group\">\n          <ul class=\"nav nav-pills\">\n            <li class=\"active\"><a href=\"#\" data-filter=\"*\">{{ 'PROGRAM_ALL' | translate }}</a></li>\n            <li><a href=\"#\" data-filter=\".echanger\">{{ 'PROGRAM_SHARE' | translate }}</a></li>\n            <li><a href=\"#\" data-filter=\".amuser\">{{ 'PROGRAM_FUN' | translate }}</a></li>\n            <li><a href=\"#\" data-filter=\".certif\">{{ 'PROGRAM_CERTIFICATION' | translate }}</a></li>\n          </ul>\n        </div>\n        <!-- isotope filters end -->\n\n        <!-- portfolio items start -->\n        <div class=\"isotope-container row grid-space-20\">\n          <div class=\"col-sm-6 col-md-4 isotope-item echanger\">\n            <div class=\"image-box\">\n              <div class=\"overlay-container\">\n                <img src=\"../../assets/images/programme-11.jpg\" alt=\"\">\n                <a class=\"overlay small\" data-toggle=\"modal\" data-target=\"#project-1\">\n                  <i class=\"fa fa-link\"></i>\n                  <span>Echanger</span>\n                </a>\n              </div>\n              <a class=\"btn btn-lg btn-light-gray btn-block\" data-toggle=\"modal\" data-target=\"#project-1\">{{ 'PROGRAM_WORKSHOP_TITLE' | translate }}</a>\n            </div>\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"project-1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"project-1-label\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                    <h4 class=\"modal-title\" id=\"project-1-label\">{{ 'PROGRAM_WORKSHOP_TITLE' | translate }}</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <p class=\"lead\">{{ 'PROGRAM_WORKSHOP_TEXT_0' | translate }}</p>\n                        <p>{{ 'PROGRAM_WORKSHOP_TEXT_1' | translate }}</p>\n                        <p>{{ 'PROGRAM_WORKSHOP_TEXT_2' | translate }}</p>\n                        <ul>\n                          <li>{{ 'PROGRAM_WORKSHOP_TEXT_3' | translate }} </li>\n                          <li>{{ 'PROGRAM_WORKSHOP_TEXT_4' | translate }}</li>\n                          <li>{{ 'PROGRAM_WORKSHOP_TEXT_5' | translate }}</li>\n                        </ul>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"owl-carousel content-slider-with-controls\">\n                          <div class=\"overlay-container\">\n                            <img src=\"../../assets/images/programme-11.jpg\" alt=\"\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\">Fermer</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Modal end -->\n          </div>\n\n          <div class=\"col-sm-6 col-md-4 isotope-item amuser\">\n            <div class=\"image-box\">\n              <div class=\"overlay-container\">\n                <img src=\"../../assets/images/programme-41.jpg\" alt=\"\">\n                <a class=\"overlay small\" data-toggle=\"modal\" data-target=\"#project-2\">\n                  <i class=\"fa fa-link\"></i>\n                  <span>S'amuser</span>\n                </a>\n              </div>\n              <a class=\"btn btn-lg btn-light-gray btn-block\" data-toggle=\"modal\" data-target=\"#project-2\">Dîner et soirée d'accueil</a>\n            </div>\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"project-2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"project-2-label\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Fermer</span></button>\n                    <h4 class=\"modal-title\" id=\"project-2-label\">Dîner et soirée d'accueil</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <p class=\"lead\">Restaurant le Lieu Unique à Nantes</p>\n                        <p>C'est dans l'ancienne Biscuiterie LU que se trouve le bar/restaurant du Lieu Unique.</p>\n                        <p>Ce bâtiment faisait partie de l'empire industriel des pâtissiers Lefèvre-Utile et servait essentiellement au XXème siècle à la fabrication du fameux Petit-Beurre LU.</p>\n                        <p>Repensé par Jean Blaise et réhabilité par Patrick Bouchain, ce site vit aujourd'hui au rythme de spectacles culturels époustouflants et atypiques.</p>\n                        <p>Ce restaurant est synonyme de convivialité, où la vie côtoie spontanément l'art dans ses formes les plus contemporaines.</p>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"owl-carousel content-slider-with-controls\">\n                          <div class=\"overlay-container\">\n                              <img src=\"../../assets/images/programme-41.jpg\" alt=\"\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\">Fermer</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Modal end -->\n          </div>\n          \n          <div class=\"col-sm-6 col-md-4 isotope-item echanger\">\n            <div class=\"image-box\">\n              <div class=\"overlay-container\">\n                <img src=\"../../assets/images/programme-21.jpg\" alt=\"\">\n                <a class=\"overlay small\" data-toggle=\"modal\" data-target=\"#project-3\">\n                  <i class=\"fa fa-link\"></i>\n                  <span>Echanger</span>\n                </a>\n              </div>\n              <a class=\"btn btn-lg btn-light-gray btn-block\" data-toggle=\"modal\" data-target=\"#project-3\">Sessions \"mini-conférence\"</a>\n            </div>\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"project-3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"project-3-label\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                    <h4 class=\"modal-title\" id=\"project-3-label\">Sessions \"mini-conférences\"</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <p class=\"lead\">Déroulement</p>\n                        <p>Comme tous les Barcamps, le TYPO3Camp de Nantes sera organisé par ses visiteurs. Les sessions seront planifiées au début de l'évènement, ce sont les participants qui proposeront des sujets et qui décideront de participer à ceux qui les intéressent le plus.</p>\n                        <p>2 types de sessions sont possible : les sessions \"ateliers\" et les sessions \"mini-conférence\". Voici le principe des sessions \"mini-conférences\" :</p>\n                        <ul>\n                          <li>L'objectif est de présenter un sujet (relatif à TYPO3, le web, la gestion de projet, etc.) dans une durée limitée à maximum 45 minutes.</li>\n                          <li>Le participant présente son sujet avec l'appuie de slides ou d'une démo en live. Un vidéo projecteur est à la disposition des participants.</li>\n                          <li>Il est important de prendre en compte que même si c'est un TYPO3 camp se déroulant en France, les participants non francophones ne pourront partager avec vous que si vous parlez anglais avec eux. Les intervenants les plus intéressants seront très probablement anglophones, soyez donc prêts à découvrir des sujets passionnants, en anglais :)</li>\n                        </ul>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"owl-carousel content-slider-with-controls\">\n                          <div class=\"overlay-container\">\n                            <img src=\"../../assets/images/programme-21.jpg\" alt=\"\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\">Fermer</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Modal end -->\n          </div>\n          \n          <div class=\"col-sm-6 col-md-4 isotope-item amuser\">\n            <div class=\"image-box\">\n              <div class=\"overlay-container\">\n                <img src=\"../../assets/images/programme-61.jpg\" alt=\"Apéro top chef\">\n                <a class=\"overlay small\" data-toggle=\"modal\" data-target=\"#project-4\">\n                  <i class=\"fa fa-link\"></i>\n                  <span>S'amuser</span>\n                </a>\n              </div>\n              <a class=\"btn btn-lg btn-light-gray btn-block\" data-toggle=\"modal\" data-target=\"#project-4\">Apéro Top chef</a>\n            </div>\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"project-4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"project-4-label\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                    <h4 class=\"modal-title\" id=\"project-4-label\">Apéro Top chef</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <p class=\"lead\">Déroulement</p>\n                        <p>Le jeu a une durée d'environ 1 heure. Les équipes participantes devront s'affronter devant un jury de grands experts de l'apéro pour préparer une recette mystère. Différentes épreuves permettrons aux participants de découvrir les talents culinaires cachés de leurs collègues développeurs. Toutes les épreuves seront notées et permettront au jury de désigner les vainqueurs, qui gagneront bien sûr un cadeau surprise. L'ensemble des participants pourra ensuite tranquillement déguster l'apéro directement au DOJO.</p>\n                        <p>Pour pouvoir participer, vous aurez besoin simplement de votre bonne humeur, tous les ustensiles seront fournis.</p>\n                        <p>Les recettes seront en anglais bien sûr !</p>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"owl-carousel content-slider-with-controls\">\n                           <div class=\"overlay-container\">\n                               <img src=\"../../assets/images/programme-61.jpg\" alt=\"\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\">Fermer</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Modal end -->\n          </div>\n          \n          <div class=\"col-sm-6 col-md-4 isotope-item certif\">\n            <div class=\"image-box\">\n              <div class=\"overlay-container\">\n                <img src=\"../../assets/images/lanyard_table.jpg\" alt=\"\">\n                <a class=\"overlay small\" data-toggle=\"modal\" data-target=\"#project-5\">\n                  <i class=\"fa fa-link\"></i>\n                  <span>Se certifier</span>\n                </a>\n              </div>\n              <a class=\"btn btn-lg btn-light-gray btn-block\" data-toggle=\"modal\" data-target=\"#project-5\">Certification TYPO3</a>\n            </div>\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"project-5\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"project-5-label\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                    <h4 class=\"modal-title\" id=\"project-5-label\">Certification TYPO3</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <p class=\"lead\">Déroulement</p>\n                        <p>Cette année le TYPO3 Camp Nantes organise une certification TYPO3 ! Les participants à la certification devront arriver le vendredi pour 14h00. Vous avez l'opportunité de passer la certification de votre choix parmis les certifications suivantes :</p>\n                        <ul>\n                          <li>TYPO3 CMS Certified Editor (TCCE)</li>\n                          <li>TYPO3 CMS Certified Integrator (TCCI)</li>\n                          <li>TYPO3 CMS Certified Developer (TCCD)</li>\n                          <li>TYPO3 CMS Certified Consultant (TCCC)</li>\n                        </ul>\n                        <p>Toutes les certifications ont lieu au même endroit et au même moment. Vous devez choisir une seule certification.</p>\n                        <p>Pour des informations générales sur la certification, veuillez consulter le site <a href=\"https://typo3.org/certification/\" target=\"_blank\">https://typo3.org/certification/.</a></p>\n                        <p>Pour vous inscrire à la certification : <a style=\"float:right;\" class=\"btn btn-default btn-sm\" target=\"_blank\" href=\"https://www.eventbrite.com/e/typo3-certification-during-typo3-camp-nantes-tickets-45115262966\">inscrivez-vous</a></p>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"owl-carousel content-slider-with-controls\">\n                          <div class=\"overlay-container\">\n                            <img src=\"../../assets/images/lanyard_table.jpg\" alt=\"\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\">Fermer</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Modal end -->\n          </div>\n          \n          <div class=\"col-sm-6 col-md-4 isotope-item amuser\">\n            <div class=\"image-box\">\n              <div class=\"overlay-container\">\n                <img src=\"../../assets/images/programme-31.jpg\" alt=\"\">\n                <a class=\"overlay small\" data-toggle=\"modal\" data-target=\"#project-6\">\n                  <i class=\"fa fa-link\"></i>\n                  <span>S'amuser</span>\n                </a>\n              </div>\n              <a class=\"btn btn-lg btn-light-gray btn-block\" data-toggle=\"modal\" data-target=\"#project-6\">T3Beer & Co</a>\n            </div>\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"project-6\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"project-6-label\" aria-hidden=\"true\">\n              <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                    <h4 class=\"modal-title\" id=\"project-6-label\">T3Beer & Co</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <p class=\"lead\">TYPO3, la communauté et (un peu) de bière :)</p>\n                        <p>Vous pourrez prolonger le diner d'accueil du vendredi librement, le centre ville de Nantes est plein de lieux conviviaux pour se retrouver et échanger entre passionnés de TYPO3. </p>\n                        <p>Le samedi soir sera également une soirée totalement libre, alors n'hésitez surtout pas à programmer des points de rendez-vous pendant la journée.</p>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"owl-carousel content-slider-with-controls\">\n                          <div class=\"overlay-container\">\n                            <img src=\"../../assets/images/programme-31.jpg\" alt=\"\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\">Fermer</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Modal end -->\n          </div>\n          \n          \n\n        </div>\n        <!-- portfolio items end -->\n      \n        <h1 class=\"text-center\">Planning détaillé</h1>\n        <div class=\"div_table\">\n          <table class=\"table table-striped text-center\">\n            <thead>\n              <tr>\n                <th style=\"width: 200px;\">vendredi 5 octobre</th>\n                <th></th>\n                \n                \n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>14:00 - 16:30</td>\n                <td>Certification TYPO3</td>\n\n\n              </tr>\n\n              <tr>\n                <td>17:00 - 19:00</td>\n                <td>Accueil des participants et planification des sessions</td>\n                \n                \n              </tr>\n              <tr>\n                <td>19:00 - 21:00</td>\n                <td>Apéro Top Chef</td>\n                \n                \n              </tr>\n              <tr>\n                <td>21:00 - .........</td>\n                <td>Diner à Nantes, puis soirée libre</td>\n                \n                \n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"div_table\">\n          <table class=\"table table-striped text-center\">\n            <thead>\n              <tr>\n                <th style=\"width: 200px;\">samedi 6 octobre</th>\n                <th style=\"width: 45%;\">Salle 1</th>\n                <th>Salle 2</th>\n                \n                \n              </tr>\n            </thead>\n            <tbody>\n              \n              \n              <tr>\n                <td>09:00 - 10:00</td>\n                <td>Session 1</td>\n                <td>Session 2</td>\n              </tr>\n              <tr>\n                <td>10:00 - 11:00</td>\n                <td>Session 3</td>\n                <td>Session 4</td>\n                \n                \n              </tr>\n              <tr>\n                <td>11:00 - 11:30</td>\n                <td colspan=\"2\">Pause café</td>\n                \n                \n              </tr>\n              \n              <tr>\n                <td>11:30 - 12:30</td>\n                <td>Session 5</td>\n                <td>Session 6</td>\n                \n                \n              </tr><tr>\n                <td>12:30 - 13:30</td>\n                <td colspan=\"2\">Déjeuner à DOJO</td>\n                \n                \n              </tr>\n              <tr>\n                <td>13:30 - 14:30</td>\n                <td>Session 5</td>\n                <td>Session 6</td>\n              </tr>\n              <tr>\n                <td>14:30 - 15:30</td>\n                <td>Session 7</td>\n                <td>Session 8</td>\n                \n                \n              </tr><tr>\n                <td>15:30 - 16:00</td>\n                <td colspan=\"2\">Pause café</td>\n                \n                \n              </tr><tr>\n                <td>16:00 - 17:00</td>\n                <td>Session 9</td>\n                <td>Session 10</td>\n                \n                \n              </tr><tr>\n                <td>17:00 - 18:00</td>\n                <td>Session 11</td>\n                <td>Session 12</td>\n                \n                \n              </tr><tr>\n                <td>19:00 - .........</td>\n                <td colspan=\"2\">T3Beers à Nantes et soirée libre</td>\n                \n                \n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"div_table\">\n          <table class=\"table table-striped text-center\">\n            <thead>\n              <tr>\n                <th style=\"width: 200px;\">dimanche 7 octobre</th>\n                <th style=\"width: 45%\">Salle 1</th>\n                <th style=\"\">Salle 2</th>\n                \n                \n              </tr>\n            </thead>\n            <tbody>\n              \n              \n              <tr>\n                <td>09:00 - 10:00</td>\n                <td>Session 1</td>\n                <td>Session 2</td>\n              </tr>\n              <tr>\n                <td>10:00 - 11:00</td>\n                <td>Session 3</td>\n                <td>Session 4</td>\n              </tr>\n              <tr>\n                <td>11:00 - 11:30</td>\n                <td colspan=\"2\">Pause café</td>\n              </tr>\n              <tr>\n                <td>11:30 - 12:30</td>\n                <td>Session 5</td>\n                <td>Session 6</td>\n              </tr>\n            </tbody>\n          </table>\t\n        </div>\t\t\t\t\t\n      \n      \n      </div>\n    </div>\n  </div>\n</div>\n<script type=\"text/javascript\" src=\"../../../node_modules/jquery/dist/jquery.min.js\"></script>\n<script type=\"text/javascript\" src=\"../../assets/plugins/isotope.pkgd.min.js\"></script>\n<script type=\"text/javascript\" src=\"../../assets/plugins/idea-temp.js\"></script>"

/***/ }),

/***/ "./src/app/program/program.component.scss":
/*!************************************************!*\
  !*** ./src/app/program/program.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/program/program.component.ts":
/*!**********************************************!*\
  !*** ./src/app/program/program.component.ts ***!
  \**********************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramComponent = /** @class */ (function () {
    function ProgramComponent() {
    }
    ProgramComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("button").click(function () {
                var div = jquery__WEBPACK_IMPORTED_MODULE_1__("div");
                div.animate({ left: '100px' }, "slow");
                div.animate({ fontSize: '5em' }, "slow");
            });
        });
    };
    ProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! ./program.component.html */ "./src/app/program/program.component.html"),
            styles: [__webpack_require__(/*! ./program.component.scss */ "./src/app/program/program.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgramComponent);
    return ProgramComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <br>\n        <h1 class=\"text-center space-top\" id=\"inscription\">{{ 'NAVBAR_SIGNIN' | translate }}</h1>\n        <p class=\"lead text-center\">{{ 'REGISTER_WARN' | translate }}</p>\n        <br>\n        <div class=\"row row_signin\">\n          <div class=\"col-md-6\">\n            <p class=\"lead\"><strong>{{ 'REGISTER_TEXT_1' | translate }}</strong></p>\n            <p class=\"lead\">{{ 'REGISTER_TEXT_2' | translate }}\n            </p>\n            <p class=\"lead\">{{ 'REGISTER_TEXT_3' | translate }}</p>\n            <ul class=\"list-icons lead\">\n              <li class=\"object-non-visible animated object-visible fadeInUpSmall\" data-animation-effect=\"fadeInUpSmall\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> {{ 'REGISTER_TEXT_4' | translate }} <a target=\"_blank\" href=\"https://www.eventbrite.com/e/typo3-certification-during-typo3-camp-nantes-tickets-45115262966\">{{ 'REGISTER_TEXT_4_1' | translate }}</a></li>\n              <li class=\"object-non-visible animated object-visible fadeInUpSmall\" data-animation-effect=\"fadeInUpSmall\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> {{ 'REGISTER_TEXT_5' | translate }}</li>\n              <li class=\"object-non-visible animated object-visible fadeInUpSmall\" data-animation-effect=\"fadeInUpSmall\" data-effect-delay=\"100\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> {{ 'REGISTER_TEXT_6' | translate }}</li>\n              <li class=\"object-non-visible animated object-visible fadeInUpSmall\" data-animation-effect=\"fadeInUpSmall\" data-effect-delay=\"300\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> {{ 'REGISTER_TEXT_7' | translate }}</li>\n            </ul>\n            <p class=\"lead\">{{ 'REGISTER_TEXT_8' | translate }}\n            </p>\n            <p class=\"lead\">{{ 'REGISTER_TEXT_9' | translate }} <a href=\"https://typo3-fr.org/contact/\">{{ 'REGISTER_TEXT_9_1' | translate }}</a>.\n            </p>\n          </div>\n\n          <!-- sidebar start -->\n          <aside class=\"sidebar col-md-6\">\n            <div><iframe id=\"weezuniq344642\" src=\"https://www.weezevent.com/widget_billeterie.php?id_evenement=344642&lg_billetterie=1&code=21014&resize=1&width_auto=1&color_primary=ffbe1d&v=2\" resize=\"1\" height=\"298px\" width=\"100%\" hidepoweredby=\"0\" frameborder=\"0\" scrolling=\"auto\" style=\"box-sizing: initial;\" kwframeid=\"1\"></iframe><a title=\"Logiciel billetterie en ligne\" href=\"https://www.weezevent.com/?c=sys_widget\" class=\"weezevent-widget-integration rendered\" target=\"_blank\" data-src=\"https://www.weezevent.com/widget_billeterie.php?id_evenement=344642&amp;lg_billetterie=1&amp;code=21014&amp;resize=1&amp;width_auto=1&amp;color_primary=ffbe1d\" data-width=\"650\" data-height=\"600\" data-id=\"344642\" data-resize=\"1\" data-width_auto=\"1\" data-noscroll=\"0\" data-nopb=\"0\" style=\"float: right !important; margin: 10px 0px 15px !important; font-size: 11px !important; font-family: Arial, sans-serif !important; text-decoration: none !important; color: rgb(51, 51, 51) !important;\">Powered by Weezevent</a></div><script async=\"\" src=\"./TYPO3 Camp Nantes 2018_files/analytics.js\"></script><script type=\"text/javascript\" src=\"./TYPO3 Camp Nantes 2018_files/widget.min.js\"></script>\n          </aside>\n          <!-- sidebar end -->\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sponsors/sponsor/sponsor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/sponsors/sponsor/sponsor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 col-xs-6\">\n  <div class=\"box-style-1 team-member\">\n    <div class=\"overlay-container\">\n      <img src=\"{{ sponsorImage }}\" alt=\"\">\n      <div class=\"overlay overlay_sponsors\">\n        <ul class=\"social-links clearfix\">\n          <li class=\"www-link\"><a target=\"_blank\" href=\"{{ sponsorLink }}\"><i class=\"fa fa-link\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sponsors/sponsor/sponsor.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/sponsors/sponsor/sponsor.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3Ivc3BvbnNvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sponsors/sponsor/sponsor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/sponsors/sponsor/sponsor.component.ts ***!
  \*******************************************************/
/*! exports provided: SponsorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorComponent", function() { return SponsorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SponsorComponent = /** @class */ (function () {
    function SponsorComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SponsorComponent.prototype, "sponsorImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SponsorComponent.prototype, "sponsorLink", void 0);
    SponsorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsor',
            template: __webpack_require__(/*! ./sponsor.component.html */ "./src/app/sponsors/sponsor/sponsor.component.html"),
            styles: [__webpack_require__(/*! ./sponsor.component.scss */ "./src/app/sponsors/sponsor/sponsor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SponsorComponent);
    return SponsorComponent;
}());



/***/ }),

/***/ "./src/app/sponsors/sponsors.component.html":
/*!**************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"section gray-bg clearfix\" data-animation-effect=\"fadeInUpSmall\" data-effect-delay=\"300\">\n  <div class=\"container\">\n    <br>\n    <h1 class=\"text-center space-top\" id=\"sponsors\">Sponsors</h1>\n    <div class=\"row grid-space-20\">\n\n      <app-sponsor *ngFor=\"let sponsor of sponsors\"\n      [sponsorImage]=\"sponsor['image']\"\n      [sponsorLink]=\"sponsor['link']\"></app-sponsor>\n\n    </div>\n    <h2 class=\"text-center\">Un évènement mitonné par <a href=\"https://www.w-seils.com\" title=\"Agence W-Seils, agence TYPO3 à Nantes\" style=\"text-decoration:underline; font-weight:bold;\">l'agence W-Seils</a> !</h2>\n  </div>\n</div>-->\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"section gray-bg clearfix\" data-animation-effect=\"fadeInUpSmall\" data-effect-delay=\"300\">\n  <div class=\"container\">\n    <br>\n    <h1 class=\"text-center space-top\" id=\"sponsors\">Sponsors</h1>\n    <div class=\"row grid-space-20\">\n      <div class=\"col-md-3 col-xs-6\">\n        <div class=\"box-style-1 team-member\">\n          <div class=\"overlay-container\">\n            <img src=\"../../assets/images/logo_archriss.png\" alt=\"\">\n            <div class=\"overlay overlay_sponsors\">\n              <ul class=\"social-links clearfix\">\n                <li class=\"www-link\"><a target=\"_blank\" href=\"https://www.archriss.fr/\"><i class=\"fa fa-link\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-xs-6\">\n        <div class=\"box-style-1 team-member\">\n          <div class=\"overlay-container\">\n            <img src=\"../../assets/images/logo_emagineurs.png\" alt=\"\">\n            <div class=\"overlay overlay_sponsors\">\n              <ul class=\"social-links clearfix\">\n                <li class=\"www-link\"><a target=\"_blank\" href=\"https://www.e-magineurs.com/\"><i class=\"fa fa-link\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-xs-6\">\n        <div class=\"box-style-1 team-member\">\n          <div class=\"overlay-container\">\n            <img src=\"../../assets/images/logo_gaya.png\" alt=\"\">\n            <div class=\"overlay overlay_sponsors\">\n              <ul class=\"social-links clearfix\">\n                <li class=\"www-link\"><a target=\"_blank\" href=\"http://www.gaya.fr/\"><i class=\"fa fa-link\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-xs-6\">\n        <div class=\"box-style-1 team-member\">\n          <div class=\"overlay-container\">\n            <img src=\"../../assets/images/logo_wseils.png\" alt=\"\">\n            <div class=\"overlay overlay_sponsors\">\n              <ul class=\"social-links clearfix\">\n                <li class=\"www-link\"><a target=\"_blank\" href=\"https://www.w-seils.com\"><i class=\"fa fa-link\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <h2 class=\"text-center\">{{ 'SPONSORS_FOOTER' | translate }} <a href=\"https://www.w-seils.com\" title=\"Agence W-Seils, agence TYPO3 à Nantes\" style=\"text-decoration:underline; font-weight:bold;\">l'agence W-Seils</a> !</h2>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sponsors/sponsors.component.scss":
/*!**************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sponsors/sponsors.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.ts ***!
  \************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent() {
        this.sponsors = [
            {
                image: '../../assets/images/logo_archriss.png',
                link: 'https://www.archriss.fr/'
            },
            {
                image: '../../assets/images/logo_emagineurs.png',
                link: 'https://www.e-magineurs.com/'
            },
            {
                image: '../../assets/images/logo_gaya.png',
                link: 'http://www.gaya.fr/'
            },
            {
                image: '../../assets/images/logo_wseils.png',
                link: 'https://www.w-seils.com'
            }
        ];
    }
    SponsorsComponent.prototype.ngOnInit = function () {
    };
    SponsorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsors',
            template: __webpack_require__(/*! ./sponsors.component.html */ "./src/app/sponsors/sponsors.component.html"),
            styles: [__webpack_require__(/*! ./sponsors.component.scss */ "./src/app/sponsors/sponsors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SponsorsComponent);
    return SponsorsComponent;
}());



/***/ }),

/***/ "./src/app/translate.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/translate.pipe.ts ***!
  \***********************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(translate) {
        this.translate = translate;
    }
    TranslatePipe.prototype.transform = function (key, args) {
        return this.translate.data[key] || key;
    };
    TranslatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        __metadata("design:paramtypes", [_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], TranslatePipe);
    return TranslatePipe;
}());



/***/ }),

/***/ "./src/app/translate.service.ts":
/*!**************************************!*\
  !*** ./src/app/translate.service.ts ***!
  \**************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.data = {};
    }
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.lang = lang;
            var langPath = "assets/i18n/" + (lang || 'fr') + ".json";
            _this.http.get(langPath).subscribe(function (translation) {
                _this.data = Object.assign({}, translation || {});
                resolve(_this.data);
            }, function (error) {
                _this.data = {};
                resolve(_this.data);
            });
        });
    };
    TranslateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/thierry/Projects/typo3camp-nantes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map