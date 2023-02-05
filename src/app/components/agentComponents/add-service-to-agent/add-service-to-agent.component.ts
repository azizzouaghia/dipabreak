import { Component, Inject, Output, EventEmitter, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { agent } from 'src/app/models/agent.module';
import { service } from 'src/app/models/service.module';
import { AgentService } from 'src/app/services/agent.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-service-to-agent',
  templateUrl: './add-service-to-agent.component.html',
  styleUrls: ['./add-service-to-agent.component.css'],
})
export class AddServiceToAgentComponent {
  //Variables
  AgentToEdit: agent = {
    name: '',
    email: '',
    password: '',
    phone: 0,
    latitude: 0,
    longitude: 0,
    status: true,
    services: [],
  };
  serviceId = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly agentsService: AgentService,
    private readonly servicesService: ServicesService
  ) {
    this.AgentToEdit = data.agentToEdit || {};
  }

  //OnInit
  ngOnInit(): void {
    if (this.data.agentToEdit) this.AgentToEdit = this.data.agentToEdit;
  }

  //Ajouter La Service Qui A serviceId A Cette Agent
  addServiceToAgent() {
    this.agentsService.addServiceToAgent(this.AgentToEdit.agentId,this.serviceId).subscribe()
  }
}
