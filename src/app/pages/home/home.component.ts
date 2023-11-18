import { Component, OnInit } from '@angular/core';
import { UsosDto } from '../../models/usos.dto';
import { UserService } from '../../services/user.service';
import { InternshipDto } from '../../models/internship.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  usosData?: UsosDto;
  internships?: InternshipDto[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(usos => this.usosData = usos);
    this.userService.getUserInternships().subscribe(internships => this.internships = internships);
  }
  logout() {
    this.userService.logout();
    window.location.reload();
  }

}
