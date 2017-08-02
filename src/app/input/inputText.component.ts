import {Component, Input} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, Validators, ValidationErrors} from "@angular/forms";
import {MdInputDirective} from "@angular/material";

@Component({
  selector: 'input-text',
  template: `
    <!--   <form >
        
  
        <table class="example-full-width" cellspacing="0"><tr>
          <td><md-input-container class="example-full-width">
            <input mdInput placeholder="First name">
          </md-input-container></td>
          <td><md-input-container>
            <input mdInput placeholder="Long Last Name That Will Be Truncated">
          </md-input-container></td>
        </tr></table>
  
        <p>
          <md-input-container >
            <textarea mdInput placeholder="Address">1600 Amphitheatre Pkwy</textarea>
          </md-input-container>
          <md-input-container class="example-full-width">
            <textarea mdInput placeholder="Address 2"></textarea>
          </md-input-container>
   </p>
  
       <!-- <table cellspacing="0"><tr>
          <td><md-input-container >
            <input mdInput placeholder="City">
          </md-input-container></td>
          <td><md-input-container >
            <input mdInput placeholder="State">
          </md-input-container></td>
          <td><md-input-container >
            <input mdInput maxlength="5" placeholder="Postal Code" value="94043">
            <md-hint align="end"></md-hint>
          </md-input-container></td>
        </tr></table>
      </form>-->

    <form [formGroup]="myForm">
      <div class="form-group">
        <md-input-container>
          <input mdInput [type]="text" [placeholder]="'username'" formControlName="username">
        </md-input-container>
        <div *ngIf="UserName.touched && UserName.invalid"  class="alert alert-danger">
          <div *ngIf="UserName.errors.required"> Username is required!!!</div>
        </div>
      </div>
      <div class="form-group">
        <md-input-container>
          <input mdInput [type]="password" [placeholder]="'password'" formControlName="password">
        </md-input-container>
      </div>
      <div  class="alert alert-danger" *ngIf="myForm.touched && myForm.invalid">
        Username or Password was false!!
      </div>
      <!--<a md-mini-fab routerLink="."><md-icon>check</md-icon></a>-->
      <a md-raised-button routerLink="." disabled="!myForm.valid" >Send</a>
    </form>
  `,
  styles: [
      `
      .example-form {
        width: 500px;
      }

      .example-full-width {
        width: 100%;
      }



    `
  ]

})
export class InputTextComponent /*extends MdInputDirective */ {
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('')
  },UserValidators.login)

  get UserName(): AbstractControl {
    return this.myForm.get('username')
  }
}

class UserValidators {
  static login(g: FormGroup): ValidationErrors | null {

    let username: string = (g.get('username').value as string);
    let password: string = (g.get('password').value as string);
    if (username == 'username' && password == 'false') return {login: true};
    return null;
  }
}
