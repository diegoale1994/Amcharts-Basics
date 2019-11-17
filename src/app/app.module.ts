import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartIndexComponent } from './chart-index/chart-index.component';
import { PieComponent } from './chart-index/Charts/pie/pie.component';
import { BarComponent } from './chart-index/Charts/bar/bar.component';
import { RadarComponent } from './chart-index/Charts/radar/radar.component';
import { BulletComponent } from './chart-index/Charts/bullet/bullet.component';
import { OrganizadorComponent } from './organizador/organizador.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    ChartIndexComponent,
    PieComponent,
    BarComponent,
    RadarComponent,
    BulletComponent,
    OrganizadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[DragDropModule]
})
export class AppModule { }
