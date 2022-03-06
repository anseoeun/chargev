<template>
  <div class="contents">
    <div class="refund-wrap">
      <h2 class="tit-type1">환불문의</h2>
      <!-- 환불 항목 -->
      <div class="shadow-box">
        <h3 class="tit-type2">환불 항목 <div class="right"><button v-if="selectedRefun" class="c-gray" @click="init()">수정</button></div></h3>
        <div v-if="!selectedRefun.text" class="box-list">
          <ul>
            <li v-for="(item, index) in refundList" :key="index"><button v-html="item" @click="selectedRefun.text = item;selectedRefun.val = index"></button></li>
          </ul>
        </div>
        <div v-if="selectedRefun.text" class="grid-list">
            <div class="row">
                <div class="tit">항목</div>
                <div class="text" v-html="selectedRefun.text.replace('<br>', ' ')"></div>
            </div>
        </div>
      </div>
      <!-- 결제후 미충전 -->
      <template v-if="selectedRefun.val === 0">
        <!-- 결제일 선택 -->
        <div class="shadow-box">
          <h3 class="tit-type2">결제일 선택</h3>
          <div class="calendar-wrap">
            <div class="calendar-select">
                <button class="prev" @click="calendarData(-1)"><Icon type="arr-left" /></button>
                <div class="select">
                  <select class="st2" @change="dateJump($event, month)">
                    <option v-for="(item, index) in yearList" :key="index" :value="item" :selected="item === year">{{ item }}년</option>
                  </select>
                  <select class="st2" @change="dateJump(year, $event)">
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
        <div class="payment-select-box shadow-box">
          <h3 class="tit-type2">결제건 선택</h3>
          <template v-if="isPaymentList">
            <div class="grid-list">
                <div class="row">
                    <div class="tit">선택</div>
                    <div class="text">{{ paymentData.length }}건</div>
                </div>
            </div>
            <div class="blackbox-list">
              <div v-for="(item, index) in paymentData" :key="index" class="black-box">
                <router-link to="/" class="box">
                  <Icon type="arr-right" />
                  <div class="check w-sm">
                  <button  @click="checkIcon($event, 'paymentChecked', index)">
                    <Icon type="check" :class="{on: paymentChecked[index]}" />
                  </button>
                  </div>
                  <div class="t-wrap">
                    <div class="row">
                      <div class="cell tit"><b>차지비</b></div>
                      <div class="cell">{{ item.addr }}</div>
                    </div>
                    <div class="row">
                      <div class="cell tit">정상이용 </div>
                      <div class="cell">
                        <p><b class="price">{{ item.price }}원</b> {{ item.method }}</p>
                        <p>{{ item.time }}</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </template>
          <button class="btn-type1 st1" :disabled="!paymentChecked.includes(true)" @click="alertPop = true">문의하기</button>
        </div>
      </template>

      <!-- 선불상품 -->
      <!-- 충전권 선택 -->
      <template v-if="selectedRefun.val === 1">
        <div class="shadow-box">
          <h3 class="tit-type2">충전권 선택</h3>
          <div class="blackbox-list">
            <div v-for="(item, index) in chargeData" :key="index" class="black-box">
              <router-link to="/" class="box">
                <Icon type="arr-right" />
                <div class="check">
                  <button  @click="checkIcon($event, 'chargeChecked', index)">
                    <Icon type="check" :class="{on: chargeChecked[index]}" />
                  </button>
                </div>
                <div class="t-wrap">
                  <div class="row">
                    <div class="cell">{{ item.tit }}</div>
                  </div>
                  <div class="row">
                    <div class="cell">
                      <p><b class="price">{{ item.price }}원</b></p>
                      <p>{{ item.time }}</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <button v-if="!chargeSelected" :disabled="!chargeChecked.includes(true)" class="btn-type1 st1" @click="chargeSelected = true">선택완료</button>
        </div>
        <!-- 환불 사유 -->
        <div v-if="chargeSelected" class="shadow-box">
          <h3 class="tit-type2">환불 사유</h3>
          <div class="box-list">
            <ul>
              <li v-for="(item, index) in refundReasonList" :key="index" :class="{on : refundReasonCase === index}"><button v-html="item" @click="refundReasonCase = index"></button></li>
            </ul>
          </div>
          <div v-if="refundReasonCase !== ''" class="input-wrap">
            <input type="text">
          </div>
          <button :disabled="refundReasonCase === ''" class="btn-type1 st1">확인</button>
        </div>
      </template>

    </div>
    <!-- // refund-wrap -->

    <Alert :is-open="alertPop" @close="alertPop = false">      
        <template slot="header">모바일 충전권 등록</template>
        <template slot="body">
            모바일 충전권 등록이 완료되었습니다.
        </template>
    </Alert>
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
      selectedRefun: {
        text: '',
        val: '',
      },
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
      selectedDate: '',
      paymentDayData: {
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

      //결제건 선택
      paymentChecked: [],      
      isPaymentList: false,
      paymentData: [
        {
          addr: '서울시 송파구 롯데타워지하4층 완속#1',
          method: '충전포인트 결제',
          price: '9,010 ',
          time: '2021-11-02 15:05:02',
        },
        {
          addr: '서울시 송파구 롯데타워지하4층 완속#1',
          method: '충전포인트 결제',
          price: '9,010 ',
          time: '2021-11-02 15:05:02',
        },
      ],

      //충전권 선택
      chargeChecked: [],
      chargeSelected: false,
      chargeData: [
        {
          tit: '모바일 충전권',
          price: '9,010 ',
          time: '2021-10-01 ~ 2022-10-01',
        },
        {
          tit: '모바일 충전권',
          price: '9,010 ',
          time: '2021-10-01 ~ 2022-10-01',
        },
      ],
      refundReasonCase: '',
      refundReasonList: ['차지비<br>사용안함', '실수로 구매', '기타'],

      //팝업
      alertPop: false,
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

  methods: {
    init(){
      this.selectedRefun.text = ''
      this.selectedRefun.val = ''
    },

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
      this.isPaymentList = true;
    },
    setPayDate(year, month, day){
      return this.paymentDayData[year+'-'+ month+'-'+ day] !== undefined ? this.paymentDayData[year+'-'+ month+'-'+ day] : false
    },
  }
}
</script>
