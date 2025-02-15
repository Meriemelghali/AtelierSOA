import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironmentsComponent } from './environments/environments.component';
import { AddEnvironmentComponent } from './add-environment/add-environment.component';
//import { Page404Component } from './page404/page404.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: '/logement', pathMatch: 'full' },
  { path: 'logement', component: EnvironmentsComponent },
  { path: 'add-logement', component: AddEnvironmentComponent },
  { path: 'not-found', component: NavbarComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
