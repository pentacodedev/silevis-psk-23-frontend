import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { UsosDto } from '../models/usos.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser$: Observable<UsosDto> = EMPTY;

  constructor(private api: ApiService) {
    let storage = localStorage.getItem('user');
    if (storage != null) {
      this.currentUser$ = of(JSON.parse(storage));
    }
  }

  login(email: string) {
    this.currentUser$ = this.api.getUsosFromEmail(email);
    this.currentUser$.subscribe(x => localStorage.setItem('user', JSON.stringify(x)));
  }
  logout() {
    this.currentUser$ = EMPTY
    localStorage.removeItem('user');
  }

  getCurrentUser(): Observable<UsosDto> | undefined {
    return this.currentUser$;
  }
}
