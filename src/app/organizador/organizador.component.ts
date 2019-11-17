import { Component, OnInit, Input } from '@angular/core';
import { Chart } from '../models/chart';

@Component({
  selector: 'app-organizador',
  templateUrl: './organizador.component.html',
  styleUrls: ['./organizador.component.css']
})
export class OrganizadorComponent implements OnInit {

  @Input('chartOrder') chartOrder: Chart[];
  constructor() { }

  ngOnInit() {
  }

}
