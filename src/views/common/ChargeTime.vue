<template>
<div class="charge-time-wrap">
    <!-- 충전기 -->
    <h2 v-if="timeSetType === 'reserve'" class="tit-type1">예약하기</h2>
    <h2 v-else-if="timeSetType === 'charge'" class="tit-type1">충전하기</h2>
    <div class="charge-place">
      <p class="place-tit">서울시 송파구<br />롯데타워 지하2층</p>
      <p class="txt">서울시 송파구 올림픽로 300</p>
      <p class="number">200130001</p>
    </div>
    <template v-if="timeSetType === 'reserve'">
      <!-- 충전시작시각 -->
      <h2 class="tit-type1">충전시작시각</h2>
      <div class="charge-time" :style="{opacity:opacity}">
          <Carousel :data="timeRangeList" :options="timeStartRangeOpt" class="time-slide" @onMoved="timeStartRangeMoved">
            <template slot-scope="props">
              <button>{{ props.item }}</button> 
            </template>
          </Carousel>
      </div>
      <!-- 충전시간 -->
      <h2 class="tit-type1">충전시간</h2>
      <div class="charge-time" :style="{opacity:opacity}">
          <Carousel :data="timeHourList" :options="timeHourOpt" class="time-slide" @onMoved="timeHourMoved">
            <template slot-scope="props">
              <button>{{ props.item }}시간</button>
            </template>
          </Carousel>
          <Carousel :data="timeMinList" :options="timeMinOpt" class="time-slide" @onMoved="timeMinMoved">
            <template slot-scope="props">
              <button>{{ props.item }}분</button>
            </template>
          </Carousel>
      </div>
      <div class="btn-box align-c">
        <button class="btn-type1 st2 inbl">최대시간 설정</button>
      </div>      

      <!-- 충전시간 -->
      <h2 class="tit-type1">종료예상시간</h2>
      <div class="set-time">09:20</div>
      <!-- 예상 결제금액 -->
      <h2 class="tit-type1">예상 결제금액</h2>
      <div class="set-time">4,000원</div>

      <div class="btn-box align-c">
        <router-link to="/" class="btn-type1 st2 inbl">충전 예약</router-link>
      </div>      
    </template>
    
    <template v-else-if="timeSetType === 'charge'">
      <!-- 충전시간 -->
      <h2 class="tit-type1">충전시간</h2>
      <div class="charge-time" :style="{opacity:opacity}">
          <Carousel :data="timeHourList" :options="timeHourOpt" class="time-slide" @onMoved="timeHourMoved">
            <template slot-scope="props">
              <button>{{ props.item }}시간</button>
            </template>
          </Carousel>
          <Carousel :data="timeMinList" :options="timeMinOpt" class="time-slide" @onMoved="timeMinMoved">
            <template slot-scope="props">
              <button>{{ props.item }}분</button>
            </template>
          </Carousel>
      </div>
      <div class="btn-box align-c">
        <button class="btn-type1 st2 inbl">최대시간 설정</button>
      </div>      
      
      <!-- 예상 결제금액 -->
      <h2 class="tit-type1">예상 결제금액</h2>
      <div class="set-time">4,000원</div>
      <div class="btn-box align-c">
        <router-link to="/" class="btn-type1 st2 inbl">충전 시작</router-link>
      </div>
    </template>
</div>
</template>

<script>
export default {
  props:{
    opacity:{
      type: Number,
      default: 0
    },
    timeSetType:{
      type: String,
      default: ''
    }
  },
  data(){
    return {
      timeHour: 0,
      timeMin: 30,
      timeStart:'09:00',
      timeHourOpt: {
          perPage  : 3,
          focus    : 'center',
          trimSpace: false,
          pagination: false,
      },
      timeMinOpt: {
          perPage  : 3,
          focus    : 'center',
          trimSpace: false,
          pagination: false
      },
      timeStartRangeOpt: {
          perPage  : 3,
          focus    : 'center',
          trimSpace: false,
          pagination: false,
          start:54
      },
    };
  },
  computed:{
    setTime(){
      return this.timeStart - this.timeEnd
    },
    timeRangeList(){
      let timeArr = [];
      for(let i=0; i<=24; i++){
        let time = this.fillZero(2, i);
        for(let j=0; j<=5; j++){
          let min = j == 0 ? '00' : j*10;
          timeArr.push(time + ':' + min);
        }
      }      
      return timeArr;
    },
    timeHourList(){
      let timeArr = [];     
      for(let i=0; i<=24; i++){
        timeArr.push(i)
      }
      return timeArr;
    },
    timeMinList(){
      let timeArr = [];     
      for(let i=3; i<=10; i++){
        timeArr.push(i*10)
      }
      return timeArr;
    }
  },
  methods:{
    timeHourMoved(slider, index){
      this.timeHour = this.timeHourList[index]
    },
    timeMinMoved(slider, index){
      this.timeMin = this.timeMinList[index]
    },
    timeStartRangeMoved(slider, index){
      this.timeStart = this.timeRangeList[index]
    },
    timeEndRangeMoved(slider, index){
      this.timeEnd = this.timeRangeList[index]
    },
  }
 
}
</script>
