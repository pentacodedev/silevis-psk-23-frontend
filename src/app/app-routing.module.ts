import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetupComponent } from './pages/setup/setup.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminStudentCatalogComponent } from './pages/admin-student-catalog/admin-student-catalog.component';
import { SubmitDateTicketComponent } from './pages/submit-date-ticket/submit-date-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'setup',
    component: SetupComponent,
  },
  {
    path: 'documents',
    component: DocumentsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'submit-date-ticket',
    component: SubmitDateTicketComponent,
  },
  //Feedback use lazy loading
  //https://angular.io/guide/lazy-loading-ngmodules
  {
    path: 'admin/home',
    component: AdminHomeComponent,
    //Feedback use authGuard
    //https://angular.io/api/router/CanActivate
  },
  {
    path: 'admin/student-catalog',
    component: AdminStudentCatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
