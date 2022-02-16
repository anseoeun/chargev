<template>
  <div>
    <LineChart :data="chartData" />
  </div>
</template>

<script>
import LineChart from "@/js/LineChart"; // 
export default {
  name: "LineSample",
  components: {
    LineChart
  },  
  data() {
    return {
    chartData:{
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],  
        datasets: [
          {
            label: "Data One",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: '#A9CEFD',
            data: [40, 39, 10, 40, 39, 80, 40],
          },
          // {
          //   label: "Data Tne",
          //   backgroundColor: "#ff0000",
          //   data: [20, 19, 10, 50, 80, 80, 40]
          // }
        ]
      }
    };
  },
};
</script>
