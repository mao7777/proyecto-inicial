//Persona
interface Person {
    nid: number;
    name: string;
    age: number ;
  }

// Estudiante
class Student implements Person {
    nid: number;
    name: string;
    age: number ;
    id: number;
    classes: Array<string>;
  
    getid(): number {
        return this.id;
    }

    setid(id: number): void {
        this.id=id;
    }

}

// Maestro
class Teacher implements Person {
    nid: number;
    name: string;
    age: number ;
    id: number;
    grade: Array<string>;
    classroom: Array<number>;
 }


//var student=new Student(123,'Pedro',15,20,['Español','Matemáticas']);
//var teacher=new Teacher(789,'María',18,44,['Séptimo','Óctavo','Décimo'],[201,305,404]);

//console.log(student );
//console.log(teacher);
