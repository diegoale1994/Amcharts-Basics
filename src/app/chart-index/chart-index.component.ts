import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-index',
  templateUrl: './chart-index.component.html',
  styleUrls: ['./chart-index.component.css']
})
export class ChartIndexComponent implements OnInit {
  @Input('idChart') idChart: number;
  constructor() { }

  ngOnInit() {
  }

}
