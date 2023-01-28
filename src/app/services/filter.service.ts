import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Filters } from '../components/servicesComponents/filter/filter.component';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}

  filters: Filters = {
    first: 0,
    rows: environment.rows,
    filters: {
      name: { value: '', matchMode: '' },
      description: { value: '', matchMode: '' },
      price: { value: '', matchMode: '' },
      createdDate: { value: '', matchMode: '' },
    },
  };

}
