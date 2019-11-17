import { Component, OnInit, NgZone } from '@angular/core';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {
  private chart: am4charts.XYChart;
  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let data = [{
        "country": "Lithuania",
        "units": 500,
        "pie": [{
          "value": 250,
          "title": "Cat #1"
        }, {
          "value": 150,
          "title": "Cat #2"
        }, {
          "value": 100,
          "title": "Cat #3"
        }]
      }, {
        "country": "Czech Republic",
        "units": 300,
        "pie": [{
          "value": 80,
          "title": "Cat #1"
        }, {
          "value": 130,
          "title": "Cat #2"
        }, {
          "value": 90,
          "title": "Cat #3"
        }]
      }, {
        "country": "Ireland",
        "units": 200,
        "pie": [{
          "value": 75,
          "title": "Cat #1"
        }, {
          "value": 55,
          "title": "Cat #2"
        }, {
          "value": 70,
          "title": "Cat #3"
        }]
      }];
      
      
      // Create chart instance
      let chart = am4core.create("chartdivBullet", am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      
      // Add data
      chart.data = data;
      
      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.disabled = true;
      
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Units sold (M)";
      valueAxis.min = 0;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.grid.template.strokeOpacity = 0.07;
      
      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "units";
      series.dataFields.categoryX = "country";
      series.tooltip.pointerOrientation = "vertical";
      
      
      let columnTemplate = series.columns.template;
      // add tooltip on column, not template, so that slices could also have tooltip
      columnTemplate.column.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
      columnTemplate.column.tooltipY = 0;
      columnTemplate.column.cornerRadiusTopLeft = 20;
      columnTemplate.column.cornerRadiusTopRight = 20;
      columnTemplate.strokeOpacity = 0;
      
      
      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      columnTemplate.adapter.add("fill", function(fill, target) {	
        let color = chart.colors.getIndex(target.dataItem.index * 3);
        return color;
      });
      
      // create pie chart as a column child
      let pieChart = series.columns.template.createChild(am4charts.PieChart);
      pieChart.width = am4core.percent(80);
      pieChart.height = am4core.percent(80);
      pieChart.align = "center";
      pieChart.valign = "middle";
      pieChart.dataFields.data = "pie";
      
      let pieSeries = pieChart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "title";
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.slices.template.stroke = am4core.color("#ffffff");
      pieSeries.slices.template.strokeWidth = 1;
      pieSeries.slices.template.strokeOpacity = 0;
      
      pieSeries.slices.template.adapter.add("fill", function(fill, target) {
        return am4core.color("#ffffff")
      });
      
      pieSeries.slices.template.adapter.add("fillOpacity", function(fillOpacity, target) {
        return (target.dataItem.index + 1) * 0.2;
      });
      
      pieSeries.hiddenState.properties.startAngle = -90;
      pieSeries.hiddenState.properties.endAngle = 270;
      
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
