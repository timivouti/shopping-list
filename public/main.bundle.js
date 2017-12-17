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

module.exports = "<app-shopping-item></app-shopping-item>\n"

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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_item_shopping_item_component__ = __webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shopping_item_shopping_item_component__["a" /* ShoppingItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
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



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getShoppingItems = function () {
        return this.http.get('api/items')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.addShoppingItem = function (newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/item', newItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteShoppingItem = function (id) {
        return this.http.delete('api/item/' + id)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.updateShoppingItem = function (newItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/item/' + newItem._id, newItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h2>Shopping List</h2>\n<br>\n<div class=\"col-md-12\">\n    <form #frm = \"ngForm\" (ngSubmit)=\"addItem(frm)\" *ngIf=\"!toggleForm\">\n        <h2>Add Item</h2>\n        <div class=\"form-group\">\n          <label for=\"\">\n            Name:\n          </label>\n          <input type=\"text\" class=\"form-control\" name=\"itemName\" value=\"\" ngModel required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"\">\n              Quantity:\n            </label>\n            <input type=\"number\" class=\"form-control\" name=\"itemQuantity\" value=\"\" ngModel required>\n          </div>\n          <button type=\"submit\" name=\"button\" class=\"btn btn-success\" [disabled]= frm.invalid>Add Item</button>\n      </form>\n      \n      <form #editForm = \"ngForm\" (ngSubmit)=\"editItem(editForm)\" *ngIf=\"toggleForm\">\n          <h2>Edit Item</h2>\n          <div class=\"form-group\">\n            <label for=\"\">\n              Name:\n            </label>\n            <input type=\"text\" class=\"form-control\" name=\"itemName\" value=\"\" [ngModel]=\"selectedItem.itemName\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"\">\n                Quantity:\n              </label>\n              <input type=\"number\" class=\"form-control\" name=\"itemQuantity\" value=\"\" [ngModel]=\"selectedItem.itemQuantity\">\n            </div>\n            <button type=\"submit\" name=\"button\" class=\"btn btn-success\">Save</button>\n        </form>\n        <br><br>\n      </div>\n<div class=\"row\">\n  <div class=\"col-md-1\">Bought</div>\n  <div class=\"col-md-3\">Name</div>\n  <div class=\"col-md-2\">Quantity</div>\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-3\"><br><br></div>\n  <br><br>\n  </div>\n  <div *ngFor=\"let item of shoppingItemList\" class=\"row\">\n    <div class=\"col-md-1\">\n      <input type=\"checkbox\" name=\"\" [checked]=\"item.itemBought\" (click)=\"updateItemCheckbox(item)\">\n    </div>\n    <div class=\"col-md-3\">\n      {{item.itemName}}\n    </div>\n    <div class=\"col-md-2\">\n      {{item.itemQuantity}}\n    </div>\n    <div class=\"col-md-3\">\n      <button type=\"button\" name=\"button\" class=\"btn btn-primary\" (click)=\"showEditForm(item)\" [disabled]=\"toggleForm\">Edit</button>\n    </div>\n    <div class=\"col-md-3\">\n        <button type=\"button\" name=\"button\" class=\"btn btn-danger\" (click)=\"deleteItem(item._id)\">Delete</button>\n        <br><br>\n      </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-item/shopping-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingItemComponent = (function () {
    function ShoppingItemComponent(dataService) {
        this.dataService = dataService;
        this.shoppingItemList = [];
        this.toggleForm = false;
    }
    ShoppingItemComponent.prototype.getItems = function () {
        var _this = this;
        this.dataService.getShoppingItems()
            .subscribe(function (items) {
            _this.shoppingItemList = items;
            // console.log('data from dataservice: ' + this.shoppingItemList[0].itemName);
        });
    };
    ShoppingItemComponent.prototype.addItem = function (form) {
        var _this = this;
        var newItem = {
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            itemBought: false
        };
        this.dataService.addShoppingItem(newItem)
            .subscribe(function (item) {
            console.log(item);
            _this.getItems();
        });
    };
    ShoppingItemComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.dataService.deleteShoppingItem(id)
            .subscribe(function (data) {
            //console.log(data);
            if (data.n == 1) {
                for (var i = 0; i < _this.shoppingItemList.length; i++) {
                    if (id == _this.shoppingItemList[i]._id) {
                        _this.shoppingItemList.splice(i, 1);
                    }
                }
            }
        });
    };
    ShoppingItemComponent.prototype.editItem = function (form) {
        var _this = this;
        var newItem = {
            _id: this.selectedItem._id,
            itemName: form.value.itemName,
            itemQuantity: form.value.itemQuantity,
            itemBought: this.selectedItem.itemBought
        };
        this.dataService.updateShoppingItem(newItem)
            .subscribe(function (result) {
            console.log('Original Item to be updated with old values: ' + result.itemQuantity);
            _this.getItems();
        });
        this.toggleForm = !this.toggleForm;
    };
    ShoppingItemComponent.prototype.updateItemCheckbox = function (item) {
        var _this = this;
        item.itemBought = !item.itemBought;
        this.dataService.updateShoppingItem(item)
            .subscribe(function (result) {
            console.log('Original Item to be updated with old values: ' + result.itemBought);
            _this.getItems();
        });
    };
    ShoppingItemComponent.prototype.showEditForm = function (item) {
        this.selectedItem = item;
        this.toggleForm = !this.toggleForm;
    };
    ShoppingItemComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ShoppingItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-shopping-item',
            template: __webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-item/shopping-item.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ShoppingItemComponent);
    return ShoppingItemComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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