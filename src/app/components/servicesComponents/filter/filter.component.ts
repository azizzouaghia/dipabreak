import { Component, Input ,EventEmitter} from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { ServicesComponent } from 'src/app/servicesTable/services.component';
import { FormGroup, FormControl } from '@angular/forms';

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
      createdDate: {
        value: {
          start:Date;
          end:Date
        };
        matchMode: string;
      };
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


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  updateMatchMode(event: any) {

    if(event.value==="Filter"){
      this.filters.filters.createdDate.matchMode = event.value;
      if (this.range.value.start) {
          this.filters.filters.createdDate.value.start = this.range.value.start;
      }
      if (this.range.value.end) {
          this.filters.filters.createdDate.value.end = this.range.value.end;
      }
    }else{
      this.filters.filters[this.column].matchMode = event.value;
    }
    console.log(this.filters);
    this.servicesComponent.changePage(1);
  }
}
