import { Component } from '@angular/core';
import { faBell, faUser,faGear, faRightFromBracket,faHouse,faComment} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  notification = faBell
  profile = faUser
  settings = faGear
  logout = faRightFromBracket
  dashboard = faHouse
  chat = faComment
}
