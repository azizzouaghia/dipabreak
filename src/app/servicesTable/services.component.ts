import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { faCircleInfo, faPenToSquare,faTrash,faPlus,faFilter} from '@fortawesome/free-solid-svg-icons';
import { Filters } from '../components/servicesComponents/filter/filter.component';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceComponent } from '../components/servicesComponents/add-service/add-service.component';
import { ServicesService } from '../services/services.service';
import { service } from '../models/service.module';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  //Les Variables
  services: service[] = [];
  serviceToEdit?: service;
  //Services Fonction
  async updateEmployeeList(services: service[]) {
    this.services = services;
  }
  async initNewEmployee() {
    this.serviceToEdit = new service();
  }
  async editEmployee(service: service) {
    this.serviceToEdit = service;
  }
  //OnInit
  ngOnInit(): void {
    this.servicesService.getServices().subscribe((result: service[]) => {
      this.services = result;
      this.dataSource = new MatTableDataSource(this.services);
      this.serviceToEdit = this.services[0]
    });
  }
  //Action Icons
  moreDetails_icon = faCircleInfo;
  edit_icon = faPenToSquare;
  delete_icon = faTrash;
  add_icon = faPlus;
  filter_icon = faFilter;
  //Constructor
  constructor(
    private dialog: MatDialog,
    private servicesService: ServicesService
  ) {
    this.dataSource = new MatTableDataSource(this.service);
  }
  //Table
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'createdDate',
    'action',
  ];
  dataSource: MatTableDataSource<service>;
  service: service[] = [this.services[0]];
  //Pagination
  itemsPerPage = 10;
  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.services.length / this.itemsPerPage);
    console.log(
      Array(pageCount)
        .fill(0)
        .map((x, i) => i + 1)
    );
    return Array(pageCount)
      .fill(0)
      .map((x, i) => i + 1);
  }
  //Filter
  showFilter = false;
  selectedColumn: keyof Filters['filters'] = 'name';
  updateSelectedColumn(column: string) {
    switch (column) {
      case 'name':
        this.selectedColumn = 'name';
        break;
      case 'description':
        this.selectedColumn = 'description';
        break;
      case 'price':
        this.selectedColumn = 'price';
        break;
      case 'dateCreated':
        this.selectedColumn = 'dateCreated';
        break;
      default:
        this.selectedColumn = 'name';
    }
  }
  //Dialogue Fonction Return AddServiceComponent
  openDialog() {
    const dialogRef = this.dialog.open(AddServiceComponent, {
      data: {
        serviceToEdit: this.serviceToEdit,
      },
    });
    console.log(this.serviceToEdit)
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
