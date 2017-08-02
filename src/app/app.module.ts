import {ContactFormComponent} from './contact-form/contact.form.component';
import {SignupComponent} from './signupform/signup.form.component';
import {CoursesComponent} from './cuorses.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {CourseComponent} from './course/course.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdIconModule,
  MdInputModule
} from '@angular/material';
import {InputTextComponent} from "./input/inputText.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SignupComponent,
    ContactFormComponent,
    InputTextComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdIconModule,

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
