import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms';
@Component({
    selector:'sign-up',
    template:`
            <form [formGroup]="form" (ngSubmit)="onSave()">
            <div  class="alert alert-danger" *ngIf="form.errors" >  UserName or Password is invalid!!</div>
                <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" formControlName="username">
                <div *ngIf="UserName.pending"> checking for uniqueness....!</div>
                <div class="alert alert-danger" *ngIf="UserName.touched && UserName.invalid">
                            <div *ngIf="UserName.errors.required">UserName is require</div>
                             <div *ngIf="UserName.errors.minlength">UserName should be minimum {{UserName.errors.minlength.requiredLength}} characters!</div>
                             <div *ngIf="UserName.errors.cannotContainsSpace">UserName should contains white spaces characters!</div>
                             <div *ngIf="UserName.errors.shouldBeUnique">UserName should be Unique!</div>
                </div>
                </div>


                 <div class="form-group">
                <label for="password">password</label>
                <input type="password" class="form-control" id="password" formControlName="password">
                <div class="alert alert-danger" *ngIf="Password.touched && Password.invalid"> password is require</div>
                </div>
                    <button [disabled]="!form.valid" type="submit" class=" btn btn-primary">Sign up</button>
            </form>
    
    `
})

export class SignupComponent{

        private form: FormGroup;
        constructor(){
            this.form = new FormGroup({
                username: new FormControl('', [Validators.required, Validators.minLength(3),  UserNameValidators.cannotContainsSpace],
                [ UserNameValidators.shouldBeUnique]
                ),
                password : new FormControl('', Validators.required)
            })
        }
        private get UserName(): AbstractControl{
            return this.form.get('username');
        }
        private get Password(): AbstractControl{
            return this.form.get('password');
        }
        private onSave():void{
            let isValid = this.form.valid;
            if(isValid){
                    console.log("Value---->", this.form.value);

            }else{
                this.form.setErrors({UserNamePasswordInValid:true})
            }
        }
        

}

class UserNameValidators{
    static cannotContainsSpace(userNameControl:AbstractControl):ValidationErrors | null{
            if((userNameControl.value as string).indexOf(' ') >= 1)
                {
                     return {cannotContainsSpace:true};   
                }
                    return null;
    }
    static shouldBeUnique(usernameControl:AbstractControl):Promise<ValidationErrors | null>{
        let promiseRetet: Promise<ValidationErrors| null> = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                 if(usernameControl.value =='todayUser')
                    return resolve({shouldBeUnique:true});
                 else
                    return resolve(null);   
        
        
        }, 5000);
        });      

        return promiseRetet
    }
}