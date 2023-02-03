import { Component, Input} from '@angular/core';
import { faBell, faUser,faGear, faRightFromBracket,faHouse,faComment,faSquarePlus,faUsers} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  notification = faBell;
  profile = faUser;
  settings = faGear;
  logout = faRightFromBracket;
  dashboard = faHouse;
  chat = faComment;
  service = faSquarePlus;
  users = faUsers;
  @Input() showdashboard: boolean = true;
  @Input() showservices: boolean = true;
  @Input() showagents: boolean = true;
}
