import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { UsosDto } from '../models/usos.dto';
import { InternshipDto } from '../models/internship.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private currentUser$: Observable<UsosDto> = EMPTY;
  private currentInternships$: Observable<InternshipDto[]> = EMPTY;



  constructor(private api: ApiService) {
    let internships = localStorage.getItem('userInternships');
    if (internships != null) {
      this.currentInternships$ = of(JSON.parse(internships));
    }

    let storage = localStorage.getItem('user');
    if (storage != null) {
      this.currentUser$ = of(JSON.parse(storage));
    }
  }

  login(email: string) {
    this.currentUser$ = this.api.getUsosFromEmail(email);
    this.currentInternships$ = this.api.getInternshipsForUser(email);
    this.currentUser$.subscribe(x => localStorage.setItem('user', JSON.stringify(x)));
    this.currentInternships$.subscribe(x => localStorage.setItem('userInternships', JSON.stringify(x)))
    return this.currentUser$;
  }

  logout() {
    this.currentUser$ = EMPTY
    this.currentInternships$ = EMPTY
    localStorage.removeItem('user');
    localStorage.removeItem('userInternships');
  }

  getCurrentUser(): Observable<UsosDto> {
    return this.currentUser$;
  }
  getUserInternships(): Observable<InternshipDto[]> {
    return this.currentInternships$;
  }
}
