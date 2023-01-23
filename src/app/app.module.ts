import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import {angularMaterialModule  } from './Libraries/angularMaterials/angularMaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './components/dashboardComponents/clientsTable/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AgentsComponent } from './components/dashboardComponents/agentsTable/agents.component';
import { InfocardComponent } from './components/dashboardComponents/infocard/infocard.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddclientComponent } from './components/dashboardComponents/addclient/addclient.component';
import { AddagentComponent } from './components/dashboardComponents/addagent/addagent.component';
import { ServicesComponent } from './servicesTable/services.component';
import { FilterComponent } from './components/servicesComponents/filter/filter.component';
import { AddServiceComponent } from './components/servicesComponents/add-service/add-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    SidebarComponent,
    AgentsComponent,
    InfocardComponent,
    LoginComponent,
    DashboardComponent,
    AddclientComponent,
    AddagentComponent,
    ServicesComponent,
    FilterComponent,
    AddServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BrowserModule,
    angularMaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
