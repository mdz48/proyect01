import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { StudentService, Student } from '../../services/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  firstname = ''
  lastname = ''
  age = 0

  students : Student[] = [];
  constructor(private studentService : StudentService){

  }

  receiveMessage($event:string) {
    alert($event)
  }

  addStudent() {
    if (this.age === 0) {
      alert('Ingrese una edad')
    }


    let student : Student = {
      firstname : this.firstname,
      lastname : this.lastname,
      age: this.age
    }
    this.studentService.addStudent(student)
  }

  getStudents() {
    this.students = this.studentService.getStudents(); 
  }
}
