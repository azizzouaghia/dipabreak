import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { service } from 'src/app/models/service.module';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent {
  serviceToEdit: service;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private readonly servicesService:ServicesService) {
    this.serviceToEdit = data.serviceToEdit;
  }
}
