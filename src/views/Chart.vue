<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div id="line-chart"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  components: {
    // d3
  },  
  data() {
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
      // label: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00 ']
      label: [],
      now: 3,
    };
  },
  mounted(){
    for(let i=0; i<=24; i++){
       let time = i.length <= 1 ? '0'+i+':00' : i+':00'
       if(i == 24) time = " 00:00 "
      this.$set(this.label, i, time)
    }

    function unit(num){
      let size = 1;
      if(window.innerWidth > 375){
        // size = (window.innerWidth - 375) / 200
        size = 1
      }else if(window.innerWidth == 375){
        size = 1
      }else{
        // size = (375 - window.innerWidth) / 200
        size = 1
      }
      return num * size
    }

    // function unit2(num){
    //   let size = 1;
    //   if(window.innerWidth > 375){
    //     // size = (window.innerWidth - 375) / 200
    //     size = 2
    //   }else if(window.innerWidth == 375){
    //     size = 1
    //   }else{
    //     // size = (375 - window.innerWidth) / 200
    //     size = 1
    //   }
    //   return num * size
    // }

let h = window.innerWidth / 12

let margin = {top: unit(30), right: unit(15), bottom: unit(10), left: unit(15)}
  , scale = 1
  , width = window.innerWidth - unit(30) 
  , height = h; 
console.log(scale-1)
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

let svg = d3.select("#line-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("style", "font-size:"+unit(10)+"px")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
  svg.append("path")
      .datum(this.dataset) 
      .attr("class", "line") 
      .attr("d", line) 
      .attr('stroke', '#5A5B5C')
      .attr('fill', 'none')

  let num = 0
  const tick = svg.append('g')
    .attr('transform', `translate(0, ${height - unit(5)})`)
    .call(d3.axisBottom(xScale)) 

  tick
    .selectAll('.tick text')
    .attr("y", "5")
    .attr("color", "#000");

  tick
    .selectAll('line')
    .attr('stroke-dasharray', `3, 2`)
    .attr('stroke-width', '2')
    .attr('stroke', '#92FF44')
    .attr('y2', () => {
      num += 1
      if(num === this.now +1){
        return - height + yScale(this.dataset[num-1].y)
      }
    })

    //하단라인삭제
    document.querySelector('.domain').remove()

    //툴팁
    svg.append("path").data(this.dataset)
    .attr('d', 'M21 17L15 23L9 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1H27C28.1046 1 29 1.89543 29 3V15C29 16.1046 28.1046 17 27 17H21Z')
    .attr('stroke-width', '1')
    .attr('stroke', '#92FF44')
    .attr('fill', '#fff')
    .attr('class', 'tooltip')
    .attr("transform", "scale("+ scale +") translate(" + (xScale(this.label[this.now]) - unit(0)) + "," +  (yScale(this.dataset[this.now].y) - unit(0)) + ")");

    svg.append("text").data(this.dataset)
    .attr("transform", "translate(" + (xScale(this.label[this.now]) - unit(8)) + "," +  (yScale(this.dataset[this.now].y) - unit(12))+ ")")
    .attr('fill', '#5A5B5C')
    .text(function() { return '지금'; });
  }
};
</script>
<style lang="scss">
  // #line-chart .tick:not(:nth-child(4n+1)) text{display:none;}

</style>