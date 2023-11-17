import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UsosDto } from '../../models/usos.dto';
import { UserService } from '../../user.service';

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
  }

}
