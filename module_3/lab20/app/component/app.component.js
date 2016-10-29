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
var TEACHERS = [
    {
        id: 10,
        name: "Jorge Cortes",
        rooms: ['100', '101'],
        studies: ['Español', 'Matemáticas'],
    },
    {
        id: 20,
        name: "Sandra Beltrán",
        rooms: ['201', '202'],
        studies: ['Español', 'Inglés']
    },
    {
        id: 30,
        name: "Pablo Espnoza",
        rooms: ['300', '303'],
        studies: ['Cálculo', 'Filosofia', 'Ética']
    }
];
var STUDENTS = [
    {
        id: 10,
        name: "Diana Mejia",
        classes: ['Español', 'Matemáticas'],
        grade: 10
    },
    {
        id: 20,
        name: "Jhon Cáceres",
        classes: ['Español', 'Inglés'],
        grade: 11
    },
    {
        id: 30,
        name: "Andrea Fernandez",
        classes: ['Cálculo', 'Filosofia', 'Ética'],
        grade: 9
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Colegio";
        this.teachers = TEACHERS;
        this.students = STUDENTS;
    }
    AppComponent.prototype.onSelect = function (teacher) {
        this.selected = teacher;
    };
    AppComponent.prototype.onSelect = function (student) {
        this.selected = student;
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