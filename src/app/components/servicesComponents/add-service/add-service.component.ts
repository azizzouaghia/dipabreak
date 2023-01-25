import { Component,Inject,Output,EventEmitter,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { service } from 'src/app/models/service.module';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent {
  //Variables
  serviceToEdit: service = {
    name: '',
    description: '',
    status: false,
    clients: [],
    agents: [],
  };
  serviceToDelete: boolean = false;
  @Output() serviceChanged = new EventEmitter<service[]>();
  //Constructor
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly servicesService: ServicesService
  ) {
    this.serviceToEdit = data.serviceToEdit || {};
    this.serviceToDelete = data.serviceToDelete || false;
  }
  ngOnInit(): void {
    if (this.data.serviceToEdit) this.serviceToEdit = this.data.serviceToEdit;
    if (this.data.serviceToDelete)
      this.serviceToDelete = this.data.serviceToDelete;
  }
  //Modifier Une Service
  updateService(service: service) {
    this.servicesService.updateService(service).subscribe();
  }
  //Supprimer Une Service

  //Cree Une Service
  createService(service: service) {
    this.servicesService.createService(service).subscribe((services: service[]) => {
        this.serviceChanged.emit(services);
      });
  }
}
