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
  serviceToDelete: boolean = false;
  rows = 3;
  numberOfPages = 0;
  //Services Fonction
  updateServicesList(services: service[]) {
    this.services = services;
  }
  editService(service: service) {
    this.serviceToDelete = false;
    this.serviceToEdit = service;
  }
  deleteService(service: service) {
    this.serviceToDelete = true;
    this.serviceToEdit = service;
  }
  initService() {
    this.serviceToDelete = false;
    this.serviceToEdit = {
      name: '',
      description: '',
      status: false,
      clients: [],
      agents: [],
    };
  }
  customFilter = {
    first: 0,
    rows: this.rows,
    filters: {
      name: { value: '', matchMode: '' },
      description: { value: '', matchMode: '' },
      price: { value: '', matchMode: '' },
      createdDate: { value: '', matchMode: '' },
    },
  };


  //OnInit
  ngOnInit(): void {
    this.servicesService
      .getCustomServices(this.customFilter)
      .subscribe((result: service[]) => {
        this.services = result;
        this.dataSource = new MatTableDataSource(this.services);
      });

    this.servicesService.getNombreServices().subscribe((result: number) => {
      const pagenbre = result / this.rows;
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
  currentPage = 1; //page actuelle
  pages:any; //Nombre De Pagination
  pagesToDisplay = [];
  public changePage(number: number) { //Changer La Page Fonction

    this.currentPage = number;
    const skip = (number - 1) * this.rows;
    this.customFilter.first = skip;

    this.servicesService //Obtenir Data Selon Page
      .getCustomServices(this.customFilter)
      .subscribe((result: service[]) => {
        this.services = result;
        this.dataSource = new MatTableDataSource(this.services);
      });

    this.servicesService.getNombreServices().subscribe((result: number) => { //Mouvement Du Pagination
      const pagenbre = result / this.rows;
      this.numberOfPages = Math.ceil(pagenbre);
      this.pages = new Array(this.numberOfPages).fill(0).map((x, i) => i + 1);
      if (this.currentPage === 1) {
        this.pagesToDisplay = this.pages.slice(0, 5);
      } else if (this.currentPage === this.pages.length) {
        this.pagesToDisplay = this.pages.slice(this.pages.length - 5);
      } else if (this.currentPage === 2) {
        this.pagesToDisplay = this.pages.slice(0, 5);
      } else if (this.currentPage === (this.pages.length-1)) {
        this.pagesToDisplay = this.pages.slice(this.currentPage-4, this.currentPage+2);
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
      case 'createdDate':
        this.selectedColumn = 'createdDate';
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
        serviceToDelete: this.serviceToDelete,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.afterClosed().subscribe(() => {
      this.servicesService
        .getCustomServices(this.customFilter)
        .subscribe((result: service[]) => {
          this.services = result;
          this.dataSource = new MatTableDataSource(this.services);
        });
    });
  }
}
