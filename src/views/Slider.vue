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
 <veeno
        tooltips
        :handles="[2000, 2650]"
        connect
        :pipsy = "{ 
          mode: 'range', 
          density: 3
        }"
        :range = "{ 
          'min': 1300, 
          'max': 3250 
        }" 
      />
  </div>
</template>

<script>
// https://codesandbox.io/examples/package/veeno
// import noUiSlider from '../js/nouislider.min.js'
// import moment from '../js/moment.min.js'
import veeno from 'veeno';
import 'nouislider/distribute/nouislider.min.css';
export default {
  components: {
    veeno
  },
  data() {
    return {
      sliderValue: null
    };  
  },
  mounted(){


  },
  methods: {

  },
}
</script>
