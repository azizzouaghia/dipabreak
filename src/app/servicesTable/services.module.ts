import { NgModule } from '@angular/core';
import { angularMaterialModule } from '../Libraries/angularMaterials/angularMaterial.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FilterComponent } from '../components/servicesComponents/filter/filter.component';
import { AddServiceComponent } from '../components/servicesComponents/add-service/add-service.component';

@NgModule({
    declarations: [
        FilterComponent,
        AddServiceComponent,
    ],
    imports: [
        FontAwesomeModule,
        BrowserAnimationsModule,
        BrowserModule,
        angularMaterialModule,
    ],
    exports: [
        FilterComponent,
        AddServiceComponent
    ],
})
export class ServicesdModule {}
