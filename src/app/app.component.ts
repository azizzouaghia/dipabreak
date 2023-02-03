import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dipabreak';
  showdashboard: boolean = true;
  showservices: boolean = true;
  showagents: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      this.showdashboard = this.router.url == '/dashboard';
      this.showservices = this.router.url == '/services';
      this.showagents = this.router.url == '/agents';
    });
  }
}
