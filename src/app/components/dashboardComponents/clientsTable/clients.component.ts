  import {AfterViewInit, Component, ViewChild} from '@angular/core';
  import {MatPaginator} from '@angular/material/paginator';
  import {MatSort} from '@angular/material/sort';
  import {MatTableDataSource} from '@angular/material/table';
  import { faCircleInfo, faPenToSquare,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import { AddclientComponent } from '../addclient/addclient.component';

  export interface UserData {
    name: string;
    phone: string;
    registerOn: string;
  }


  @Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
  })

export class ClientsComponent {

//Action Icons
  moreDetails_icon = faCircleInfo;
  edit_icon = faPenToSquare;
  delete_icon = faTrash;
  add_icon = faPlus;

//Constructor
  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }
//Table
    displayedColumns: string[] = ['name', 'phone', 'registerOn', 'action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator!: MatPaginator ;
    @ViewChild(MatSort) sort!: MatSort ;

    users : UserData[]=[{
      name:"aziz",
      phone:"95123498",
      registerOn:"12-06-2022",
    },
    {
        name:"wassim",
        phone:"55221144",
        registerOn:"26-12-2021",
      },
      {
      name:"ahmed",
      phone:"22554477",
      registerOn:"11-01-2023",
    }
  ]

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
//Ajouter,Modifier un client
  openDialog() {
    const dialogRef = this.dialog.open(AddclientComponent);
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });
  }
}
