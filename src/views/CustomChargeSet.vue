<template>
  <div class="contents">
    <div class="custom-charge-wrap">
      <div class="custom-charge-header">
        <h2 class="tit-type3">맞춤 충전</h2>
        <p class="text-type1">시간을 설정하면<br>예약이 가능한 충전기를 확인할 수 있습니다.</p>
      </div>
      <div class="charge-place-info">
        <button class="btn-favorite"><Icon type="favorite" /></button>
        <strong class="tit">서울시 송파구 롯데타워지하2층 완속#1</strong>
        <p class="txt">서울시 송파구 올림픽로 300</p>
        <div class="tag">
          <span>혼잡함</span>
        </div>
      </div>

      <!-- 예약시간 -->
      <div class="shadow-box">
        <h3 class="tit-type4">예약시간<button class="btn-info"><Icon type="info"/></button></h3>
         <div class="reserve-time-set">
           <div class="date-time">
             <div class="start">
               <div class="date">{{ startDate }}</div>
               <div class="time">{{ startTime }}</div>
             </div>
             <div class="end">
               <div class="date">{{ endDate }}</div>
               <div class="time">{{ endTime }}</div>               
             </div>
           </div>
           <div class="time-slider">
             <veeno
              ref="slider"
              @update="update"
              :handles="[startTimeVal, endTimeVal]"
              connect
              :range = "{ 'min': 0, 'max': 2880 }"
              />
              <div class="index">
                <span class="start">00:00</span>
                <span class="date">{{ today }}</span>
                <span class="end">24:00 </span>
              </div>
           </div>
         </div>
      </div>
    </div>

  </div>
</template> 

<script>

import veeno from 'veeno';
import 'nouislider/distribute/nouislider.min.css';
export default {
  components: {
    veeno
  },
  data(){
    return{
        startDate: this.setDate(0),
        endDate: this.setDate(1),
        startTime: '05:30',
        endTime: '32:20',
        today: this.setDate(0)
    }
  },
  computed:{
    startTimeVal(){
      return this.changeValue(this.startTime)
    },
    endTimeVal(){
      return this.changeValue(this.endTime)
    },
  },
   mounted(){

  },
  methods:{
    changeTime(handle, num){
      var myNum = parseInt(num, 10);
      var hours   = Math.floor(myNum / 3600);
      var minutes = Math.floor((myNum - ( hours * 3600)) / 60);
      var seconds = myNum - (hours * 3600) - (minutes * 60);

      if(minutes >= 24){
        this.setDate(1, handle);
        minutes = minutes - 24
      }else{
        this.setDate(0, handle);
      }
      
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}

      if(handle === 'start') this.startTime = minutes+':'+seconds
      else if(handle === 'end') this.endTime = minutes+':'+seconds

      return minutes+':'+seconds;
    },
    changeValue(num){
      let min = num.split(':')[0] * 60;
      let sec = num.split(':')[1]
      return parseInt(min) + parseInt(sec);
    },
    update(event) {
      this.changeTime('start', event.values[0]);
      this.changeTime('end', event.values[1]);
    },    
    setDate(value, handle){
      let d = new Date();
      let sel_day = +value; 
      d.setDate(d.getDate() + sel_day );

      // let year    = d.getFullYear();
      let month   = d.getMonth() +  1;
      let day     = d.getDate();
      
      if(handle === 'start') this.startDate = month+"월 "+day+"일";
      else if(handle === 'end') this.endDate = month+"월 "+day+"일";

      return  month+"월 "+day+"일";
    }  
  }
}
</script>
