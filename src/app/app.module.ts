import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './pages/home/home.component';
import { SetupComponent } from './pages/setup/setup.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminStudentCatalogComponent } from './pages/admin-student-catalog/admin-student-catalog.component';
import { SubmitDateTicketComponent } from './pages/submit-date-ticket/submit-date-ticket.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Feedback You should use lazy loading for admin module
// Feedback you should split your app into modules based on domain + shared module and core module
// Feedback token interceptor should be in core module
// Feedback clean and remove unnecessary code
// Feedback translation should be nested object instead of plain strings
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent,
    LoginComponent,
    DocumentsComponent,
    HeaderComponent,
    AdminHomeComponent,
    AdminStudentCatalogComponent,
    SubmitDateTicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
