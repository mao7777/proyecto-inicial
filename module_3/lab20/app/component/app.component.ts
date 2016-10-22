import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';

const STUDENTS: Student[] = [
    {
        id: 1,
        name: "Jorge Cortes",
        classes: ['Español','Matemáticas'],
        grade: 10
    },
    {
        id: 2,
        name: "Sandra Beltrán",
        classes: ['Español','Inglés'],
        grade: 11
    },
    {
         id: 3,
        name: "Dalia Bermúdez",
        classes: ['Cálculo','Filosofia','Ética'],
        grade: 11
    }
];

const TEACHERS: Teacher[] = [
    {
        id: 10,
        name: "Mauricio Vacca",
        rooms: ['100','101'],
        studies: ['Sistemas','MAtematicas']
    },
    {
        id: 11,
        name: "Nidia Gonzalez",
        rooms: ['200','201'],
        studies: ['Contabilidad']
    }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})

export class AppComponent {

    title: string = "Colegio";
    selected: Student;
    students: Student[] = STUDENTS;

    onSelect(student: Student) {
        this.selected = student;
    }
    
    selected: Teacher;
    teachers: Teacher[] = TEACHERS;

    onSelect(teacher: Teacher) {
        this.selected = teacher;
    }
}