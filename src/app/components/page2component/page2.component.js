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
var USERS = [
    {
        id: 1,
        firstname: 'Jens',
        lastname: 'Olsson'
    },
    {
        id: 2,
        firstname: 'Kalle',
        lastname: 'Bengtsson'
    },
    {
        id: 3,
        firstname: 'Harald',
        lastname: 'Rolandsson'
    }
];
var Page2Component = (function () {
    function Page2Component() {
        this.users = USERS;
    }
    Page2Component.prototype.ngOnInit = function () {
        //this.getNames();
    };
    Page2Component.prototype.getNames = function () {
        //users = USERS;
    };
    Page2Component = __decorate([
        core_1.Component({
            selector: 'kits-page2',
            templateUrl: './app/components/page2component/page2.component.html',
            styleUrls: ['./app/components/page2component/page2.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=page2.component.js.map