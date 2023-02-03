import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import {angularMaterialModule  } from './Libraries/angularMaterials/angularMaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './servicesTable/services.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServicesdModule } from './servicesTable/services.module';
import { AgentsTableComponent } from './agents-table/agents-table.component';
import { InterventionComponent } from './intervention/intervention.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    ServicesComponent,
    AgentsTableComponent,
    InterventionComponent,
  ],
  imports: [
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    angularMaterialModule,
    HttpClientModule,
    FormsModule,
    DashboardModule,
    ServicesdModule,
  ],
  providers: [
    ServicesComponent,
    AgentsTableComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
