import { Component } from '@angular/core';
import { faBell, faUser,faGear, faRightFromBracket,faHouse,faComment} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  notification = faBell
  profile = faUser
  settings = faGear
  logout = faRightFromBracket
  dashboard = faHouse
  chat = faComment
}
