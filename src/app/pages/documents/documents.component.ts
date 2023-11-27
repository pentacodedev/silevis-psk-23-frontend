import { Component, OnInit } from '@angular/core';
import { UsosDto } from '../../models/usos.dto';
import { InternshipDto } from '../../models/internship.dto';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent implements OnInit {
  user?: UsosDto;
  internship?: InternshipDto;

  companyForm: FormGroup;

  constructor(
    private api: ApiService,
    private userService: UserService,
    private nnfb: NonNullableFormBuilder
  ) {
    this.companyForm = nnfb.group({
      //Feedback use form builder instead of new FormControl ;)
      //https://angular.io/guide/reactive-forms#generating-form-controls-with-formbuilder
      //Feedback use validators https://angular.io/guide/form-validation
      //Feedback nice to have type for each form control
      companyName: new FormControl(''),
      companyAddress: new FormControl(''),
      companyNipNumber: new FormControl(''),
      companyKrsNumber: new FormControl(''),
      companyRegonNumber: new FormControl(''),
      companyRepresentativeFirstname: new FormControl(''),
      companyRepresentativeSurname: new FormControl(''),
      companyEmail: new FormControl(''),
      companyPhoneNumber: new FormControl(''),
    });
  }

  onSubmit() {
    if (!this.companyForm.valid) return;
    let internship: InternshipDto = this.companyForm.value;
    if (this.internship == null) return;
    internship.id = this.internship.id;
    let oldInternship = this.internship;
    this.api.putInternshipInfo(internship).subscribe(() => {
      localStorage.setItem(
        'userInternship',
        JSON.stringify({ ...oldInternship, ...internship })
      );
      window.location.reload();
    });
  }

  ngOnInit(): void {
    //Feedback is this needed?
    this.userService
      .getCurrentUser()
      .subscribe((newUser) => (this.user = newUser));
    this.userService.getUserInternship().subscribe((newInternship) => {
      this.internship = newInternship;
      //Feedback instead of creating new form group you can use patchValue/setValue method
      this.companyForm = this.nnfb.group({
        companyName: new FormControl(newInternship.companyName),
        companyAddress: new FormControl(newInternship.companyAddress),
        companyNipNumber: new FormControl(newInternship.companyNipNumber),
        companyKrsNumber: new FormControl(newInternship.companyKrsNumber),
        companyRegonNumber: new FormControl(newInternship.companyRegonNumber),
        companyRepresentativeFirstname: new FormControl(
          newInternship.companyRepresentativeFirstname
        ),
        companyRepresentativeSurname: new FormControl(
          newInternship.companyRepresentativeSurname
        ),
        companyEmail: new FormControl(newInternship.companyEmail),
        companyPhoneNumber: new FormControl(newInternship.companyPhoneNumber),
      });
    });
  }
}
