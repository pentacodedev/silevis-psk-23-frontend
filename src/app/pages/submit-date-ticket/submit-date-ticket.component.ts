import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { InternshipDto } from '../../models/internship.dto';

@Component({
  selector: 'app-submit-date-ticket',
  templateUrl: './submit-date-ticket.component.html',
  styleUrl: './submit-date-ticket.component.scss'
})
export class SubmitDateTicketComponent {
  internship?: InternshipDto;

  constructor(private user: UserService) {
    user.getUserInternship().subscribe(x=>this.internship = x);
  }
}
