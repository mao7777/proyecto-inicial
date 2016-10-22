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
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Mis users";
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user) {
        this.selected = user;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/product.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var USERS = [
    {
        id: 1234,
        name: "Mauricio Hernán Vacca",
        address: "Chia",
        phone: "3017162056"
    },
    {
        id: 234,
        name: "Nidia Gonzalez",
        address: "Madrid",
        phone: "2573700"
    },
    {
        id: 3453,
        name: "Claudia Garcia",
        address: "Chía",
        phone: "8640000"
    }
];
//# sourceMappingURL=app.component.js.map