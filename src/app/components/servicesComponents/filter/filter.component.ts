import { Component, Input ,EventEmitter} from '@angular/core';
import { Filter } from 'src/app/services/filter.service';
import { ServicesComponent } from 'src/app/servicesTable/services.component';
import { FormGroup, FormControl } from '@angular/forms';
import { AgentsTableComponent } from 'src/app/agents-table/agents-table.component';

type ServiceFilterKeys = keyof ServiceFilters['filters'];
type AgentFilterKeys = keyof AgentFilter['filters'];

//Interface commun entre agent et service filter
interface columnFilter {
  value: string;
  matchMode: string;
}

//interface agent filter
interface AgentFilter {
    first: number;
    rows: number;
    filters: {
      name: columnFilter;
      email: columnFilter;
      phone: columnFilter;
      latitude:columnFilter;
      longitude:columnFilter;
      status:columnFilter;
      service:columnFilter;    
      createdDate: {
        value: {
          start:Date;
          end:Date
        };
        matchMode: string;
      };
    };
  }

//interface service filter
interface ServiceFilters {
    first: number;
    rows: number;
    filters: {
      name: columnFilter;
      description: columnFilter;
      price: columnFilter;
      createdDate: {
        value: {
          start:Date;
          end:Date
        };
        matchMode: string;
      };
    };
  }

export { ServiceFilters, AgentFilter, ServiceFilterKeys, AgentFilterKeys };

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() column!: ServiceFilterKeys;
  @Input() agentColumn!: AgentFilterKeys;
  @Input() check!: string;
  serviceFilters!: ServiceFilters;
  agentFilters!: AgentFilter;

  constructor(
    private filter: Filter,
    private servicesComponent: ServicesComponent,
    private agentsComponent: AgentsTableComponent
  ) {
    this.serviceFilters = this.filter.servicefilters;
    this.agentFilters = this.filter.agentfilters;
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  updateMatchMode(event: any) {
    //Si on veut filter en service table
    if (this.check == 'service') {
      if (event.value === 'Filter') {
        this.serviceFilters.filters.createdDate.matchMode = event.value;
        if (this.range.value.start) {
          this.serviceFilters.filters.createdDate.value.start =
            this.range.value.start;
        }
        if (this.range.value.end) {
          this.serviceFilters.filters.createdDate.value.end =
            this.range.value.end;
        }
      } else {
        this.serviceFilters.filters[this.column].matchMode = event.value;
      }
      console.log(this.serviceFilters);
      this.servicesComponent.changePage(1);
    }
    //Si on veut filter en agent table
    else if (this.check == 'agent') {
    }
  }
}
