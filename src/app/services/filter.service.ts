import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceFilters,AgentFilter } from '../components/servicesComponents/filter/filter.component';

@Injectable({
  providedIn: 'root',
})
export class Filter {
  constructor() {}

  servicefilters: ServiceFilters = {
    first: 0,
    rows: environment.rows,
    filters: {
      name: { value: '', matchMode: '' },
      description: { value: '', matchMode: '' },
      price: { value: '', matchMode: '' },
      createdDate: {
        value: {
          start: new Date(),
          end: new Date(),
        },
        matchMode: '',
      },
    },
  };
  agentfilters: AgentFilter = {
    first: 0,
    rows: environment.rows,
    filters: {
      name: { value: '', matchMode: '' },
      email: { value: '', matchMode: '' },
      phone: { value: '', matchMode: '' },
      latitude: { value: '', matchMode: '' },
      longitude: { value: '', matchMode: '' },
      status: {value:'',matchMode:''},
      service: { value: '', matchMode: '' },
      createdDate: {
        value: {
          start: new Date(),
          end: new Date(),
        },
        matchMode: '',
      },
    },
  };
}
