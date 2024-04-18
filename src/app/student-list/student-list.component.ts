import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { studentModel } from '../model';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule], //form module is used for two way binding input for usinf [ngModule]
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})

export class StudentListComponent implements OnInit {
  public students: studentModel[] = [];
  public filterStudent!: studentModel[];
  public showList: boolean = true;
  public searchByName: string = '';
  public isAscending!:boolean;

  constructor(private studentService:StudentService) {
    console.log(this.students);
  }


  ngOnInit(): void {
    this.students=this.studentService.getStudentList();
    console.log(this.students);
    this.searchTableList(); //ngOnIt event is used for initialization of all data
  }

  toggleTable() {
    this.showList = !this.showList;
  }


  deleteRow(index: number) {
    this.students.splice(index, 1); //array method for deleting array row by index;//used stduent array function (STUDENTS)
    this.searchTableList();
    console.log("Clicked");
  }

searchTableList() {
  console.log(this.searchByName);
  this.filterStudent = this.students.filter((std: studentModel) => {
    return std.name.toLowerCase().includes(this.searchByName.toLowerCase()) //using for two way binding i.e means when enterd in any char serch their table list data 
  });
}

Ascending() {
  this.isAscending=!this.isAscending;
  if(this.isAscending){
    this.filterStudent = this.filterStudent.sort((a, b) =>  a.age - b.age);//sort is ascending order
}else{
  this.filterStudent = this.filterStudent.sort((a, b) =>  b.age - a.age);//sort is ascending order
}
 }
}
