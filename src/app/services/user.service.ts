import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { UsosDto } from '../models/usos.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser$: Observable<UsosDto> = EMPTY;

  constructor(private api: ApiService) {
  }

  login(email: string) {
    this.currentUser$ = this.api.getUsosFromEmail(email);
  }

  getCurrentUser(): Observable<UsosDto> | undefined {
    return this.currentUser$;
  }
}
