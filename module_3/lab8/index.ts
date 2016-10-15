//Persona
class Person {
    nid: number;
    name: string;
    age: number ;
    constructor(nid:number, name: string, age: number) 
    {   this.nid=nid;  
        this.name = name; 
        this.age=age;
    }
}

// Estudiante
class Student extends Person {
    id: number;
    classes: Array<string>;
    constructor(nid:number, name: string, age:number,id: number, classes:Array<string>) {
        super(nid,name,age);
        this.id = id;
        this.classes=classes;
    }

    getid(): number {
        return this.id;
    }

    setid(id: number): void {
        this.id=id;
    }
}

// Maestro
class Teacher extends Person {
    id: number;
    grade: Array<string>;
    classroom: Array<number>;
    constructor(nid:number, name: string, age:number,id: number,grade: Array<string>,classroom: Array<number>) {
        super(nid,name,age);
        this.id = id;
        this.grade=grade;
        this.classroom=classroom;
    }
}


var student=new Student(123,'Pedro',15,20,['Español','Matemáticas']);
var teacher=new Teacher(789,'María',18,44,['Séptimo','Óctavo','Décimo'],[201,305,404]);

console.log(student );
console.log(teacher);
