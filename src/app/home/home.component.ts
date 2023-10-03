import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from '../shared/constant/translate';
import { ChartDataSets, ChartOptions, ChartType, ChartColor, ChartTitleOptions } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import * as Chart from 'chart.js';
// import * as Highcharts from 'highcharts';



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
  showPercentage:boolean = true;
  showGridView:boolean = false;
  showChartView:boolean = true;
  constructor() { 
    
}

  
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
      },
      datalabels: {
        formatter: (value, context) => {
        const datapoints = context.chart.data.datasets[0].data;
        function totalSum(total, datapoint) {
        return total + datapoint;
        } 
      }
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



  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };


  
  var data = [{
    data: [50, 55, 60, 33],
    labels: ["India", "China", "US", "Canada"],
    backgroundColor: [
      "#4b77a9",
      "#5f255f",
      "#d21243",
      "#B27200"
    ],
    borderColor: "#fff"
  }];
  var options = {
    tooltips: {
      enabled: false
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let datasets = ctx.chart.data.datasets;
          if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
            let percentage = Math.round((value / sum) * 100) + '%';
            return percentage;
          } else {
            // return percentage;
          }
        },
        color: '#fff',
      }
    }
  };



  }

  
  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [60, 59, 80, 81, 56, 55, 40], },
    { data: [28, 48, 40, 19, 86, 27, 90],  },
    { data: [80, 20, 30, 50, 70, 27, 90], }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July',];

  // Define chart options
  // lineChartLegend1 = true;

  lineChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: false
    },
    legend: {
      display: false,
      position: 'right',
    },
    
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
    },
    { // red
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
    },
    { // yellow
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgb(153, 102, 255)',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    title: {
        display: false,
         position:'right',
      },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        }
      }
    },
  };

  pieChartLabels: Label[] = ['Currently Reserved', 'Currently Occupied', 'Currently Vacant'];

  pieChartData: number[] = [60, 20, 20];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];  
  pieChartColors = [
    {
      backgroundColor: ['rgba(255, 205, 86, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(75, 192, 192, 0.5)'],
    },
  ];



  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];  
  barChartData: ChartDataSets[] = [
    { data: [2500, 5900, 6000, 8100, 8600, 8050, 1200], label: 'Company A' },
    { data: [2800, 4800, 4000, 7900, 9600, 8870, 1400], label: 'Company B' }
  ];



  doughnutChartLabels: Label[] = ['Currently Seated', 'Yes to arrive'];
  doughnutChartData: MultiDataSet = [
    [60, 40]
  ];
  doughnutChartType: ChartType = 'doughnut';   
  doughnutChartOptions: ChartOptions = {    
    responsive: true,
    legend: {
      position: 'right',
    },
    tooltips: {
      enabled: false,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + ' %';
        }
      }
    },
    plugins: {
      labels: {
        render: 'percentage',

      },
      title: {
        display: false,
        color: 'navy',
        position:'right',

        align: 'right',
        font: {
            weight: 'bold'
        },
        padding: 8,
        fullSize: true,
      },
      datalabels: {
        formatter: (value, ctx) => {
          let datasets = ctx.chart.data.datasets;
          if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
            let sum = datasets[0].data.reduce((a, b) => a + b, 0);
            let percentage = Math.round((value / sum) * 100) + '%';
            return percentage;
          }else {
            // return percentage;
          }
        },
        color: '#000',
    }
 },
};

  doughnutChartColors = [
    {
      backgroundColor: ['#20d58196', '#ccd52096',]
    },
  ];
  

  
  public lineChartData1: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  public lineChartLabels1: Array<any> = ['Reservation', 'Walkin'];
  public lineChartType1 = 'line';

  barChartOptions1: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels1: Label[] = ['Jan', 'Feb', 'March', 'April'];
  barChartType1: ChartType = 'bar';
  barChartLegend1 = true;
  barChartPlugins1 = [];  
  barChartData1: ChartDataSets[] = [
    { data: [30, 100, 80, 60, 30, 70, 10], label: 'Reservation' },
    { data: [45, 50, 40, 60, 55, 25, 65], label: 'Walkin' }
  ];
  // barChartColors1 = [
  //   {
  //     backgroundColor: ['#f68f3fc9', '#3f51b5c2', 'red']
  //   },
  // ];


  // public lineChartData1: Array<any> = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  // ];
  // public lineChartLabels1: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartType1 = 'line';


  horizontalBarChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    legend:{
      display: false
    }
  };
  horizontalBarChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018'];
  horizontalBarChartType: ChartType = 'bar';
   
  horizontalBarChartData: ChartDataSets[] = [
    { data: [2500, 5900, 6000, 8100, 8600, 8050, 1200], label: 'Company A', barPercentage: 20 },
    { data: [2800, 4800, 4000, 7900, 9600, 8870, 1400], label: 'Company B', barPercentage: 50}
  ];
  
// const chart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: {
//       plugins: {
//           title: {
//               display: true,
//               text: 'Custom Chart Title'
//           }
//       }
//   }
// });

public scatterChartOptions: ChartOptions = {
  responsive: true,
};

public scatterChartData: ChartDataSets[] = [
  {
    data: [
      { x: 14.2, y: 215 },
      { x: 16.4, y: 325 },
      { x: 11.9, y: 185 },
      { x: 15.2, y: 332 },
      { x: 18.5, y: 406 },
      { x: 22.1, y: 522 },
      { x: 19.4, y: 412 },
      { x: 25.1, y: 614 },
      { x: 23.4, y: 544 },
      { x: 18.1, y: 421 },
    ],
    label: 'Icecream sales vs Temperature',
    pointRadius: 10,
  },
];
public scatterChartType: ChartType = 'scatter';



}
