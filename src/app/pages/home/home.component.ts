import { Component, OnInit } from '@angular/core';
import { UsosDto } from '../../models/usos.dto';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  usosData?: UsosDto;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.login("s022222@student.tu.kielce.pl");
    this.userService.getCurrentUser()?.subscribe(x => this.usosData = x);

  }

}
