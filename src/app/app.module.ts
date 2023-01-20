import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import {angularMaterialModule  } from './Libraries/angularMaterials/angularMaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AgentsComponent } from './components/agents/agents.component';
import { InfocardComponent } from './components/infocard/infocard.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { AddagentComponent } from './components/addagent/addagent.component';
import { ServicesComponent } from './services/services.component';
import { FilterComponent } from './components/filter/filter.component';

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
