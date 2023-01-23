  import {AfterViewInit, Component, ViewChild} from '@angular/core';
  import {MatPaginator} from '@angular/material/paginator';
  import {MatSort} from '@angular/material/sort';
  import {MatTableDataSource} from '@angular/material/table';
  import { faCircleInfo, faPenToSquare,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';
  import {MatDialog} from '@angular/material/dialog';
  import { AddagentComponent } from '../addagent/addagent.component';

  export interface UserData {
    name: string;
    phone: string;
    status: boolean;
  }

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent {

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
    displayedColumns: string[] = ['name', 'phone', 'status', 'action'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator!: MatPaginator ;
    @ViewChild(MatSort) sort!: MatSort ;

    users : UserData[]=[{
      name:"elon musk",
      phone:"146",
      status:true,
    },
    {
        name:"jeff bezos",
        phone:"121",
        status:false,
      },
      {
      name:"mark zu.",
      phone:"49",
      status:false,
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
    const dialogRef = this.dialog.open(AddagentComponent);
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });
  }
}
