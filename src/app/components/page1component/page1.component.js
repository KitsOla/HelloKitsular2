"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Page1Component = (function () {
    function Page1Component(router) {
        this.router = router;
    }
    Page1Component.prototype.update = function (value) {
        if (value) {
            this.id = value;
        }
    };
    Page1Component.prototype.ngOnInit = function () {
        this.id = "No value entered";
    };
    Page1Component.prototype.gotoPage3 = function () {
        this.router.navigate(['/page3', this.id]);
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: 'kits-page1',
            templateUrl: './app/components/page1component/page1.component.html',
            styleUrls: ['./app/components/page1component/page1.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
//# sourceMappingURL=page1.component.js.map