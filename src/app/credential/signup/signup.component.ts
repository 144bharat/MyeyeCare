import { Component } from '@angular/core';
import { FormControl,FormGroup,FormControlName, Validators } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  emailregex: string | RegExp="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  passwordregex: string | RegExp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
signupform = new FormGroup(
  {
    email: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.pattern(this.emailregex),]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(this.passwordregex)]),
    profile: new FormControl('',[Validators.required]),
    cnfmpassword: new FormControl('',[Validators.required]),
  },
  )
  signupuser()
  {
    console.log(this.signupform.value);
  }
}
