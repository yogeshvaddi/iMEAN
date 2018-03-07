webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validate_service__ = __webpack_require__("../../../../../src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__parent_parent_component__ = __webpack_require__("../../../../../src/app/parent/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__focus_directive__ = __webpack_require__("../../../../../src/app/focus.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__auth_guard__["a" /* AuthGuard */]] }
];
function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["FacebookLoginProvider"]("158513161479572")
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["GoogleLoginProvider"]("801051281287-poo269k27gqcnu7ahvb04dvtcuh17lqc.apps.googleusercontent.com")
            // For local Devleopment  //("1063753676478-8cq0p81622qbev2as9r9j6kjmdrbjc59.apps.googleusercontent.com")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__parent_parent_component__["a" /* ParentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__focus_directive__["a" /* FocusDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes), __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"], __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["SocialLoginModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_16__auth_guard__["a" /* AuthGuard */], {
                    provide: __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.loggedIn = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        if (this.authToken != null && this.authToken != undefined && this.authToken != '') {
            return true;
        }
        else {
            return false;
        }
    };
    DataService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:1289/users/register', user, { headers: headers }).map(res => res.json());
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.updateProfile = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // return this.http.put('http://localhost:1289/users/updateProfile', user, { headers: headers }).map(res => res.json());
        return this.http.put('users/updateProfile', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post("http://localhost:1289/users/authenticate", user, { headers: headers }).map(res => res.json());
        return this.http.post("users/authenticate", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.checkDuplicateEmail = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post("http://localhost:1289/users/checkDuplicateEmail", user, { headers: headers }).map(res => res.json());
        return this.http.post("users/checkDuplicateEmail", user, { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var user = JSON.parse(localStorage.getItem('user'));
        //alert(JSON.stringify(user));
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:1289/users/profile', user, { headers: headers })
        //   .map(res => {
        //     //alert(JSON.stringify(res.json()));
        //     return res.json()
        //   });
        return this.http.post('users/profile', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    DataService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        //alert(JSON.stringify(user));
    };
    DataService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.removeItem('id_token');
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* DataService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/focus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusDirective = /** @class */ (function () {
    function FocusDirective(hostElement) {
        this.hostElement = hostElement;
    }
    FocusDirective.prototype.ngOnInit = function () {
        if (this.isFocused) {
            this.hostElement.nativeElement.focus();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('myFocus'),
        __metadata("design:type", Boolean)
    ], FocusDirective.prototype, "isFocused", void 0);
    FocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appFocus]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], FocusDirective);
    return FocusDirective;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".homeBody{\r\n \r\n  background-color:darkkhaki;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"homeBody\">\n<div class=\"jumbotron text-center homeBody\">\n  <h1>Yogesh Vaddi</h1>\n  <p class=\"lead\">Hay! Happy to see you here. Welcome.</p>\n  <div>\n    <a [routerLink]=\"['/register']\" class=\"btn btn-primary\">Register</a>\n    <a [routerLink]=\"['/login']\" class=\"btn btn-primary\">Login</a>\n  \n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\" id=\"firstDiv\">\n    <!-- <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p> -->\n    <h3>Machilipatnam</h3>\n    <p>Hails from Machilipatnam</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>A Life Long Student</h3>\n    <!-- <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p> -->\n    <p>A person grows by learning.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Aspiring Innovator</h3>\n    <!-- <p>Full featured authentication using JSON web tokens. Login and store user data</p> -->\n    <p>A person watches out in the world what he/she has in mind.</p>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Welcome to Login</h2>\n<div class=\"col-xs-5 col-md-5 col-sm-5 col-lg-5\">\n<form (submit)=\"login()\">\n  <div class=\"form-group\">\n    <label for=\"email\">Email ID</label>\n    <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" id=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" id=\"password\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"checkbox\" name=\"remember\" id=\"remember\" [(ngModel)]=\"checkboxUserPassword\"> Remember\n  </div>\n  <input type=\"submit\" value=\"Login\" class=\"btn info\">\n  <button (click)=\"socialSignIn('google')\" class=\"btn btn-danger\">Google Sign In </button>\n    <button (click)=\"socialSignIn('facebook')\" class=\"btn btn-primary\">Facebook Sign In </button>  \n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate_service__ = __webpack_require__("../../../../../src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular5_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(validateService, flashMessages, authService, router, socialAuthService) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.allFields = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.allFields = false;
        if (JSON.parse(localStorage.getItem('check'))) {
            this.checkboxUserPassword = true;
            this.email = localStorage.getItem('emailC');
            this.password = localStorage.getItem('passC');
        }
        else {
            this.checkboxUserPassword = false;
            this.email = '';
            this.password = '';
        }
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            //alert(socialPlatform + " sign in data : " + JSON.stringify(userData));
            if (userData.provider == "google") {
                debugger;
                var googleUser = {
                    name: userData.name,
                    email: userData.email,
                    image: userData.image,
                    socialToken: userData.token,
                    loginType: "Through Google",
                };
                _this.socialUserLoginFunc(userData, googleUser);
            }
            else if (userData.provider == "facebook") {
                var facebookUser = {
                    name: userData.name,
                    email: userData.email,
                    image: userData.image,
                    socialToken: userData.token,
                    loginType: "Through Facebook",
                };
                _this.socialUserLoginFunc(userData, facebookUser);
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password,
            loginType: "Through Sign Up"
        };
        this.allFields = true;
        if (!this.validateService.validateLogin(user) && (this.allFields)) {
            this.flashMessages.show('Please Enter all the fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.allFields = false;
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessages.show('Please use a valid email', { cssClass: 'alert-info', timeout: 3000 });
            return false;
        }
        this.authService.checkDuplicateEmail(user).subscribe(function (data) {
            debugger;
            if (data.loginType == "Through Sign Up") {
                _this.authService.loginUser(user).subscribe(function (data) {
                    if (data.success) {
                        _this.authService.storeUserData(data.token, data.user);
                        _this.clickRememberCheck();
                        _this.flashMessages.show("You are successfully Logged In", { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['./dashboard']);
                    }
                    else {
                        _this.flashMessages.show(" Please Check the credentials and try agin", { cssClass: 'alert-warning', timeout: 3000 });
                        _this.router.navigate(['./login']);
                    }
                });
            }
            else {
                _this.flashMessages.show(data.userEmail + " is available only for social logins", { cssClass: 'alert-warning', timeout: 5000 });
                _this.router.navigate(['./login']);
                return false;
            }
        });
    };
    LoginComponent.prototype.clickRememberCheck = function () {
        if (this.checkboxUserPassword) {
            localStorage.setItem('check', JSON.stringify(this.checkboxUserPassword));
            localStorage.setItem('emailC', this.email);
            localStorage.setItem('passC', this.password);
        }
        else {
            this.checkboxUserPassword = false;
            localStorage.removeItem('emailC');
            localStorage.removeItem('passC');
            localStorage.removeItem('check');
        }
    };
    LoginComponent.prototype.socialUserLoginFunc = function (userData, socialUser) {
        var _this = this;
        debugger;
        this.authService.checkDuplicateEmail(socialUser).subscribe(function (data) {
            // alert(JSON.stringify(data.userEmail));
            if (data.userEmail == "CAN TAKE" || (data.loginType != socialUser.loginType && data.userEmail == socialUser.email)) {
                _this.authService.registerUser(socialUser).subscribe(function (gUser) {
                    if (gUser.success) {
                        _this.authService.loginUser({ "email": gUser.email,
                            "loginType": gUser.loginType }).subscribe(function (data) {
                            //alert(JSON.stringify(data));
                            _this.authService.storeUserData(data.token, data.user);
                            var SocialSignIn = socialUser.loginType == "Through Google" ? "Google" : "Facebook";
                            _this.flashMessages.show("You are successfully Logged In Through " + SocialSignIn + " Sign", { cssClass: 'alert-success', timeout: 3000 });
                            _this.router.navigate(['/dashboard']);
                        });
                    }
                });
            }
            else if (data.userEmail == socialUser.email && data.loginType == socialUser.loginType) {
                // if(data.user.provider == "google")
                debugger;
                _this.authService.updateProfile(data.user).subscribe(function (gUser) {
                    if (gUser.ok == 1) {
                        _this.authService.loginUser({ "email": data.userEmail, "loginType": data.loginType }).subscribe(function (data) {
                            //alert(JSON.stringify(data));
                            _this.authService.storeUserData(data.token, data.user);
                            var SocialSignIn = socialUser.loginType == "Through Google" ? "Google" : "Facebook";
                            _this.flashMessages.show("You are successfully Logged In Through " + SocialSignIn + " Sign", { cssClass: 'alert-success', timeout: 3000 });
                            _this.router.navigate(['/dashboard']);
                        });
                    }
                });
            }
            else {
                _this.flashMessages.show('Account already exists associated with ' + userData.email, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_5_angular5_social_login__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">Yogesh Vaddi</a>\n  <button  (click)=\"toggleCollapsed()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\" >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\" class=\"collapse navbar-collapse text-center\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav navbar-left mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"> \n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active'] \" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\n        </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, flashMessages) {
        this.router = router;
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.collapsed = true;
    }
    NavbarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessages.show('You are successfully logged out', { cssClass: 'alert-primary', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/parent/parent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parent/parent.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  parent works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/parent/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__("../../../../../src/app/parent/parent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "Profile Works"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" *ngIf=\"forProfile; else profile\">Register</h2>\n<ng-template #profile>\n  <h2 class=\"page-header\">Profile</h2>\n</ng-template>\n<div class=\"col-xs-5 col-md-5 col-sm-5 col-lg-5\">\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"mobile\">Mobile</label>\n    <input id=\"mobile\" type=\"text\" class=\"form-control\" name=\"mobile\" [(ngModel)]=\"mobile\" (keypress)=\"isNumber(event)\" maxlength=\"10\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" [readonly]=\"!forProfile\">\n    <span style='color:blue' *ngIf=\"showDuplicateError\">Email is already taken.</span>\n  </div>\n  <div class=\"form-group\" *ngIf=\"forProfile\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" id=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value={{btnValue}}>\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate_service__ = __webpack_require__("../../../../../src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.name = '';
        this.email = '';
        this.mobile = '';
        this.password = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        if (this.router.url == "/profile") {
            this.forProfile = false;
            this.btnValue = "Update";
            this.authService.getProfile().subscribe(function (data) {
                debugger;
                _this.userObject = data.user;
                _this.name = _this.userObject.name;
                _this.mobile = _this.userObject.mobile;
                _this.email = _this.userObject.email;
            });
        }
        else {
            this.btnValue = "Sign Up";
            this.forProfile = true;
            this.name = '';
            this.mobile = '';
            this.password = '';
            this.email = '';
        }
    };
    RegisterComponent.prototype.isNumber = function (evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        debugger;
        if (this.router.url == '/profile') {
            var updateUser = {
                id: this.userObject._id,
                name: this.name,
                mobile: this.mobile,
                email: this.email
            };
            if (!this.validateService.validateProfile(updateUser)) {
                this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            if (this.mobile.length < 10) {
                this.flashMessage.show('Please enter your 10 digit mobile number', { cssClass: 'alert-warning', timeout: 3000 });
                return false;
            }
            this.authService.updateProfile(updateUser).subscribe(function (data) {
                if (data.ok == 1) {
                    _this.flashMessage.show('Profile Updated Successfully', { cssClass: 'alert-primary', timeout: 3000 });
                    _this.router.navigate(['/dashboard']);
                }
            });
        }
        else if (this.router.url == '/register') {
            var user_1 = {
                name: this.name,
                email: this.email,
                mobile: this.mobile,
                password: this.password,
                loginType: "Through Sign Up"
            };
            // Required Fields
            if (!this.validateService.validateRegister(user_1)) {
                this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            // Validate Mobile Number
            if (this.mobile.length < 10) {
                this.flashMessage.show('Please enter your 10 digit mobile number', { cssClass: 'alert-warning', timeout: 3000 });
                return false;
            }
            // Validate Email
            if (!this.validateService.validateEmail(user_1.email)) {
                this.flashMessage.show('Please use a valid email', { cssClass: 'alert-info', timeout: 3000 });
                return false;
            }
            else {
                // if (this.validateService.validateEmail(user.email)) {
                this.authService.checkDuplicateEmail(user_1).subscribe(function (data) {
                    if (data.userEmail == "CAN TAKE") {
                        // this.flashMessage.show('Email is available', { cssClass: 'alert-primary', timeout: 3000 });
                        // Register User
                        _this.authService.registerUser(user_1).subscribe(function (data) {
                            if (data.msg == "User Registered") {
                                _this.flashMessage.show('You are now registerd and can log in', { cssClass: 'alert-success', timeout: 3000 });
                                _this.router.navigate(['/login']);
                            }
                            else {
                                _this.flashMessage.show('Something went wrong. Please try again', { cssClass: 'alert-warning', timeout: 3000 });
                                _this.router.navigate(['./register']);
                            }
                        });
                    }
                    else if (data.userEmail == user_1.email) {
                        _this.flashMessage.show(data.userEmail + ' is already taken', { cssClass: 'alert-primary', timeout: 3000 });
                        return false;
                    }
                });
                //}
            }
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.mobile == undefined || user.email == undefined || user.password == undefined || user.name == '' || user.mobile == '' || user.email == '' || user.password == '' || user.name == null || user.mobile == null || user.email == null || user.password == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateProfile = function (user) {
        if (user.name == undefined || user.name == '' || user.name == null || user.mobile == undefined || user.mobile == '' || user.mobile == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.email == undefined || user.email == '' || user.password == undefined || user.password == '' || user.email == null || user.password == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map