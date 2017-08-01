import { Component } from '@angular/core';

@Component({
            selector:'courses',
            template: `
            <div class="container">
                    <h1>{{title}}</h1>
                    <course [listOfCourses]="courses"></course>
                    
            </div>
            `
})

export class CoursesComponent{
    title:string ="List of Courses"
    courses:string[] = ["Angular", "JQuery"]
}