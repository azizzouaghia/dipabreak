import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { faCircleInfo, faPenToSquare,faTrash,faPlus,faFilter} from '@fortawesome/free-solid-svg-icons';
import { Filters } from '../components/servicesComponents/filter/filter.component';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceComponent } from '../components/servicesComponents/add-service/add-service.component';

export interface UserData {
    id: string;
    name: string;
    description: string;
    price: string;
    dateCreated: string;
  }

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  //Action Icons
  moreDetails_icon = faCircleInfo;
  edit_icon = faPenToSquare;
  delete_icon = faTrash;
  add_icon = faPlus;
  filter_icon = faFilter;
  //Constructor
  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }
  //Table
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'dateCreated',
    'action',
  ];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  users: UserData[] = [
    {
      id: '1',
      name: 'electricien',
      description: 'ebake zlab klheza ezbaklea',
      price: '122$',
      dateCreated: '12-01-2023',
    },
    {
      id: '2',
      name: 'mecanicien',
      description: 'bkjleza eza ekl aeajkz ezalk',
      price: '233$',
      dateCreated: '13-01-2023',
    },
    {
      id: '3',
      name: 'plombier',
      description: 'azkje abzejklaz ezkal',
      price: '88$',
      dateCreated: '15-01-2023',
    },
  ];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
  //Ajouter,Modifier un client
  openDialog() {
    const dialogRef = this.dialog.open(AddServiceComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
