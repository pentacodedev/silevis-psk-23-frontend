import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsosDto } from '../models/usos.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiRoot: string = "http://localhost:5997";
  constructor(private http: HttpClient) {
  }

  getUsosFromEmail(email: string) {
    email = email.replace("@", "%40");
    return this.http.get<UsosDto>(`${this.apiRoot}/Students?email=${email}`);
  }


}
