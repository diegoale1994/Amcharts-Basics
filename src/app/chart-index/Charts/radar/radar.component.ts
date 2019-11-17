import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  private chart: am4charts.XYChart;
  
  constructor(private zone: NgZone) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdivRadar", am4charts.RadarChart);

      /* Add data */
      chart.data = [ {
        "direction": "N",
        "value": 8
      }, {
        "direction": "NE",
        "value": 9
      }, {
        "direction": "E",
        "value": 4.5
      }, {
        "direction": "SE",
        "value": 3.5
      }, {
        "direction": "S",
        "value": 9.2
      }, {
        "direction": "SW",
        "value": 8.4
      }, {
        "direction": "W",
        "value": 11.1
      }, {
        "direction": "NW",
        "value": 10
      } ];
      
      /* Create axes */
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any);
      categoryAxis.dataFields.category = "direction";
      
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
      //valueAxis.renderer.gridType = "polygons";
      
      let range = categoryAxis.axisRanges.create();
      range.category = "NW";
      range.endCategory = "NW";
      range.axisFill.fill = am4core.color("#0066CC");
      range.axisFill.fillOpacity = 0.3;
      
      let range2 = categoryAxis.axisRanges.create();
      range2.category = "N";
      range2.endCategory = "N";
      range2.axisFill.fill = am4core.color("#0066CC");
      range2.axisFill.fillOpacity = 0.3;
      
      let range3 = categoryAxis.axisRanges.create();
      range3.category = "SE";
      range3.endCategory = "SW";
      range3.axisFill.fill = am4core.color("#CC3333");
      range3.axisFill.fillOpacity = 0.3;
      range3.locations.endCategory = 0;
      
      /* Create and configure series */
      let series = chart.series.push(new am4charts.RadarSeries());
      series.dataFields.valueY = "value";
      series.dataFields.categoryX = "direction";
      series.name = "Wind direction";
      series.strokeWidth = 3;
      series.fillOpacity = 0.2;
      this.chart = chart;
    });
  }


  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
