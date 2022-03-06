<template>
  <div class="contents">
    <div class="refund-wrap">
      <h2 class="tit-type1">환불문의</h2>
      <!-- 환불 항목 -->
      <div class="shadow-box">
        <h3 class="tit-type2">환불 항목 <div class="right"><button class="c-gray">수정</button></div></h3>

        
      </div>
      
      <!-- 결제일 선택 -->
      <div class="shadow-box">
        <h3 class="tit-type2">결제일 선택</h3>
          <div class="calendar-wrap">
            <div class="calendar-select">
                <button class="prev" @click="calendar.previous()"><Icon type="arr-left" /></button>
                <div class="select">
                  <select id="year" @change="calendar.jump()"></select>
                  <select id="month" @change="calendar.jump()"></select>
                </div>
                <button class="next" @click="calendar.next()"><Icon type="arr-right" /></button>
            </div>
{{ selectedDate }}
            <div class="table-calendar">
                <table id="calendar">
                    <thead id="thead-month"></thead>
                    <tbody id="calendar-body"></tbody>
                </table>
            </div>
        </div>
      </div>
      
      
    </div>

  </div>
</template>

<script>
import CalendarJs from "@/js/Calendar"; // 
export default {
  name: 'Refund',
  components: {
    
  },
  data(){
    return{
      calendar: '',
      selectedDate:'',
      paymentData: {
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
      },
    }
  },
  mounted(){
      this.calendar = CalendarJs.call(this, this.paymentData)
  },
  methods: {
    getDate(){
      console.log('getdate');
    }
  }
}
</script>
