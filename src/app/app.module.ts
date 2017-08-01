import { ContactFormComponent } from './contact-form/contact.form.component';
import { SignupComponent } from './signupform/signup.form.component';
import { CoursesComponent } from './cuorses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SignupComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
