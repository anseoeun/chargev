<template>
    <div class="charge-chart">
      <div id="line-chart" ref="linechart" style="width:311px;" :key="key"></div>
    </div>
</template>

<script>
import * as d3 from "d3";
export default {
  data(){
    return {
      dataset: [
        {y: 3.889786032225153},
        {y: 4.889786032225153},
        {y: 4.889786032225153},
        {y: 6.889786032225153},
        {y: 8.534404314866695},
        {y: 8.534404314866695},
        {y: 8.534404314866695},
        {y: 8.034404314866695},
        {y: 7.25660562594731},
        {y: 7.25660562594731},
        {y: 8.25660562594731},
        {y: 9.25660562594731},
        {y: 9.25660562594731},
        {y: 10.336611687825538},
        {y: 8.336611687825538},
        {y: 8.336611687825538},
        {y: 5.051444580631277},
        {y: 5.051444580631277},
        {y: 7.051444580631277},
        {y: 7.051444580631277},
        {y: 8.051444580631277},
        {y: 6.051444580631277},
        {y: 4.051444580631277},
        {y: 3.051444580631277},
        {y: 3.051444580631277},
      ],
      label: [],
      now: 7,
      key:1
    };
  },

  mounted(){
    this.setLabel();
    this.drawChart();
  },
  methods: {
    setLabel(){
      for(let i=0; i<=24; i++){
        let time = i.length <= 1 ? '0'+i+':00' : i+':00'
        if(i == 0) time = "00:00"
        if(i == 24) time = " 00:00 "
        this.$set(this.label, i, time)
      }
    },
    drawChart(){
      // const chart = document.querySelector('#line-chart')
      const chart = this.$refs.linechart

      chart.style.transform = 'scale('+ scale()+')'
      let win;

      function scale(){
        win = window.innerWidth
        let per;
        if(win <= 720){
          per = ((326 - (686 - win)) / 345 * 100).toFixed(2)
          per = per === 1 ? per + 1 : per * 0.01 + 1
          chart.style.height = 90 + (90 * (per-1)) +'px'
          return per
        }else{
          chart.style.width = 326 + ((window.innerWidth - (622 + 60)) / 2) +'px'
          chart.style.height = 180 +'px'
          return per = 2
        }
      }

      let margin = {top: 30, right: 15, bottom: 10, left: 15}
        , width = win <= 720 ? parseInt(chart.style.width) - window.innerWidth * 0.07 : parseInt(chart.style.width) - 63
        , height = 50; 

      let xScale = d3.scalePoint()
          .domain(this.label) // input
          .range([0, width]); // output

      let yScale = d3.scaleLinear()
          .domain([0, 10])
          .range([height, 0]); 

      let line = d3.line()
          .x(function(d, i) { 
              return xScale(this.label[i]);
          }.bind(this)) 
          .y(function(d) { return yScale(d.y); }) 
          .curve(d3.curveMonotoneX)

      // let svg = d3.select("#line-chart").append("svg")
      let svg = d3.select(chart).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("style", "font-size:10px")
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
          
      svg.append("path")
          .datum(this.dataset) 
          .attr("class", "line") 
          .attr("d", line) 
          .attr('stroke', '#fff')
          .attr('fill', 'none')

      let num = 0
      const tick = svg.append('g')
        .attr('transform', `translate(0, ${height - 5})`)
        .call(d3.axisBottom(xScale)) 

      tick
        .selectAll('.tick text')
        .attr("y", "5")
        .attr('fill', '#fff')

      tick
        .selectAll('line')
        .attr('stroke-dasharray', `3, 2`)
        .attr('stroke-width', '2')
        .attr('stroke', '#92FF44')
        .attr('y2', () => {
          num += 1
          if(num === this.now + 1){
            return - height + yScale(this.dataset[num-1].y)
          }
        })

      document.querySelector('.domain').remove()

      svg.append("path").datum(this.dataset)
      .attr('d', 'M21 17L15 23L9 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H27C28.1046 1 29 1.89543 29 3V15C29 16.1046 28.1046 17 27 17H21Z')
      .attr('stroke-width', '1')
      .attr('stroke', '#92FF44')
      .attr("transform", "translate(" + (xScale(this.label[this.now]) - 15) + "," +  (yScale(this.dataset[this.now].y) - 25) + ")");

      svg.append("text").datum(this.dataset)
      .attr("transform", "translate(" + (xScale(this.label[this.now]) - 12) + "," +  (yScale(this.dataset[this.now].y) - 12.5)+ ")")
      .attr('fill', '#fff')
      .attr('style', 'font-size:9px')
      .text(function() { return 'NOW'; });
    }
  }  
}
</script>
<style>
  #line-chart .tick:not(:nth-child(4n+1)) text{display:none;}
</style>