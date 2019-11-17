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
      this.chartOrder = [
        {
          "posicion": 4,
          "idChart": 667,
          "nombre": "Grafico de Bala"
        },
        {
          "posicion": 1,
          "idChart": 666,
          "nombre": "Grafico de Barras"
        },
        {
          "posicion": 3,
          "idChart": 668,
          "nombre": "Grafico de Radar"
        },
        {
          "posicion": 2,
          "idChart": 669,
          "nombre": "Grafico de Pie"
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
  }
}
