import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UsosDto } from '../models/usos.dto';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentUser?: UsosDto;

  constructor(private translateService: TranslateService, private userService: UserService, private router: Router) {
  }

  toggleLanguage() {
    if (this.translateService.currentLang == "pl") {
      this.translateService.use("en");
      localStorage.setItem('lang', 'en');
    }
    else {
      this.translateService.use("pl");
      localStorage.setItem('lang', 'pl');
    }
  }


  logout(){
    this.userService.logout();
    this.currentUser = undefined;
    this.router.navigateByUrl('/login');
  }

  login() {
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

}
