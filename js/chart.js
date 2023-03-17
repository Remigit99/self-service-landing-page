// Chart Js
// alert('chart.js')
const chart = document.querySelector('#chart').getContext('2d');

//Create a new chart instance

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'Total Applications',
                data: [ 6, 10, 12, 8, 2, 8, 7, 14, 16, 20, 35],
                backgroundColor: 'blue',
                borderWidth: 2
            },

            {
                label: 'Approved Loans',
                data: [ 5, 8, 7, 6, 2, 6, 7, 13, 14, 18, 30],
                borderColor: '#9AA3B2',
                borderWidth: 2
            },

        //     {
        //         fill: {
        //             target: 'origin',
        //             above: 'rgb(255, 0, 0)',
        //             below: 'rgb(0, 0, 255)'  
        //         }
        //     }    
        // ]


    },
    Option:{
        responsive : true
    }
})


// Apex Chart Js
        // var options = {
        //   series: [{
        //   name: 'Total Applications',
        //   data: [5, 8, 12, 15, 17, 20, 22, 18, 24, 20, 25, 26]
        // }, {
        //   name: 'Total Approved',
        //   data: [1, 4, 10, 12, 15, 16, 19, 15, 18, 19, 22, 24]
        // }],
        //   chart: {
        //   height: 250,
        //   type: 'area'
        // },
        // dataLabels: {
        //   enabled: false
        // },
        // stroke: {
        //   curve: 'smooth'
        // },
        // xaxis: {
        // //   type: 'month',
        //   categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Sep', 'Oct', 'Nov', 'Dec']
        // },
        // tooltip: {
        //   x: {
        //     // format: 'dd/MM/yy HH:mm'
        //   },
        // },
        // };

        // var chart = new ApexCharts(document.querySelector("#chartApex"), options);
        // chart.render();

              
        // var options = {
        //     series: [
        //     {
        //       name: 'South',
        //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //         min: 10,
        //         max: 60
        //       })
        //     },
        //     {
        //       name: 'North',
        //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //         min: 10,
        //         max: 20
        //       })
        //     },
        //     {
        //       name: 'Central',
        //       data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        //         min: 10,
        //         max: 15
        //       })
        //     }
        //   ],
        //     chart: {
        //     type: 'area',
        //     height: 350,
        //     stacked: true,
        //     events: {
        //       selection: function (chart, e) {
        //         console.log(new Date(e.xaxis.min))
        //       }
        //     },
        //   },
        //   colors: ['#008FFB', '#00E396', '#CED4DC'],
        //   dataLabels: {
        //     enabled: false
        //   },
        //   stroke: {
        //     curve: 'smooth'
        //   },
        //   fill: {
        //     type: 'gradient',
        //     gradient: {
        //       opacityFrom: 0.6,
        //       opacityTo: 0.8,
        //     }
        //   },
        //   legend: {
        //     position: 'top',
        //     horizontalAlign: 'left'
        //   },
        //   xaxis: {
        //     type: 'datetime'
        //   },
        //   };
  
        //   var chart = new ApexCharts(document.querySelector("#chart"), options);
        //   chart.render();
