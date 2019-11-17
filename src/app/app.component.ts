import { Component, OnInit } from '@angular/core';
import { Chart } from './models/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DashBoards';
  chartOrder: Chart[];
  constructor(){

  }
  ngOnInit() {
    setTimeout(() => {
      this.chartOrder = [
        {
          "posicion": 4,
          "idChart": 667,
        },
        {
          "posicion": 1,
          "idChart": 666,
        },
        {
          "posicion": 3,
          "idChart": 668,
        },
        {
          "posicion": 2,
          "idChart": 669,
        }
      ];
      this.chartOrder.sort(function (a, b) {
        if (a.posicion > b.posicion) {
          return 1;
        }
        if (a.posicion < b.posicion) {
          return -1;
        }
        return 0;
      });
    }, 50);
  }
}
