<template>
<div class="charge-time-wrap">
    <!-- 충전기 -->
    <h2 v-if="timeSetType === 'reserve'" class="tit-type1">예약하기</h2>
    <h2 v-else-if="timeSetType === 'charge'" class="tit-type1">충전하기</h2>
    <div class="charge-place">
      <p class="place-tit">서울시 송파구<br />롯데타워 지하2층</p>
      <p class="txt">서울시 송파구 올림픽로 300</p>
    </div>
    <template v-if="timeSetType === 'reserve'">
      <!-- 충전시작시각 -->
      <h2 class="tit-type1">충전시작시각</h2>
      <div class="charge-time">
          <Carousel :data ="timeRangeList" :options="timeStartRangeOpt" class="time-slide" @onMoved="timeStartRangeMoved">
            <template slot-scope="props">
              <button>{{ props.item }}</button> 
            </template>
          </Carousel>
      </div>
      <!-- 충전시작시각 -->
      <h2 class="tit-type1">충전종료시각</h2>
      <div class="charge-time">
          <Carousel :data ="timeRangeList" :options="timeEndRangeOpt" class="time-slide" @onMoved="timeEndRangeMoved">
            <template slot-scope="props">
              <button>{{ props.item }}</button> 
            </template>
          </Carousel>
      </div>
      <!-- 충전시간 -->
      <h2 class="tit-type1">충전시간</h2>
      <div class="set-time">30분</div>

      <div class="btn-box align-c">
        <router-link to="/" class="btn-type1 st2 inbl">충전 예약</router-link>
      </div>      
    </template>
    
    <template v-else-if="timeSetType === 'charge'">
      <!-- 충전시간 -->
      <h2 class="tit-type1">충전시간</h2>
      <div class="charge-time">
          <Carousel :data ="timeList" :options="timeOpt" class="time-slide" @onMoved="timeMoved">
            <template slot-scope="props">
              <button>{{ props.item }}분</button>
            </template>
          </Carousel>
      </div>
      <div class="btn-box align-c">
        <router-link to="/" class="btn-type1 st2 inbl">충전 시작</router-link>
      </div>
    </template>
</div>
</template>

<script>
export default {
  props:{
    timeSetType:{
      type: String,
      default: ''
    }
  },
  data(){
    return {
      timeOpt: {
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
      timeEndRangeOpt: {
          perPage  : 3,
          focus    : 'center',
          trimSpace: false,
          pagination: false,
          start: 0
      },
      time:'30',
      timeStart:'09:00',
      timeEnd:'11:10',
      timeList: [
        '30',
        '40',
        '50',
        '60',
        '70',
        '80',
        '90',
        '100',
      ],
      // timeRange:[]
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
    }
  },
  methods:{
    timeMoved(slider, index){
      this.time = this.timeList[index]
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
