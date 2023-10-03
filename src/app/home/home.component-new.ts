import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from '../shared/constant/translate';
import { ChartDataSets, ChartOptions, ChartType, ChartColor, ChartTitleOptions } from 'chart.js';
// import { Color, Label, MultiDataSet } from 'ng2-charts';
import * as Chart from 'chart.js';
// import * as Highcharts from 'highcharts';

export interface data {
	[key: string]: any;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  dayChart:boolean = true;
  MonthlyChart:boolean = false;
  weeklyChart:boolean = false;
  showPercentage:boolean = false;
  showGridView:boolean = false;
  showChartView:boolean = true;
  constructor() { 
    
  }
  chart: any;
	isButtonVisible = false;
 
	visitorsChartDrilldownHandler = (e: any) => {
		this.chart.options = this.visitorsDrilldownedChartOptions;	
		this.chart.options.data = this.options[e.dataPoint.name];
		this.chart.options.title = { text: e.dataPoint.name }
		this.chart.render();
		this.isButtonVisible = true;
	}
 
	visitorsDrilldownedChartOptions = {
		animationEnabled: true,
		theme: "light2",
		axisY: {
			gridThickness: 0,
			lineThickness: 1
		},
		data: []
	};
 
	newVSReturningVisitorsOptions = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "New vs Returning Visitors"
		},
		subtitles: [{
			text: "Click on Any Segment to Drilldown",
			backgroundColor: "#2eacd1",
			fontSize: 16,
			fontColor: "white",
			padding: 5
		}],
		data: []
	};
 
	options: data = {
		"New vs Returning Visitors": [{
			type: "pie",
			name: "New vs Returning Visitors",
			startAngle: 90,
			cursor: "pointer",
			explodeOnClick: false,
			showInLegend: true,
			legendMarkerType: "square",			
			click: this.visitorsChartDrilldownHandler,
			indexLabelPlacement: "inside",
			indexLabelFontColor: "white",
			dataPoints: [
				{ y: 551160, name: "New Visitors", color: "#058dc7", indexLabel: "62.56%" },
				{ y: 329840, name: "Returning Visitors", color: "#50b432", indexLabel: "37.44%" }
			]
		}],
		"New Visitors": [{
			color: "#058dc7",
			name: "New Visitors",
			type: "column",
			dataPoints: [
				{ label: "Jan", y: 42600 },
				{ label: "Feb", y: 44960 },
				{ label: "Mar", y: 46160 },
				{ label: "Apr", y: 48240 },
				{ label: "May", y: 48200 },
				{ label: "Jun", y: 49600 },
				{ label: "Jul", y: 51560 },
				{ label: "Aug", y: 49280 },
				{ label: "Sep", y: 46800 },
				{ label: "Oct", y: 57720 },
				{ label: "Nov", y: 59840 },
				{ label: "Dec", y: 54400 }
			]
		}],
		"Returning Visitors": [{
			color: "#50b432",
			name: "Returning Visitors",
			type: "column",
			dataPoints: [
				{ label: "Jan", y: 21800 },
				{ label: "Feb", y: 25040 },
				{ label: "Mar", y: 23840 },
				{ label: "Apr", y: 24760 },
				{ label: "May", y: 25800 },
				{ label: "Jun", y: 26400 },
				{ label: "Jul", y: 27440 },
				{ label: "Aug", y: 29720 },
				{ label: "Sep", y: 29200 },
				{ label: "Oct", y: 31280 },
				{ label: "Nov", y: 33160 },
				{ label: "Dec", y: 31400 }
			]
		}]
	};
 
  
  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   series: [{
  //     data: [1, 2, 3],
  //     type: 'line'
  //   }]
  // };
  toggleGridView(){
    this.showGridView = true;
    this.showChartView = false;
  }
  toggleChartView(){
    this.showGridView = false;
    this.showChartView = true;
  }
  
  
  showDay(){
    this.dayChart = true;
    this.weeklyChart= false;
    this.MonthlyChart= false;
  }
  showWeekly(){
    this.dayChart = false;
    this.MonthlyChart= false;
    this.weeklyChart= true;
  }
  showMonthly(){
    this.dayChart = false;
    this.weeklyChart= false;
    this.MonthlyChart= true;
  }
 
  ngOnInit() {
    
    var myChart = new Chart('myChart', {
      type: 'horizontalBar',
      data: {
          labels: ['BYT Web', 'Compnay Web', 'Google'],
          datasets: [{
              label: '',
              data: [60, 20, 40,10, 30, 100],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
            },
            legend: {
              display: false
            }
      }
    });

  var myChart = new Chart('Forecasting', {
    type: 'polarArea',
    data: {
        labels: ['BYT Web', 'Compnay Web', 'Google'],
        datasets: [{
            label: '',
            data: [60, 20, 40,10, 30, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true
        //         }
        //     }]
        // },
        legend: {
          display: false,
        },
    }
  });

  var myChart = new Chart('GuestArrivalPatterns', {
    type: 'line',
    data: {
        labels: ['BYT Web', 'Compnay Web', 'Google'],
        datasets: [{
            label: '',
            data: [60, 20, 40,10, 30, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },
        legend: {
          display: false,
        },
    }
  });


  var myChart = new Chart('mealSession', {
    type: 'pie',
    data: {
        labels: ['BreakFast', 'Lunch', 'Dinner'],
        datasets: [{
            label: '',
            data: [60, 20, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }],
        
    },
    options: {
      plugins: {
      labels: {
        render: 'percentage',
        fontColor: ['green', 'white', 'red'],
        precision: 2
      }
    },

        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true,
        //         }
        //     }]
        // }
        
        // tooltips:{
        //   callbacks: {
        //     label: function(tooltipitem, data) {
        //       return data['labels'][tooltipitem['index']] + ': ' + data['datasets'][0]['data'][tooltipitem['index']] + '%';
        //     }
        //   }
        // }
        
    }
  });

 


  var myChart = new Chart('ReservationWalkin', {
    type: 'line',
    data: {
        labels: ['Reservation', 'Walkin'],
        datasets: [{
            label: '',
            data: [60, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero: true,
    //             }
    //         }]
    //     }
    // }
  });
  var myChart = new Chart('ReservationStatusTry', {
    type: 'line',
    data: {
        labels: ['Reservation', 'Walkin'],
        datasets: [{
            label: '',
            data: [60, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero: true,
    //             }
    //         }]
    //     }
    // }
  });

  var myChart = new Chart('ReservationStatus1  ', {
    type: 'pie',
    // data: {
    // datasets: data
    // }
    // options: {
    //     scales: {
    //         yAxes: [{
    //             ticks: {
    //                 beginAtZero: true,
    //             }
    //         }]
    //     }
    // }
  });


  const myTryCHart = new Chart('myTryCHart1',{
    type: 'pie',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
    },
    options:{
      // plugins:{        
      //   labels:{
      //     render: (args)=>{
      //       debugger
      //       if(args.percentage > 10){
      //         return `${args.percentage}`
      //       }
      //     }
      //   }
      // }
      plugins: {
        labels: {
          render: 'percentage',
          showActualPercentages: true
        }
      }
    }
  });




}



}
