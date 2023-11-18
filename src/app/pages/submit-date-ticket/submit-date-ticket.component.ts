import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { InternshipDto } from '../../models/internship.dto';
import { FormBuilder, FormControl } from '@angular/forms';
import { NewDateTicketDto } from '../../models/new-date-ticket.dto';

@Component({
  selector: 'app-submit-date-ticket',
  templateUrl: './submit-date-ticket.component.html',
  styleUrl: './submit-date-ticket.component.scss'
})
export class SubmitDateTicketComponent implements OnInit{
  internship?: InternshipDto;


  constructor(private user: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.user.getUserInternship().subscribe(x=>this.internship = x);
  }

  onSubmit() {
    let formStartDate = this.dateTicketForm.get<string>('startDate')?.value;
    let formEndDate = this.dateTicketForm.get<string>('endDate')?.value;

    /*
    let ticket: NewDateTicketDto = {
      dateOfStart: formStartDate,
      dateOfEnd: formEndDate
    }
    */

  }

  dateTicketForm = this.formBuilder.group({
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });
}
