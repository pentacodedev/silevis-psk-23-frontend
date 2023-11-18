import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UsosDto } from '../models/usos.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentUser?: UsosDto;

  constructor(private userService: UserService, private router: Router) {
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
