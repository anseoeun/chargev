<template>
  <div class="contents">
    <div class="custom-charge-wrap">
      <div class="custom-charge-header">
        <h2 class="tit-type3">맞춤 충전</h2>
        <p class="text-type1">시간을 설정하면<br>예약이 가능한 충전기를 확인할 수 있습니다.</p>
      </div>

      <!-- 예약시간 -->
      <div class="shadow-box">
        <h3 class="tit-type4">예약시간<button class="btn-info"><Icon type="info"/></button></h3>
                  <!-- :pipsy = "{ 
          mode: 'range', 
          density: 3
          tooltips
        }" -->
         <veeno
          ref="slider"
          @update="updateForm"
          :handles="[startTime, endTime]"
          connect
          :range = "{ 
            'min': 0, 
            'max': 2880 
          }" 
        />
        <div class="date">{{ chargeDate }}</div>

        <input type="number" v-model="form.form1" @input="updateSlider">
        <input type="number" v-model="form.form2" @input="updateSlider">
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
        form: {
            // upper_temp: 20,
            form1: 2000,
            // upper_warning_temp: 30,
            form2: 2650,
        },
        chargeDate: new Date('2022-03-31'),
        startTime: this.changeValue('05:30'),
        endTime: this.changeValue('32:20')
    }
  },
   mounted(){

  },
  methods:{
    changeTime(num){
      var myNum = parseInt(num, 10);
      var hours   = Math.floor(myNum / 3600);
      var minutes = Math.floor((myNum - ( hours * 3600)) / 60);
      var seconds = myNum - (hours * 3600) - (minutes * 60);

      if(minutes >= 24){
        this.setDate(1);
        minutes = minutes - 24
      }else{
        this.setDate(0);
      }
      
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return minutes+':'+seconds;
    },
    changeValue(num){
      let min = num.split(':')[0] * 60;
      let sec = num.split(':')[1]
      console.log(min);
      console.log(sec);
      console.log();
      return parseInt(min) + parseInt(sec);
    },
    updateSlider () {
      const newHandles = [
        this.form.form1,
        this.form.form2
      ]

      this.$refs.slider.$el.noUiSlider.set(newHandles);
    },
    updateForm(event) {
      console.log(this.changeTime(event.values[0]));
      console.log(this.changeTime(event.values[1]));
      this.form.form1 = event.values[0];
      this.form.form2 = event.values[1];
      // this.form.upper_temp = positions[2];
      // this.form.upper_warning_temp = positions[3];
    },    
    setDate(value){
      let d = new Date();
      let sel_day = +value; 
      d.setDate(d.getDate() + sel_day );

      // let year    = d.getFullYear();
      let month   = d.getMonth() +  1;
      let day     = d.getDate();

      this.chargeDate = month+"월 "+day+"일";
    }  
  }
}
</script>
