import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { faCircleInfo, faPenToSquare,faTrash,faPlus,faFilter,faSquarePlus} from '@fortawesome/free-solid-svg-icons';
import { AgentFilter } from '../components/servicesComponents/filter/filter.component';
import { MatDialog } from '@angular/material/dialog';
import { AgentService } from '../services/agent.service';
import { agent } from '../models/agent.module';
import { environment } from 'src/environments/environment';
import { Filter } from '../services/filter.service';
import { AgentResponse } from '../models/response.module';
import { AddagentComponent } from '../components/dashboardComponents/addagent/addagent.component';
import { AddServiceToAgentComponent } from '../components/agentComponents/add-service-to-agent/add-service-to-agent.component';

@Component({
  selector: 'app-agents-table',
  templateUrl: './agents-table.component.html',
  styleUrls: ['./agents-table.component.css'],
})
export class AgentsTableComponent {
  //Les Variables
  agents: agent[] = [];
  agentToEdit?: agent;
  agentToDelete: boolean = false;
  rows = environment.rows;
  numberOfPages = 0;
  agentsLength = 0;

  //Services Fonction
  updateAgentsList(agents: agent[]) {
    this.agents = agents;
  }
  editAgent(agent: agent) {
    this.agentToDelete = false;
    this.agentToEdit = agent;
  }
  deleteAgent(agent: agent) {
    this.agentToDelete = true;
    this.agentToEdit = agent;
  }
  initService() {
    this.agentToDelete = false;
    this.agentToEdit = {
      name: '',
      email: '',
      password: '',
      status: true,
      services: [],
    };
  }

  customFilter!: AgentFilter;

  //OnInit
  ngOnInit(): void {
    this.agentService
      .getCustomAgents(this.customFilter)
      .subscribe((result: AgentResponse) => {
        this.agents = result.results;
        this.agentsLength = result.length;
        this.dataSource = new MatTableDataSource(this.agents);
      });

    this.agentService
      .getCustomAgents(this.customFilter)
      .subscribe((result: AgentResponse) => {
        const pagenbre = result.length / this.rows;
        this.numberOfPages = Math.ceil(pagenbre);
        this.pages = new Array(this.numberOfPages).fill(0).map((x, i) => i + 1);
        if (this.currentPage === 1) {
          this.pagesToDisplay = this.pages.slice(0, 5);
        }
        this.pages = this.pagesToDisplay;
      });
  }

  //Action Icons
  moreDetails_icon = faCircleInfo;
  edit_icon = faPenToSquare;
  delete_icon = faTrash;
  add_icon = faPlus;
  filter_icon = faFilter;
  addService_icon = faSquarePlus;

  //Constructor
  constructor(
    private dialog: MatDialog,
    private agentService: AgentService,
    private filter: Filter
  ) {
    this.dataSource = new MatTableDataSource(this.service);
    this.customFilter = this.filter.agentfilters;
  }

  //Table
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'status',
    'createdDate',
    'action',
  ];
  dataSource: MatTableDataSource<agent>;
  service?: agent[];

  //Pagination
  currentPage = 1; //page actuelle
  pages: any; //Nombre De Pagination
  pagesToDisplay = [];
  public changePage(number: number) {
    //Changer La Page Fonction
    this.currentPage = number;
    const skip = (number - 1) * this.rows;
    this.customFilter.first = skip;
    this.agentService //Obtenir Data Selon Page
      .getCustomAgents(this.customFilter)
      .subscribe((result: AgentResponse) => {
        this.agents = result.results;
        this.agentsLength = result.length;
        this.dataSource = new MatTableDataSource(this.agents);
      });

    //Mouvement Du Pagination
    this.agentService
      .getCustomAgents(this.customFilter)
      .subscribe((result: AgentResponse) => {
        const pagenbre = result.length / this.rows;
        this.numberOfPages = Math.ceil(pagenbre);
        this.pages = new Array(this.numberOfPages).fill(0).map((x, i) => i + 1);
        if (this.currentPage === 1) {
          this.pagesToDisplay = this.pages.slice(0, 5);
        } else if (this.currentPage === this.pages.length) {
          this.pagesToDisplay = this.pages.slice(this.pages.length - 5);
        } else if (this.currentPage === 2) {
          this.pagesToDisplay = this.pages.slice(0, 5);
        } else if (this.currentPage === this.pages.length - 1) {
          this.pagesToDisplay = this.pages.slice(
            this.currentPage - 4,
            this.currentPage + 2
          );
        } else {
          this.pagesToDisplay = this.pages.slice(
            this.currentPage - 3,
            this.currentPage + 2
          );
        }
        this.pages = this.pagesToDisplay;
      });
  }

  //Filter
  showFilter = false;
  filterCheck = 'agent';

  selectedColumn: keyof AgentFilter['filters'] = 'name';
  updateSelectedColumn(column: string) {
    //Obtenir La Colone Selectionner Pour CSS Color Style
    switch (column) {
      case 'name':
        this.selectedColumn = 'name';
        break;
      case 'email':
        this.selectedColumn = 'email';
        break;
      case 'status':
        this.selectedColumn = 'status';
        break;
      case 'createdDate':
        this.selectedColumn = 'createdDate';
        break;
      default:
        this.selectedColumn = 'name';
    }
  }

  //Icons Fonctions
  //Supprimer,Modifier Dialog
  openDialog() {
    const dialogRef = this.dialog.open(AddagentComponent, {
      data: {
        agentToEdit: this.agentToEdit,
        agentToDelete: this.agentToDelete,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.afterClosed().subscribe(() => {
      this.agentService
        .getCustomAgents(this.customFilter)
        .subscribe((result: AgentResponse) => {
          this.agents = result.results;
          this.dataSource = new MatTableDataSource(this.agents);
        });
    });
  }
  //Ajouter Une Service A Un Agent Dialog
  addServiceDialog() {
    const dialogRef = this.dialog.open(AddServiceToAgentComponent, {
      data: {
        agentToEdit: this.agentToEdit,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.afterClosed().subscribe(() => {
    //Apres Fermer Le Dialog
    });
  }
}
