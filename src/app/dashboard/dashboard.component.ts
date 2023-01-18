import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tiles: Tile[] = [
    {text: '1', cols: 1, rows: 5},
    {text: '2', cols: 3, rows: 5},
    {text: '3', cols: 3, rows: 5},
    {text: '4', cols: 6, rows: 1},
  ];
}
