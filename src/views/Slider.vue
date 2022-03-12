<template>
  <div class="notice">
    <div id=container>


      <div id=slider></div>
      <div class="date"></div>


    </div>
    <br>
    <br>
    <br>
    <span>Converted values</span>
    <div id="leftvalue">

    </div>
    <div id="rightvalue">

    </div>

    <br>
    <br>
    <br>
    <span>Actual values</span>
    <div id="valueleft">

    </div>
    <div id="valueright">

    </div>

  </div>
</template>

<script>
import nouislider from '../js/nouislider.min.js'

export default {
  components: {

  },
  data() {
    return {

    }
  },
  mounted(){

  function setDate(value){
    let d = new Date('2022-03-31');
    let sel_day = +value; 
    d.setDate(d.getDate() + sel_day );

    let year    = d.getFullYear();
    let month   = ('0' + (d.getMonth() +  1 )).slice(-2);
    let day     = ('0' + d.getDate()).slice(-2);

    document.querySelector('.date').textContent = year+"-"+month+"-"+day;
  }

  setDate(0);

  // document.querySelector('.date').textContent = currentMonth + '월' + currentDay + '일'
  
    
    var slider = document.getElementById('slider');
    var leftValue = document.getElementById('leftvalue');
    var rightValue = document.getElementById('rightvalue');

    slider =  noUiSlider.create(slider, {
      start: [480, 1020],
      connect: true,
      step: 15,
      // tooltips: [ true, true],
      range: {
        'min': 0,
        'max': 2880
      },
      pips: {
		    mode: 'steps',
        //values: [0, 720, 1439],
        filter: function(value, type){
          // console.log(type, value, value % 60);
          return (value % (60 * 4) === 0) ? 1 : (value % 60 === 0) ? 2 : 0;
        },
        //density: 2,
        format: {
          to: function ( value ) {
            if (value % (60 * 4) === 0) { 
            return moment().startOf('day').add(value, 'minutes').format('hh:mm A');
            }
            return '';
          },
          from: function ( value ) {
            return value;
          }
        }
	    },
      format: {
        to: function ( value ) {
          //return value + ',-';
          return moment().startOf('day').add(value, 'minutes').format('hh:mm A');
        },
        from: function ( value ) {
          return value;
        }
      }
    });

    var convertValuesToTime = function(values, handle, actual) {

      if (handle === 0) {

        leftValue.innerHTML =  Math.floor(actual[0]);
        valueleft.innerHTML = values[0];

        if(Math.floor(actual[0]) > 1440){
            setDate(1);
          }else{
            setDate(0);
          }
        return;
      };


      rightValue.innerHTML =  Math.floor(actual[1]);
      valueright.innerHTML = values[1];

  };

    slider.on('update', function(values, handle, actual) {
      convertValuesToTime(values, handle, actual);
    });

  },
  methods: {

  },
}
</script>
