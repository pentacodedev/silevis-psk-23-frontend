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

  getLanguage() {
    if (this.translateService.currentLang == "pl") {
      return "Polski";
    }
    else {
      return "English";
    }
  }

  toggleLanguage() {
    if (this.translateService.currentLang == "pl") {
      this.translateService.use("en");
    }
    else {
      this.translateService.use("pl");
    }
  }


  logout(){
    this.userService.logout();
    this.currentUser = undefined;
    this.router.navigateByUrl('/');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

}
