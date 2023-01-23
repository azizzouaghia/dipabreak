import { Component, Input } from '@angular/core';
import { faUsers,faFileInvoice,faUsersLine,faCity, IconDefinition} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent {
  @Input() color: string="";
  @Input() backgroundColor: string="";
  @Input() title: string="";
  @Input() number: string="";
  @Input() progressBg: string="";
  @Input() progressWidth: string="";
  @Input() iconType: string = "";

  getIcon(): IconDefinition {
    switch (this.iconType) {
      case 'users':
        return faUsers;
      case 'agents':
        return faUsersLine;
      case 'invoice':
        return faFileInvoice;
      case 'village':
        return faCity;
      default:
        return faUsers;
    }
  }
}