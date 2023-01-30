import { NgModule } from '@angular/core';
import { ClientsComponent } from '../components/dashboardComponents/clientsTable/clients.component';
import { AgentsComponent } from '../components/dashboardComponents/agentsTable/agents.component';
import { angularMaterialModule } from '../Libraries/angularMaterials/angularMaterial.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfocardComponent } from '../components/dashboardComponents/infocard/infocard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AddclientComponent } from '../components/dashboardComponents/addclient/addclient.component';
import { AddagentComponent } from '../components/dashboardComponents/addagent/addagent.component';

@NgModule({
    declarations: [
        ClientsComponent,
        AgentsComponent,
        InfocardComponent,
        AddclientComponent,
        AddagentComponent
    ],
    imports: [
        FontAwesomeModule,
        BrowserAnimationsModule,
        BrowserModule,
        angularMaterialModule,
    ],
    exports: [
        ClientsComponent,
        AgentsComponent,
        InfocardComponent,
        AddclientComponent,
        AddagentComponent
    ],
})
export class DashboardModule {}
