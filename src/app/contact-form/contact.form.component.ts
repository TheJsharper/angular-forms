import { FormGroup, FormControl, Validators,AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, } from "rxjs/Observable";
//import { Rx } from '@reactivex/rxjs';
 //import { , Rx } from '@reactivex/rxjs';
@Component({
            selector:'contact',
            template:`
                <div class="container-fluid">
                        <form [formGroup]="contactForm" (ngSubmit)="onSend()">
                <div formGroupName="firstLastName">    
                        <div class="form-group">
                            <label for="FirstName">FirstName</label>
                                <input type="text" class="form-control" id="FirstName" formControlName="firstName">
                            <div class="alert alert-danger" *ngIf="FirstName.touched && FirstName.invalid">
                                    <div *ngIf="FirstName.errors.required">FirstName is require</div>
                                    
                            </div>
                        
                        </div>

                        <div class="form-group">
                            <label for="lastName">LastName</label>
                                <input type="text" class="form-control" id="lastName" formControlName="lastName">
                                <div class="alert alert-danger" *ngIf="LastName.touched && LastName.invalid">
                                    <div *ngIf="LastName.errors.required">LastName is require</div>
                                </div>
                            <div *ngIf="FirstLastNameGroup.pending"> checking for uniqueness....!</div>
                        
                            <div class="alert alert-danger" *ngIf="LastName.touched &&FirstLastNameGroup.touched && FirstLastNameGroup.invalid">
                                <div *ngIf="FirstLastNameGroup.errors.existsContact">FirstName and LastName should be 'lastName && firstName'!</div>
                            </div>
                    </div>


                </div>

                
                    <button [disabled]="!contactForm.valid" type="submit" class=" btn btn-primary" *ngIf="contactForm.valid">Send</button>
            </form>
                
                
                </div>
            

                <!--  outside-->

                 <!--<div *ngIf="UserName.pending"> checking for uniqueness....!</div>
                <div class="alert alert-danger" *ngIf="UserName.touched && UserName.invalid">
                            <div *ngIf="UserName.errors.required">UserName is require</div>
                             <div *ngIf="UserName.errors.minlength">UserName should be minimum {{UserName.errors.minlength.requiredLength}} characters!</div>
                             <div *ngIf="UserName.errors.cannotContainsSpace">UserName should contains white spaces characters!</div>
                             <div *ngIf="UserName.errors.shouldBeUnique">UserName should be Unique!</div>

                 </div>-->            
            `
})
export class ContactFormComponent implements OnInit{

    private contactForm: FormGroup;

        ngOnInit():void{
            this.contactForm = new FormGroup({
                firstLastName: new FormGroup({
                   firstName: new FormControl('',[Validators.required]),
                   lastName: new FormControl('',[Validators.required])
                },null, CustomContactValidators.existsContact)
            });
        }
    /*private getAsyncValidator(): AsyncValidatorFn{
        const asyncValidator: AsyncValidatorFn = isPresent(extra) ? extra['asyncValidator'] : null;
        return asyasyncValidator;
    }*/
        private onSend():void{
            if(this.contactForm.valid){
                console.log("sending values ...", this.contactForm.value);
            }else{
                console.log(" errors--->", this.contactForm.errors);
            }
        }

         private get FirstName(): AbstractControl{
             return this.contactForm.get('firstLastName.firstName');
         }


           private get LastName(): AbstractControl{
             return this.contactForm.get('firstLastName.lastName');
         }
            private get FirstLastNameGroup():FormGroup{
                return  (this.contactForm.get('firstLastName') as FormGroup);
            }
}


class CustomContactValidators{
    static existsContact(firstLastNameGroup:FormGroup ):Promise<ValidationErrors| null >{
           // Rx.Observable.return(42).delay(5000).timeout(60000).map((data)=> { return {'hallo': 'welt'}}).subscribe(data=> console.log(data));
        
        let promiseRetet: Promise<ValidationErrors| null> = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                 if(firstLastNameGroup.get('firstLastName.lastName')!= null && firstLastNameGroup.get('firstLastName.firstName') !=null &&
                     firstLastNameGroup.get('firstLastName.lastName').value =='lastName' && firstLastNameGroup.get('firstLastName.firstName').value =='firstName')
                    return resolve({existsContact:true});
                 else
                    return resolve(null);   
        
        
        }, 5000);
        });      

        return promiseRetet

    }
}