import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './servicesTable/services.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'services', component: ServicesComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
