import { Component, Input ,EventEmitter} from '@angular/core';

type FilterKeys = keyof Filters['filters'];

interface columnFilter {
  value: string;
  matchMode: string;
}
  interface Filters {
    first: string;
    rows: string;
    filters: {
      name: columnFilter;
      description: columnFilter;
      price: columnFilter;
      dateCreated: columnFilter;
    }
  }

export { Filters, FilterKeys };

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() column!: FilterKeys;

  filters: Filters = {
    first: "",
    rows: "",
    filters: {
      name: { value: "", matchMode: "" },
      description: { value: "", matchMode: "" },
      price: { value: "", matchMode: "" },
      dateCreated: { value: "", matchMode: "" }
    }
  };

  updateMatchMode(event: any) {
    this.filters.filters[this.column].matchMode = event.value;
    console.log(this.filters);
  }

}
