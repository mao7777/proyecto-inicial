import { Component } from '@angular/core';
import { Teacher } from '../model/teacher';
import { Student } from '../model/student';

const TEACHERS: Teacher[] = [
   {
        id: 10,
        name: "Jorge Cortes",
        rooms: ['100','101'],
        studies: ['Español','Matemáticas'],
    },
    {
        id: 20,
        name: "Sandra Beltrán",
        rooms: ['201','202'],
        studies: ['Español','Inglés']
    },
    {
         id: 30,
        name: "Pablo Espnoza",
        rooms: ['300','303'],
        studies: ['Cálculo','Filosofia','Ética']
    }

];

const STUDENTS: Student[] = [
   {
        id: 10,
        name: "Diana Mejia",
        classes: ['Español','Matemáticas'],
        grade: 10
    },
    {
        id: 20,
        name: "Jhon Cáceres",
        classes: ['Español','Inglés'],
        grade: 11
    },
    {
         id: 30,
        name: "Andrea Fernandez",
        classes: ['Cálculo','Filosofia','Ética'],
        grade: 9
    }

];

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})

export class AppComponent {

    title: string = "Colegio";
    selected: Teacher;
    teachers: Teacher[] = TEACHERS;
    onSelect(teacher: Teacher) {
        this.selected = teacher;
    }
    
    selected: Student;
    students: Student[] = STUDENTS;
    onSelect(student: Student) {
        this.selected = student;
    }
    
}