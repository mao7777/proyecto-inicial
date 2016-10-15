var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Persona
var Person = (function () {
    function Person(nid, name, age) {
        this.nid = nid;
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// Estudiante
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(nid, name, age, id, classes) {
        _super.call(this, nid, name, age);
        this.id = id;
        this.classes = classes;
    }
    Student.prototype.getid = function () {
        return this.id;
    };
    Student.prototype.setid = function (id) {
        this.id = id;
    };
    return Student;
}(Person));
// Maestro
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(nid, name, age, id, grade, classroom) {
        _super.call(this, nid, name, age);
        this.id = id;
        this.grade = grade;
        this.classroom = classroom;
    }
    return Teacher;
}(Person));
var student = new Student(123, 'Pedro', 15, 20, ['Español', 'Matemáticas']);
var teacher = new Teacher(789, 'María', 18, 44, ['Séptimo', 'Óctavo', 'Décimo'], [201, 305, 404]);
console.log(student);
console.log(teacher);
