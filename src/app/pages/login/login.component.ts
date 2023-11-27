import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    let router = this.router;
    //Feedback use authGuard
    this.userService
      .getCurrentUser()
      .subscribe((x) => router.navigateByUrl('/'));
  }

  form = this.formBuilder.group({ email: new FormControl('') });

  onFormSubmit() {
    let emailControl = this.form.get('email');
    let value = emailControl?.value;

    //Feedback not to much logic in here ? :P
    if (emailControl != null && emailControl.valid && value != null) {
      let router = this.router;
      let form = this.form;
      this.userService.login(value).subscribe({
        next() {
          router.navigateByUrl('/');
        },
        error() {
          form.updateValueAndValidity();
        },
      });
    } else {
      this.form.updateValueAndValidity();
    }
  }
}
