<template>
  <div class="usage-history">
    <div class="container-calendar">
        <div class="calendar-select">
            <select id="month" @change="calendar.jump()"></select>
            <select id="year" @change="calendar.jump()"></select>       
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
      priceData: {
          "2022-2-7": "10,560",
          "2022-2-8": "55,010",
          "2022-2-9": "13,450",
          "2022-2-16": "10,000",
          "2022-2-25": "10,000",
          "2022-3-5": "23,760",
          "2022-3-10": "6,000",
          "2022-3-15": "6,000",
          "2022-3-20": "6,000",
          "2022-3-25": "6,000",
          "2022-4-15": "6,000",
      }
    }
  },
  mounted(){

      this.calendar = CalendarJs(this.priceData)
  },
}
</script>
