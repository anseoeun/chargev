<template>
  <div class="usage-history">
    <div class="container-calendar">
        <div class="calendar-select">
          <button class="prev" @click="calendar.previous()">이전</button>
            <select id="month" @change="calendar.jump()"></select>
            <select id="year" @change="calendar.jump()"></select>       
          <button class="next" @click="calendar.next()">다음</button>
        </div>

        <div class="table-calendar">
            <table id="calendar" data-lang="en">
                <thead id="thead-month"></thead>
                <tbody id="calendar-body"></tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// Vue.prototype.$EventBus = new Vue();
// import EventBus from '@/js/EventBus';
import CalendarJs from "@/js/Calendar"; // 

export default {
  name: 'Calendar',
  components: {
    //CalendarJs
  },  
  data() {
    return {
      calendar: '',
      paymentData: {
          "2022-3-20": "6,000",
          "2022-3-25": "6,000",
          "2022-3-26": "10,560",
          "2022-3-27": "55,010",
          "2022-3-28": "13,450",
          "2022-3-29": "13,450",
          "2022-3-30": "13,450",
          "2022-3-31": "13,450",
          "2022-4-1": "10,000",
          "2022-4-2": "10,000",
          "2022-4-3": "23,760",
          "2022-4-4": "6,000",
          "2022-4-5": "16,000",
          "2022-4-6": "60,000",
          "2022-4-7": "58,000",
      }
    }
  },
  mounted(){

      this.calendar = CalendarJs(this.paymentData)
  },
}
</script>
