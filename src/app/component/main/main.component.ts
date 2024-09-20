import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  students : Student[] = [];
  constructor(private studentService : StudentService){

  }

  // Investigar los tipos de datos para typescript Mañana

  // student = {
  //   firstname: 'Max',
  //   lastname: 'DIaz',
  //   age: 19
  // }
  // students = [
  //   { firstname: 'Maximiliano', lastname: 'Diaz', age: 19 }, 
  //   { firstname: 'Chistian', lastname: 'Lalo', age: 19 }, 
  //   { firstname: 'Alexia', lastname: 'Vanelli', age: 19 }, 
  //   { firstname: 'Lalo', lastname: 'Diaz', age: 19 }
  // ]

  receiveMessage($event:string) {
    alert($event)
  }

  addStudent() {
    let student : Student = {
      firstname : 'Max',
      lastname : 'Diaz',
      age: 19
    }
    this.studentService.addStudent(student)
  }

  getStudents() {
    this.students = this.studentService.getStudents(); 
  }
}
