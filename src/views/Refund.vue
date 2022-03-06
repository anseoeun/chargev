<template>
  <div class="contents">
    <div class="refund-wrap">
      <h2 class="tit-type1">환불문의</h2>
      <!-- 환불 항목 -->
      <div class="shadow-box">
        <h3 class="tit-type2">환불 항목 <div class="right"><button v-if="selectedRefun" class="c-gray" @click="selectedRefun = ''">수정</button></div></h3>
        <div v-if="!selectedRefun" class="box-list">
          <ul>
            <li v-for="(item, index) in refundList" :key="index"><button v-html="item" @click="selectedRefun = item"></button></li>
          </ul>
        </div>
        <div v-if="selectedRefun" class="grid-list">
            <div class="row">
                <div class="tit">항목</div>
                <div class="text">{{ selectedRefun }}</div>
            </div>
        </div>
      </div>
      
      <!-- 결제일 선택 -->
      <div class="shadow-box">
        <h3 class="tit-type2">결제일 선택</h3>
        <div class="calendar-wrap">
          <div class="calendar-select">
              <button class="prev" @click="calendarData(-1)"><Icon type="arr-left" /></button>
              <div class="select">
                <select @change="dateJump($event, month)">
                  <option v-for="(item, index) in yearList" :key="index" :value="item" :selected="item === year">{{ item }}년</option>
                </select>
                <select @change="dateJump(year, $event)">
                  <option v-for="(item, index) in monthList" :key="index" :value="item" :selected="item === month">{{ item }}월</option>
                </select>
              </div>
              <button class="next" @click="calendarData(1)"><Icon type="arr-right" /></button>
          </div>        
          <div class="table-calendar">
            <table>
              <thead>
                <tr>
                  <th v-for="day in days" :key="day" scope="col">{{ day }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for=" (date, idx) in dates" :key="idx">
                  <td v-for="(day, secondIdx) in date" :key="secondIdx" :class="{ 'today': isToday(year, month, day)}">
                    <template v-if="!(idx === 0 && day >= lastMonthStart) && !(dates.length - 1 === idx && nextMonthStart > day)">
                      <template v-if="!setPayDate(year, month, day)"><div class="date">{{ day }}</div><div class="price">&nbsp;</div></template>
                      <button v-else class="btn-payment" :class="{ 'on': isSelected(year, month, day)}" @click="setSelected(year, month, day)">
                        <div class="date">{{ day }}</div>
                        <div class="price">
                          {{ setPayDate(year, month, day) }}
                        </div>
                      </button>
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>      

      <!-- 결제건 선택 -->
      <div class="shadow-box">
        <h3 class="tit-type2">결제건 선택</h3>
        <div class="grid-list">
            <div class="row">
                <div class="tit">선택</div>
                <div class="text">2건</div>
            </div>
        </div>
        <button class="btn-type1 st1">문의하기</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Refund',
  components: {
    
  },
  data(){
    return {
      //환불문의 
      selectedRefun: '',
      refundList: ['결제 후<br>미충전', '선불상품', '기타'],

      //결제일 선택
      yearList: Array.from({length: 80}, (v, i) => i + (2048 - 70)),
      monthList: Array.from({length: 12}, (v, i) => i + 1),
      isOptionsShow: false,
      days: [ '일', '월', '화', '수', '목', '금', '토', ],
      dates: [],
      currentYear: 0,
      currentMonth: 0,
      year: 0,
      month: 0,
      lastMonthStart: 0,
      nextMonthStart: 0,
      today: 0,
      timeList : ['10:00', '13:00', '14:00', '16:00'],
      selectedDate: '',
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
  created() {
    const date = new Date()
    this.currentYear = date.getFullYear() // 이하 현재 년, 월 가지고 있기
    this.currentMonth = date.getMonth() + 1
    this.year = this.currentYear
    this.month = this.currentMonth
    this.today = date.getDate() // 오늘 날짜
    this.calendarData()
  },  
  mounted(){
      // this.calendar = CalendarJs.call(this, this.paymentData)
  },
  methods: {
    calendarData(arg) { // 인자를 추가
      if (arg < 0) { // -1이 들어오면 지난 달 달력으로 이동
        this.month -= 1
      } else if (arg === 1) { // 1이 들어오면 다음 달 달력으로 이동
        this.month += 1
      }
      if (this.month === 0) { // 작년 12월
        this.year -= 1
        this.month = 12
      } else if (this.month > 12) { // 내년 1월
        this.year += 1
        this.month = 1
      }
      const [ monthFirstDay, monthLastDate, lastMonthLastDate, ] = this.getFirstDayLastDate(this.year, this.month)
      this.dates = this.getMonthOfDays(
        monthFirstDay,
        monthLastDate,
        lastMonthLastDate,
      )
    },
    dateJump(year, month){
      this.year = year.currentTarget ? year.currentTarget.value :  year;
      this.month = month.currentTarget ? month.currentTarget.value : month;
      const [ monthFirstDay, monthLastDate, lastMonthLastDate, ] = this.getFirstDayLastDate(this.year, this.month)
      this.dates = this.getMonthOfDays(
        monthFirstDay,
        monthLastDate,
        lastMonthLastDate,
      )
    },
    getYearMonth(arg) {
      let currentYear = this.year
      let currentMonth = this.month
      let year = this.year
      let month = this.month
      if(arg !== undefined) {
        if (arg < 0) { // -1이 들어오면 지난 달 달력으로 이동
          month = currentMonth -= 1
        } else if (arg === 1) { // 1이 들어오면 다음 달 달력으로 이동
          month = currentMonth += 1
        }
        if (month === 0) { // 작년 12월
          year = currentYear -= 1
          month = currentMonth = 12
        } else if (month > 12) { // 내년 1월
          year = currentYear += 1
          month = currentMonth = 1
        }
      }
      month = month < 10 ? '0'+month : month
      return parseInt(year+''+ month)
    },
    getFirstDayLastDate(year, month) {
      const firstDay = new Date(year, month - 1, 1).getDay() // 이번 달 시작 요일
      const lastDate = new Date(year, month, 0).getDate() // 이번 달 마지막 날짜
      let lastYear = year
      let lastMonth = month - 1
      if (month === 1) {
        lastMonth = 12
        lastYear -= 1
      }
      const prevLastDate = new Date(lastYear, lastMonth, 0).getDate() // 지난 달 마지막 날짜
      return [firstDay, lastDate, prevLastDate]
    },
    getMonthOfDays( monthFirstDay, monthLastDate, prevMonthLastDate) {
      let day = 1
      let prevDay = (prevMonthLastDate - monthFirstDay) + 1
      const dates = []
      let weekOfDays = []
      while (day <= monthLastDate) {
        if (day === 1) {
          // 1일이 어느 요일인지에 따라 테이블에 그리기 위한 지난 셀의 날짜들을 구할 필요가 있다.
          for (let j = 0; j < monthFirstDay; j += 1) {
            if (j === 0) this.lastMonthStart = prevDay // 지난 달에서 제일 작은 날짜
            weekOfDays.push(prevDay)
            prevDay += 1
          }
        }
        weekOfDays.push(day)
        if (weekOfDays.length === 7) {
          // 일주일 채우면
          dates.push(weekOfDays)
          weekOfDays = [] // 초기화
        }
        day += 1
      }
      const len = weekOfDays.length
      if (len > 0 && len < 7) {
        for (let k = 1; k <= 7 - len; k += 1) {
          weekOfDays.push(k)
        }
      }
      if (weekOfDays.length > 0) dates.push(weekOfDays) // 남은 날짜 추가
      this.nextMonthStart = weekOfDays[0] // 이번 달 마지막 주에서 제일 작은 날짜
      return dates
    },
    // setDate(year, month, day, time) {
    //   this.selectedDate.date = year+'-'+month+'-'+day
    //   this.selectedDate.time =  time
    //   this.setSelectedDriving(this.selectedDate)
    //   this.showChange()
    // },
    isToday(year, month, day){
      if(day === this.today && month === this.currentMonth && year === this.currentYear){
        return true
      }else{
        return false
      }
    },
    isSelected(year, month, day){
      return this.selectedDate === year+'-'+ month+'-'+ day ? true : false
    },
    setSelected(year, month, day){
      this.selectedDate = year+'-'+ month+'-'+ day;
    },
    setPayDate(year, month, day){
      return this.paymentData[year+'-'+ month+'-'+ day] !== undefined ? this.paymentData[year+'-'+ month+'-'+ day] : false
    },
    // showPayment(e){
    //   const td = document.querySelectorAll('.btn-payment')
    //   td.forEach((el)=>{
    //     el.classList.remove('on')
    //   });
    //   e.currentTarget.classList.add('on');
    // }
  }
}
</script>
