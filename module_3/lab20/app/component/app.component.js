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
var STUDENTS = [
    {
        id: 1,
        name: "Jorge Cortes",
        classes: ['Español', 'Matemáticas'],
        grade: 10
    },
    {
        id: 2,
        name: "Sandra Beltrán",
        classes: ['Español', 'Inglés'],
        grade: 11
    },
    {
        id: 3,
        name: "Dalia Bermúdez",
        classes: ['Cálculo', 'Filosofia', 'Ética'],
        grade: 11
    }
];
var TEACHERS = [
    {
        id: 10,
        name: "Mauricio Vacca",
        rooms: ['100', '101'],
        studies: ['Sistemas', 'MAtematicas']
    },
    {
        id: 11,
        name: "Nidia Gonzalez",
        rooms: ['200', '201'],
        studies: ['Contabilidad']
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Colegio";
        this.students = STUDENTS;
        this.teachers = TEACHERS;
    }
    AppComponent.prototype.onSelect = function (student) {
        this.selected = student;
    };
    AppComponent.prototype.onSelect = function (teacher) {
        this.selected = teacher;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map