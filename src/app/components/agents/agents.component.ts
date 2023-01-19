  import {AfterViewInit, Component, ViewChild} from '@angular/core';
  import {MatPaginator} from '@angular/material/paginator';
  import {MatSort} from '@angular/material/sort';
  import {MatTableDataSource} from '@angular/material/table';
  import { faCircleInfo, faPenToSquare,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';

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
        status:true,
      },
      {
      name:"mark zu.",
      phone:"49",
      status:false,
    }
  ]

    constructor() {
      this.dataSource = new MatTableDataSource(this.users);
    }

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
}
