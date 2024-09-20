import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private students: Student[] = [];

  constructor() { }

  public getStudents() : Student[] {
    return this.students;
  }

  public addStudent(student: Student): boolean {
    let aux = this.students.length;
    if (this.students.push(student) > aux) {
      return true;
    }
    return false;
  }

  public searchStudent(firstname:string) : Student | undefined {
    return this.students.find(student => student.firstname === firstname)
  }

  public deleteStudent(firstname : string) : number {
    let index = this.students.findIndex(student => student.firstname === firstname)
    let num = 0;
    if (index != -1) {
      num = this.students.splice(index, 1).length
    }   
    return num;
  }

  public updateStudent(name: string) : boolean {
    return true;
  }
}

export interface Student {
  firstname : string,
  lastname : string,
  age: number
}