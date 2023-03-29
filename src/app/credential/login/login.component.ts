import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormControlName, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
emailregex: string | RegExp="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
passwordregex: string | RegExp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";

  loginform = new FormGroup(
    {
      email: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.pattern(this.emailregex),]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(this.passwordregex)]),
    },
    )
    loginuser()
    {
      console.log(this.loginform.value);
    }

}
