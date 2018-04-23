import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class PasswordValidationService {

  static passwordMatch(): any {
    throw new Error("Method not implemented.");
  }
  constructor() {
    console.log("Password Validation Service match");
   }

  static MatchPassword(AC: AbstractControl) {
    const formGroup = AC.parent;
    if (formGroup) {
         const passwordControl = formGroup.get('passwordOne'); // to get value in input tag
         const confirmPasswordControl = formGroup.get('passwordRe'); // to get value in input tag

         if (passwordControl && confirmPasswordControl) {
             const password = passwordControl.value;
             const confirmPassword = confirmPasswordControl.value;
             if (password !== confirmPassword) { 
                 return { matchPassword: true };
             } else {
                 return null;
             }
         }
    }

    return null;
 }
 
  

}
