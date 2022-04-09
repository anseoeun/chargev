<template>
  <div class="notice">
    테스트2222

<round-slider
  v-model="sliderValue"
  start-angle="315"
  end-angle="+270"
  line-cap="round"
  radius="120"
/>    

<round-slider v-model="sliderValue"
        editable-tooltip="false"
        :tooltip-format="formatter"
        min="0"
        max="360"        
        start-angle="90"
        :radius="radius"
        width="8"
        range-color="url(#slider1_range_grad)"
></round-slider>

<svg height="0" width="0">
      <defs>
        <linearGradient
          id="slider1_range_grad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            style="stop-color: rgb(255, 255, 0); stop-opacity: 1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(255, 0, 0); stop-opacity: 1"
          />
        </linearGradient>
      </defs>
    </svg>

      <!-- <round-slider
        slider-type="range"
        min="0"
        max="24"
        editable-tooltip="false"
        v-model="sliderValue"
        :tooltip-format="formatter"
      ></round-slider> -->


      <word-relay start-word="무지개"></word-relay>
        <!-- <word-relay start-word="무지개"></word-relay>
        <word-relay start-word="개나리"></word-relay> -->
        
      <BtmLayer :content="true">
        <template slot="content">
          dfsf
        </template>
      </BtmLayer>

      <div class="pin-setting">
        <div class="pin-num">{{ pin[0] }}</div>
        <div class="pin-num">{{ pin[1] }}</div>
        <div class="pin-num">{{ pin[2] }}</div>
        <div class="pin-num">{{ pin[3] }}</div>
      </div>

      <input type="number" v-model="pin" @change="setPin">


      <word-relay startWord="가나다"></word-relay>
  </div>
</template>

<script>
var Child = {
  props:{
    startWord : {
      type: String,
      default: ''
    }
  },
  template: '<div>{{ startWord }}</div>'
}

// import Vue from 'vue'
import RoundSlider from 'vue-round-slider'


export default {
  name: 'Notice',
  components: {
    RoundSlider,
    'word-relay': Child
  },
  data() {
    return {
      sliderValue: 60,
      radius: 80,
      complteChecked: true,
      pin: '',
    }
  },
  mounted(){
    setTimeout(()=>{
        this.radius = 180
    }, 500)   
  },
  methods: {
    formatter(e) {
      return e.value + "분";
    },
    setPin(){

    }
  },
}
</script>
