import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
      data:{
          type: Object,
          default: {},
      },
  },
  mounted() {
    this.renderChart(
      this.data,
      { responsive: true, maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          callbacks: {
            label: function(tooltipItem, data) {
              var label = data.labels[tooltipItem.index];
              var val = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return label + ':' + val + ' dd(' + (100 * val / 130).toFixed(2) + '%)';
            }
          }
    
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 300,
              stepSize: 100,
              reverse: false,
              beginAtZero: true
            },
            grid:{ display: false,}
          }],
          xAxes: [{
            grid:{ display: false,}
          }]
        },
      }
    );
  }
};
