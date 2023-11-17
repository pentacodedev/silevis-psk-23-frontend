import { Component } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }




  form = this.formBuilder.group({email: new FormControl('')});




  onFormSubmit() {
    let emailControl = this.form.get('email');
    let value = emailControl?.value;
    if(emailControl != null && emailControl.valid && value != null) {
      this.userService.login(value);
      this.router.navigateByUrl('/');
    } else {
      this.form.updateValueAndValidity();
    }
  }
}

