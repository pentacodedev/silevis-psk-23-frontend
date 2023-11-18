import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsosDto } from '../models/usos.dto';
import { InternshipDto } from '../models/internship.dto';
import { TemplateDto } from '../models/template.dto';
import fileSaver from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiRoot: string = "http://localhost:5997";
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  getUsosFromEmail(email: string) {
    email = email.replace("@", "%40");
    return this.http.get<UsosDto>(`${this.apiRoot}/Usos?email=${email}`);
  }

  putInternshipInfo(internship: InternshipDto) {
    return this.http.put(`${this.apiRoot}/internships`, internship)
  }


  getInternshipForUser(email: string) {
    email = email.replace("@", "%40");
    return this.http.get<InternshipDto>(`${this.apiRoot}/Internships/for-student/${email}`);
  }

  getForm1File(template: TemplateDto) {


    let response = fetch(`${this.apiRoot}/pdf/agreement`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type" :'application/json'
      },
      redirect: "follow",
      body: JSON.stringify(template)
    });
    response.then(x=> x.blob())
    .then((blob)=>{
        //const url = URL.createObjectURL(blob);
        fileSaver.saveAs(blob, 'document.pdf');

    });



  }


}
