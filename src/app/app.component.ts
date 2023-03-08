import {Component, OnInit} from '@angular/core';
import {StudentsService} from "./services/students.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'makerere Frontend';
  students: any;

  constructor(private studentService: StudentsService) {
  }

  ngOnInit(): void{
    this.studentService.getStudents().subscribe({
      next: result => {
        this.students = result;
        console.log(this.students, 'students');
      },
      error: error => console.log(error)
    });

  }

}
