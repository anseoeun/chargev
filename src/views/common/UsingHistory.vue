<template>
    <div class="using-history">
        <div class="calendar">
          <!-- year -->
          <Carousel :data ="year" :options="yearOpt" class="year-slide">
            <template slot-scope="props">
              <button :class="{on:props.item == selectedCal.year}" @click="setYear(props.item)">{{ props.item }}년</button>
            </template>
          </Carousel>
          <!-- month -->
          <Carousel :data ="month" :options="monthOpt" :key="selectedCal.year" class="month-slide">
            <template slot-scope="props">
              <button :class="{on:props.item == selectedCal.month}" @click="setMonth(props.item)">{{ props.item }}월</button>
            </template>
          </Carousel>
          <!-- date -->
          <Carousel :data ="date[selectedCal.month]" :options="dateOpt" :key="selectedCal.month" class="date-slide">
            <template slot-scope="props">
              <div :class="{on:selectedCal.year === fixedCal.year && selectedCal.month === fixedCal.month && props.item == fixedCal.date}" class="days">
                <button @click="setDate(props.item)">
                    <!-- {{ props.item -1 }} -->
                  <div class="date-day">
                    <div class="day">
                      {{ days[selectedCal.month][props.item - 1] }}
                    </div>
                    <div class="date">
                      {{ date[selectedCal.month][props.item - 1] }}
                    </div>
                  </div>
                  <div class="account">
                    {{ dayData[selectedCal.month - 1][props.item -1] }}
                  </div>
                </button>
              </div>
            </template>
          </Carousel>
        </div>
        <ul class="history-list">
          <li v-for="(item, index) in historyList" :key="index">
            <button class="box" :class="{on: item.checked}" @click="item.checked = true;$emit('detailUsingHistory')">
              <Icon type="arr-right" />
              <div class="t-wrap">
                <div class="row">
                  <div class="cell tit"><b>차지비</b>
                    <div v-if="item.status === 'error-type1'" class="c-green">잔액부족<br />미결제</div>
                    <div v-if="item.status === 'normal'">정상이용</div>
                  </div>
                  <div class="cell">
                    <p>{{ item.addr }}</p>
                    <p><b class="price">{{ item.price }}원</b> {{ item.method }} 결제</p>
                    <p class="thin">{{ item.date }}</p>
                  </div>
                </div>
              </div>
            </button>
          </li>
        </ul>
    </div>
</template>

<script>

export default {
  data(){
    return{
      year: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      month: [],
      date: [],
      days:  [],
      dayData: [
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
        ['', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '', '55,010', '13,450', '', '3,960', '6,000', '', '3,960', '55,010'],
      ],
      fixedCal: {
        year: 0,
        month: 0,
        date: 0
      },
      selectedCal: {
        year: 0,
        month: 0,
        date: 0
      },
      yearOpt: {
        pagination: false,
        perPage: 4,
        start: 7
      },
      monthOpt: {
        perPage: 6,
      },
      dateOpt: {
        perPage: 7,
        perMove:1
      },
      historyList: [
        {
          addr:'서울시 송파구',
          status: 'normal',
          price:'9,010',
          method:'충전포인트',
          date:'2021-11-03 02:55:23',
          checked: true,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'error-type1',
          price:'13,450',
          method:'신용카드',
          date:'2021-11-02 15:05:02',
          checked: false,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'normal',
          price:'9,010',
          method:'충전포인트',
          date:'2021-11-03 02:55:23',
          checked: false,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'error-type1',
          price:'13,450',
          method:'신용카드',
          date:'2021-11-02 15:05:02',
          checked: false,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'error-type1',
          price:'13,450',
          method:'신용카드',
          date:'2021-11-02 15:05:02',
          checked: false,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'normal',
          price:'9,010',
          method:'충전포인트',
          date:'2021-11-03 02:55:23',
          checked: false,
        },
        {
          addr:'서울시 송파구 롯데타워지하4층 완속#1',
          status: 'error-type1',
          price:'13,450',
          method:'신용카드',
          date:'2021-11-02 15:05:02',
          checked: false,
        },
      ],
    }
  },
  created(){
    this.setToday();
    this.showYear(this.selectedCal.year)
  },  
  methods: {
    setToday(){
      let today = new Date(); 

      this.selectedCal.year = today.getFullYear();
      this.selectedCal.month = today.getMonth() + 1;
      this.selectedCal.date = today.getDate();  

      this.fixedCal.year = today.getFullYear();
      this.fixedCal.month = today.getMonth() + 1;
      this.fixedCal.date = today.getDate();    
    },
    showYear(y) {
      let month = [];
      let date = {};
      let days = {};
      let day = ['일', '월', '화', '수', '목', '금', '토'];

      var d1, d2 = y+(y-1-(y-1)%4)/4-(y-1-(y-1)%100)/100+(y-1-(y-1)%400)/400;
      for (let m = 1; m < 13; m++) {
          d1 = d2%7;
          d2 = d1+(m*9-m*9%8)/8%2+(m==2?y%4||y%100==0&&y%400?28:29:30);
          month.push(m)
          date[m] = []
          days[m] = []
          let daynum = 0
          for (let i = 0; i < 42; i++) {
              if(i%7==0) daynum = 0
              if (i < d1 || i >= d2) ''
              else {
                 days[m].push(day[daynum])
                 date[m].push((i+1-d1))
              }
              
              daynum += 1
          }
      }
      this.month = month;
      this.date = date;
      this.days = days;

      this.monthOpt.start = this.selectedCal.month -4;
      this.dateOpt.start = this.selectedCal.date - 5;
    },
    setYear(year){
      this.selectedCal.year= year;
      this.showYear(this.selectedCal.year)
    },
    setMonth(month){
      this.selectedCal.month = month;
    },
    setDate(date){
      this.selectedCal.date = date;
      this.fixedCal.year = this.selectedCal.year;
      this.fixedCal.month = this.selectedCal.month;
      this.fixedCal.date = date;
    }
  }
}
</script>
