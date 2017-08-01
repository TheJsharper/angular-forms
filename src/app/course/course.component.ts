import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input('listOfCourses') courses:string[]
  constructor() { }

  ngOnInit() {
  }

}
