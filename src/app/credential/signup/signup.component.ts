// import { Component,OnInit } from '@angular/core';
// import { FormGroup,FormControlName, Validators, FormBuilder } from "@angular/forms";
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit{
//   signupForm!: FormGroup;
//   emailregex: string | RegExp="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
//   passwordregex: string | RegExp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
//   constructor(private fb:FormBuilder){}
//   ngOnInit(): void {
//     this.signupForm = this.fb.group({
//       email: [Validators.required,Validators.maxLength(32),Validators.pattern(this.emailregex),],
//       password: [Validators.required,Validators.minLength(8),Validators.pattern(this.passwordregex)],
//       profile: [Validators.required],
//       cnfmpassword: [Validators.required],
//     })
//   }
 
//   signupuser()
//   {
//     console.log(this.signupForm.value);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // signupForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.signupForm = this.fb.group({
    //   username: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
  }

  onSubmit() {
    // handle form submission
  }
}