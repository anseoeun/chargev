<template>
  <div class="contents">
    <div class="home-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider">
        <template slot="content">
            <splide-slide>
                <div class="charge-status">
                  <!-- 충전차량 -->
                  <h2 class="tit-type1">충전차량</h2>
                  <div class="desc">
                    <div class="space-text"><span>BMW</span><span>530e</span></div>
                    02보6596
                  </div>
                  <button class="btn-type1 st2">충전차량 설정</button>

                  <!-- 충전포인트 -->
                  <h2 class="tit-type1">충전포인트</h2>
                  <div class="desc">
                    <div class="point">360,000원</div>
                  </div>
                  <button class="btn-type1 st2">상세확인</button>
                </div>
            </splide-slide>          
            <splide-slide>
                <div class="using-history">
                    <h2 class="tit-type1">이용기록 </h2>
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
                      <li>
                        <router-link to="/" class="box">
                          <Icon type="arr-right" />
                          <div class="t-wrap">
                            <div class="row">
                              <div class="cell tit"><b>차지비</b></div>
                              <div class="cell">서울시 송파구 롯데타워지하4층 완속#1</div>
                            </div>
                            <div class="row">
                              <div class="cell tit">
                                <b class="c-red">잔액부족<br>미결제</b>
                              </div>
                              <div class="cell">
                                <p><b class="price">9,010원</b> 충전포인트 결제</p>
                                <p clas="thin">2021-11-02 15:05:02</p>
                              </div>
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                </div>
            </splide-slide>
        </template>
      </Carousel>
    </div>

    <!-- 팝업:통신사 선택 -->
    <AgencySelect :visible="btmLayer.agency" @close="agencySelect"/>

  </div>
</template>

<script>
import AgencySelect from '@/views/common/AgencySelect'
export default {
  components:{
    AgencySelect
  },
  data(){
    return{
      year: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
      // year: [],
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
      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
      },
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
        // autoWidth: true,
        arrows: false,
        pagination: false,
        perPage: 4,
        start: 7
      },
      monthOpt: {
        // type   : 'loop',
        arrows: false,
        perPage: 6,
      },
      dateOpt: {
        // type   : 'loop',
        arrows: false,
        perPage: 7,
        perMove:1
      },
      currentPage: 0,
      paging: new Array(6),
      btmLayer:{
        agency: false,
      },
    }
  },
  created(){
    this.setToday();
    this.showYear(this.selectedCal.year)
  },
  mounted(){
    // this.yearOpt.start = this.year.length - 1;
  },
  methods: {
    agencySelect(val){
      val ? this.agency = val : ''
      this.btmLayer.agency = false
    },
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
      // let year = [];
      let month = [];
      let date = {};
      let days = {};

      let day = ['일', '월', '화', '수', '목', '금', '토'];

      // for (let i = 0; i < 8; i++) {
      //     year.push(y-(7-i));
      // }
      // console.log(year);

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
      // this.year = year;
      this.month = month;
      this.date = date;
      this.days = days;

      this.monthOpt.start = this.selectedCal.month -4;
      this.dateOpt.start = this.selectedCal.date - 5;
    },
    setYear(year){
      this.selectedCal.year= year;
      this.showYear(this.selectedCal.year)
      // document.querySelector('.month-slide .splide__pagination li:nth-child(1) button').click()
      // document.querySelector('.date-slide .splide__pagination li:nth-child(1) button').click()
      // this.selectedCal.month = 1
      // this.selectedCal.date = 0
      
    },
    setMonth(month){
      this.selectedCal.month = month;
      // document.querySelector('.date-slide .splide__pagination li:nth-child(1) button').click()
      // this.selectedCal.date = 1
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
