import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { UsosDto } from '../models/usos.dto';
import { InternshipDto } from '../models/internship.dto';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Feedback use BehaviorSubject instead of of/empty
  //https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
  //e.g. https://ultimatecourses.com/blog/custom-reactive-services-stores-angular-behaviorsubject
  //You can use ngrx/store for global state management like this
  private currentUser$: Observable<UsosDto> = EMPTY;
  private currentInternship$: Observable<InternshipDto> = EMPTY;

  constructor(private api: ApiService) {
    let internships = localStorage.getItem('userInternship');
    if (internships != null) {
      this.currentInternship$ = of(JSON.parse(internships));
    }

    let storage = localStorage.getItem('user');
    if (storage != null) {
      this.currentUser$ = of(JSON.parse(storage));
    }
  }

  login(email: string) {
    this.currentUser$ = this.api.getUsosFromEmail(email);
    this.currentInternship$ = this.api.getInternshipForUser(email);
    this.currentUser$.subscribe((x) =>
      localStorage.setItem('user', JSON.stringify(x))
    );
    this.currentInternship$.subscribe((x) =>
      localStorage.setItem('userInternship', JSON.stringify(x))
    );
    return this.currentUser$;
  }

  logout() {
    this.currentUser$ = EMPTY;
    this.currentInternship$ = EMPTY;
    localStorage.removeItem('user');
    localStorage.removeItem('userInternship');
  }

  getCurrentUser(): Observable<UsosDto> {
    return this.currentUser$;
  }
  getUserInternship(): Observable<InternshipDto> {
    return this.currentInternship$;
  }
}
