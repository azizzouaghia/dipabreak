import { Component, Input ,EventEmitter} from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { ServicesComponent } from 'src/app/servicesTable/services.component';
type FilterKeys = keyof Filters['filters'];

interface columnFilter {
  value: string;
  matchMode: string;
}
  interface Filters {
    first: number;
    rows: number;
    filters: {
      name: columnFilter;
      description: columnFilter;
      price: columnFilter;
      createdDate: columnFilter;
    };
  }

export { Filters, FilterKeys };

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() column!: FilterKeys;
  filters!: Filters;

  constructor(
    private filterService: FilterService,
    private servicesComponent: ServicesComponent
  ) {
    this.filters = this.filterService.filters;
  }

  updateMatchMode(event: any) {
    this.filters.filters[this.column].matchMode = event.value;
    this.servicesComponent.changePage(1);
  }
}
