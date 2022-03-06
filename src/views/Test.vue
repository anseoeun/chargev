<template>
  <div class="notice">
    테스트

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


      <div class="black-box">
        <router-link to="/" class="box">
          <Icon type="arr-right" />
          <span class="payco">
            <Icon type="payco" />
          </span>
         </router-link>
      </div>
      <br>
      <div class="black-box">
        <router-link to="/" class="box">
          <Icon type="arr-right" />
          <div class="check">
            <button @click="checkIcon">
              <Icon type="check" />
            </button>
          </div>
          <div class="t-wrap">
            <div class="row"><div class="cell">서울시 송파구 롯데타워지하4층 완속#1</div></div>
            <div class="row"><div class="cell"><b class="price">9,010원</b> 충전포인트 결제</div></div>
            <div class="row"><div class="cell">2021-11-02 15:05:02</div></div>
          </div>
         </router-link>
      </div>
      <br>
      <div class="black-box">
        <router-link to="/" class="box">
          <Icon type="arr-right" />
          <div class="t-wrap">
            <div class="row">
              <div class="cell tit"><b>차지비</b></div>
              <div class="cell">서울시 송파구 롯데타워지하4층 완속#1</div>
            </div>
            <div class="row">
              <div class="cell tit">
                <b class="c-red">잔액부족<br>미결제</b>
              </div>
              <div class="cell">
                <p><b class="price">9,010원</b> 충전포인트 결제</p>
                <p>2021-11-02 15:05:02</p>
              </div>
            </div>
          </div>
         </router-link>
      </div>
      <br>
      <div class="black-box">
        <router-link to="/" class="box">
          <Icon type="arr-right" />
           <div class="check w-sm">
            <button @click="checkIcon">
              <Icon type="check" />
            </button>
          </div>
          <div class="t-wrap">
            <div class="row">
              <div class="cell tit"><b>차지비</b></div>
              <div class="cell">서울시 송파구 롯데타워지하4층 완속#1</div>
            </div>
            <div class="row">
              <div class="cell tit">
                정상이용
              </div>
              <div class="cell">
                <p><b class="price">9,010원</b> 충전포인트 결제</p>
                <p>2021-11-02 15:05:02</p>
              </div>
            </div>
          </div>
         </router-link>
      </div>
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
  },
}
</script>
