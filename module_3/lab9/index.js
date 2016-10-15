// Estudiante
var Student = (function () {
    function Student() {
    }
    Student.prototype.getid = function () {
        return this.id;
    };
    Student.prototype.setid = function (id) {
        this.id = id;
    };
    return Student;
}());
// Maestro
var Teacher = (function () {
    function Teacher() {
    }
    return Teacher;
}());
//var student=new Student(123,'Pedro',15,20,['Español','Matemáticas']);
//var teacher=new Teacher(789,'María',18,44,['Séptimo','Óctavo','Décimo'],[201,305,404]);
//console.log(student );
//console.log(teacher);
