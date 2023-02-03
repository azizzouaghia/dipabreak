import { Component, Inject, Output, EventEmitter, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { agent } from 'src/app/models/agent.module';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.component.html',
  styleUrls: ['./addagent.component.css'],
})
export class AddagentComponent {
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
  agentToDelete: boolean = false;
  @Output() agentChanged = new EventEmitter<agent[]>();

  //Constructor
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly agentsService: AgentService
  ) {
    this.AgentToEdit = data.agentToEdit || {};
    this.agentToDelete = data.agentToDelete || false;
  }

  //OnInit
  ngOnInit(): void {
    if (this.data.agentToEdit) this.AgentToEdit = this.data.agentToEdit;
    if (this.data.agentToDelete)
      this.agentToDelete = this.data.agentToDelete;
  }

  //Modifier Un Agent
  updateAgent(agent: agent) {
    this.agentsService.updateAgent(agent).subscribe();
  }
  //Supprimer Un Agent
  deleteAgent(agent: agent) {
    this.agentsService.deleteAgent(agent).subscribe();
  }
  //Cree Un Agent
  createAgent(agent: agent) {
    this.agentsService
      .createAgent(agent)
      .subscribe((agents: agent[]) => {
        this.agentChanged.emit(agents);
      });
  }
}
