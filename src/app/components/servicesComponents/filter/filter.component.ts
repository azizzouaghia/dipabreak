import { Component, Input ,EventEmitter} from '@angular/core';

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

  filters: Filters = {
    first: 0,
    rows: 10,
    filters: {
      name: { value: '', matchMode: '' },
      description: { value: '', matchMode: '' },
      price: { value: '', matchMode: '' },
      createdDate: { value: '', matchMode: '' },
    }
  };

  updateMatchMode(event: any) {
    this.filters.filters[this.column].matchMode = event.value;
    console.log(this.filters);
  }
}
