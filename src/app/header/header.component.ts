import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UsosDto } from '../models/usos.dto';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentUser?: UsosDto;

  //Feedback use inject fn instead
  //https://codereacter.medium.com/why-angular-14s-new-inject-function-is-so-amazing-ac281e7148d1
  constructor(
    private translateService: TranslateService,
    private userService: UserService,
    private router: Router
  ) {}

  toggleLanguage() {
    if (this.translateService.currentLang == 'pl') {
      this.translateService.use('en');
      localStorage.setItem('lang', 'en');
    } else {
      this.translateService.use('pl');
      localStorage.setItem('lang', 'pl');
    }
  }

  logout() {
    this.userService.logout();
    this.currentUser = undefined;
    //Feedback ok, but you can/should use authGuard which will redirect you to login page if you are not logged in
    this.router.navigateByUrl('/login');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    //Feedback unsubscribe :) https://angular.io/guide/rx-library#unsubscribing-from-observables or better https://angularindepth.com/posts/1518/takeuntildestroy-in-angular-v16
    // or even better in this case use async pipe in template :)
    this.userService
      .getCurrentUser()
      .subscribe((user) => (this.currentUser = user));
  }
}
