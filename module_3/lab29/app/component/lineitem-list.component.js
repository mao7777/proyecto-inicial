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
var lineitem_service_1 = require("../service/lineitem.service");
var router_1 = require("@angular/router");
var LineitemListComponent = (function () {
    function LineitemListComponent(router, lineitemService) {
        this.router = router;
        this.lineitemService = lineitemService;
        this.title = "lista";
    }
    LineitemListComponent.prototype.getLineitems = function () {
        var _this = this;
        this.lineitemService.getLineitems().then(function (lineitems) { return _this.lineitems = lineitems; });
    };
    LineitemListComponent.prototype.ngOnInit = function () {
        this.getLineitems();
    };
    LineitemListComponent.prototype.onSelect = function (lineitem) {
        this.selected = lineitem;
    };
    LineitemListComponent = __decorate([
        core_1.Component({
            selector: 'lineitem-list-app',
            templateUrl: 'app/templates/lineitem-list.html',
            providers: [lineitem_service_1.LineitemService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, lineitem_service_1.LineitemService])
    ], LineitemListComponent);
    return LineitemListComponent;
}());
exports.LineitemListComponent = LineitemListComponent;
//# sourceMappingURL=lineitem-list.component.js.map