import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'dipabreak';
  showHeader = true;
  
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      this.showHeader = this.router.url !== '/login';
    });
  }
}
