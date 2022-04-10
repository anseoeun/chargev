<template>
<div class="charge-time-wrap">
    <!-- 충전기 -->
    <h2 class="tit-type1">충전기</h2>
    <div class="charge-place">
      <p class="place-tit">서울시 송파구<br />롯데타워 지하2층</p>
      <p class="txt">서울시 송파구 올림픽로 300</p>
    </div>

    <!-- 충전시간 -->
    <h2 class="tit-type1">충전시간</h2>
    <div class="charge-time">
        <Carousel :data ="time" :options="timeOpt" class="time-slide" @onMoved="slideMoved">
          <template slot-scope="props">
            <button>{{ props.item }}분</button>
          </template>
        </Carousel>
    </div>
    <div class="btn-box align-c">
      <router-link to="/" class="btn-type1 st2 inbl">충전 시작</router-link>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      timeOpt: {
          perPage  : 3,
          focus    : 'center',
          trimSpace: false,
          pagination: false
      },
      selectedTime:'30',
      time: [
        '30',
        '40',
        '50',
        '60',
        '70',
        '80',
        '90',
        '100',
      ]
    };
  },
  methods:{
    slideMoved(slider, index){
      this.selectedTime = this.time[index]
    }
  }
 
}
</script>
