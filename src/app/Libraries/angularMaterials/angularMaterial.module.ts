import {NgModule} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table'  
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    imports: [
        MatChipsModule,
        MatBadgeModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatMenuModule,
        FormsModule,
        MatGridListModule,
        MatDialogModule,
        MatButtonModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule
        
    ],
    exports: [
        MatChipsModule,
        MatBadgeModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatMenuModule,
        FormsModule,
        MatGridListModule,
        MatDialogModule,
        MatButtonModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule
    ]
})
export class angularMaterialModule {
}