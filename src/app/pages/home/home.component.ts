import { Component, OnInit } from '@angular/core';
import { UsosDto } from '../../models/usos.dto';
import { UserService } from '../../services/user.service';
import { InternshipDto } from '../../models/internship.dto';
import { TemplateDto } from '../../models/template.dto';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  usosData?: UsosDto;
  internship?: InternshipDto;

  constructor(private apiService: ApiService, private userService: UserService, private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(usos => this.usosData = usos);
    this.userService.getUserInternship().subscribe(internship => this.internship = internship);
  }
  logout() {
    this.userService.logout();
    window.location.reload();
  }


  downloadForm1() {
    if(this.internship == null || this.usosData == null) return;
    let template: TemplateDto = {
      internship: this.internship,
      user: this.usosData,
      polish: this.translateService.currentLang == "pl",
    };

    this.apiService.getForm1File(template);

  }


}
