import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsTableComponent } from './agents-table/agents-table.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterventionComponent } from './intervention/intervention.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './servicesTable/services.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'agents', component: AgentsTableComponent },
  { path: 'intervention', component: InterventionComponent },
  { path: 'form', component: ClientFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
