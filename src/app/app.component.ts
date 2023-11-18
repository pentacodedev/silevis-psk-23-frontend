import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private translateService: TranslateService) {
    let lang = localStorage.getItem('lang') ?? 'pl';
    translateService.use(lang);

    if(localStorage.getItem('user') == null) {
      router.navigateByUrl('/login');
    }
  }

}
