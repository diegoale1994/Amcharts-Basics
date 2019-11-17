import { Component, OnInit, Input } from '@angular/core';
import { Chart } from '../models/chart';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-organizador',
  templateUrl: './organizador.component.html',
  styleUrls: ['./organizador.component.css']
})
export class OrganizadorComponent implements OnInit {

  @Input('chartOrders') chartOrders: Chart[];
  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chartOrders, event.previousIndex, event.currentIndex);
  }

}
