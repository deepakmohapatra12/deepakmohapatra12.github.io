// Angular Import
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// Bootstrap Import
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexGrid,
  ApexStroke,
  ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  colors: string[];
  grid: ApexGrid;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DefaultComponent {
   // private props
   @ViewChild('growthChart') growthChart: ChartComponent;
   chartOptions: Partial<ChartOptions>;
   @ViewChild('bajajchart') bajajchart: ChartComponent;
   chartOptions1: Partial<ChartOptions>;
   monthChart: any;
   yearChart: any;
   colorChart = ['#673ab7'];
 
   // Constructor
   constructor() {
     this.chartOptions = {
       series: [
         {
           name: 'Customer Satisfaction',
           data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
         },
         {
           name: 'Survey Response',
           data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
         },
         {
           name: 'People Tracked',
           data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
         },
         {
           name: 'Feedback',
           data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
         }
       ],
       dataLabels: {
         enabled: false
       },
       chart: {
         type: 'bar',
         height: 480,
         stacked: true,
         toolbar: {
           show: true
         }
       },
       colors: ['#90caf9', '#1e88e5', '#673ab7', '#ede7f6'],
       responsive: [
         {
           breakpoint: 480,
           options: {
             legend: {
               position: 'bottom',
               offsetX: -10,
               offsetY: 0
             }
           }
         }
       ],
       plotOptions: {
         bar: {
           horizontal: false,
           columnWidth: '50%'
         }
       },
       xaxis: {
         type: 'category',
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
       },
       grid: {
         strokeDashArray: 4
       },
       tooltip: {
         theme: 'dark'
       }
     };
     this.chartOptions1 = {
       chart: {
         type: 'area',
         height: 95,
         stacked: true,
         sparkline: {
           enabled: true
         }
       },
       colors: ['#673ab7'],
       stroke: {
         curve: 'smooth',
         width: 1
       },
 
       series: [
         {
           data: [0, 15, 10, 50, 30, 40, 25]
         }
       ]
     };
   }
 
   // Life cycle events
   ngOnInit(): void {
     setTimeout(() => {
       this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
       this.monthChart.render();
     }, 500);
   }
 
   // public Method
   onNavChange(changeEvent: NgbNavChangeEvent) {
     if (changeEvent.nextId === 1) {
       setTimeout(() => {
         this.monthChart = new ApexCharts(document.querySelector('#tab-chart-1'), this.monthOptions);
         this.monthChart.render();
       }, 200);
     }
 
     if (changeEvent.nextId === 2) {
       setTimeout(() => {
         this.yearChart = new ApexCharts(document.querySelector('#tab-chart-2'), this.yearOptions);
         this.yearChart.render();
       }, 200);
     }
   }
 
   ListGroup = [
     {
       name: 'Financial Survey',
       profit: '10% Positive',
       invest: '$1839.00',
       bgColor: 'bg-light-success',
       icon: 'ti ti-chevron-up',
       color: 'text-success'
     },
     {
       name: 'Educational Survey',
       profit: '20% Positive',
       invest: '$100.00',
       bgColor: 'bg-light-danger',
       icon: 'ti ti-chevron-down',
       color: 'text-danger'
     },
     {
       name: 'Brass & Bezel',
       profit: '70% Positive',
       invest: '$200.00',
       bgColor: 'bg-light-success',
       icon: 'ti ti-chevron-up',
       color: 'text-success'
     },
     {
       name: 'Logistics',
       profit: '30% Positive',
       invest: '$189.00',
       bgColor: 'bg-light-danger',
       icon: 'ti ti-chevron-down',
       color: 'text-danger'
     },
     {
       name: 'External',
       profit: '30% Posotive',
       invest: '$210.00',
       bgColor: 'bg-light-success',
       icon: 'ti ti-chevron-up',
       color: 'text-success'
     }
   ];
 
   monthOptions = {
     chart: {
       type: 'line',
       height: 90,
       sparkline: {
         enabled: true
       }
     },
     dataLabels: {
       enabled: false
     },
     colors: ['#FFF'],
     stroke: {
       curve: 'smooth',
       width: 3
     },
     series: [
       {
         name: 'series1',
         data: [45, 66, 41, 89, 25, 44, 9, 54]
       }
     ],
     yaxis: {
       min: 5,
       max: 95
     },
     tooltip: {
       theme: 'dark',
       fixed: {
         enabled: false
       },
       x: {
         show: false
       },
       y: {
         title: {
           formatter: function (seriesName) {
             return 'Total Earning';
           }
         }
       },
       marker: {
         show: false
       }
     }
   };
 
   yearOptions = {
     chart: {
       type: 'line',
       height: 90,
       sparkline: {
         enabled: true
       }
     },
     dataLabels: {
       enabled: false
     },
     colors: ['#FFF'],
     stroke: {
       curve: 'smooth',
       width: 3
     },
     series: [
       {
         name: 'series1',
         data: [35, 44, 9, 54, 45, 66, 41, 69]
       }
     ],
     yaxis: {
       min: 5,
       max: 95
     },
     tooltip: {
       theme: 'dark',
       fixed: {
         enabled: false
       },
       x: {
         show: false
       },
       y: {
         title: {
           formatter: function (seriesName) {
             return 'Total Earning';
           }
         }
       },
       marker: {
         show: false
       }
     }
   };
}
