import { Injectable } from '@angular/core';
import { UsosDto } from './models/usos.dto';
import { ApiService } from './services/api.service';
import { EMPTY, Observable } from 'rxjs';

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
