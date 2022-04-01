<template>
  <div class="contents">
    <div class="home-wrap">
      <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page parallel-slider">
        <template slot="content">
            <splide-slide>
                <div class="using-history">
                    <h2 class="tit-type1">이용기록</h2>
                    <div class="calendar expct">
                      <Carousel :data ="year" :options="yearOpt" class="year-slide">>
                        <template slot-scope="props">
                          <button :class="{on:props.item == selectedCal.year}" @click="selectedCal.year = props.item">{{ props.item }}년</button>
                        </template>
                      </Carousel>
                      <Carousel :data ="month" :options="monthOpt" class="month-slide">>
                        <template slot-scope="props">
                          <button :class="{on:props.item == selectedCal.month}" @click="selectedCal.month = props.item">{{ props.item }}월</button>
                        </template>
                      </Carousel>
                   

                      <div v-for="m in month" :key="m" class="month">
                        <div class="month"><button>{{ m }}</button></div>
                        <div class="days">
                          <div v-for="d in day[m]" :key="d" class="day">
                            <button>{{ d }}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </splide-slide>
            <splide-slide>
                <div class="charge-status">
                    <!-- 충전차량 -->
                    <h2 class="tit-type1">충전차량</h2>
                    <div class="desc">
                        <div class="space-text"><span>BMW</span><span>530e</span></div>
                        02보6596
                    </div>
                    <button class="btn-type1 st3">충전차량 설정</button>

                    <!-- 충전포인트 -->
                    <h2 class="tit-type1">충전포인트</h2>
                    <div class="desc">
                        <div class="point">360,000원</div>
                    </div>
                    <button class="btn-type1 st3">상세확인</button>
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
      year: [],
      month: [],
      day: [],
      btmLayer:{
        agency: false,
      },
      
      options: {
        perPage: 1,
        perMove: 1,
        arrows: false,
      },

      selectedCal:{
        year: '2022',
        month: '5',
      },
      yearOpt: {
        focus: 'center',
        autoWidth: true,
        arrows: false,
        pagination: false,
        perPage: 4,
        start: 0
      },
      monthOpt: {
        focus: 'center',
        type   : 'loop',
        // autoWidth: true,
        arrows: false,
        pagination: false,
        perPage: 5,
      },
      dayOpt: {
        focus: 'center',
        autoWidth: true,
        arrows: false,
        pagination: false,
        perPage: 1,
      },
      currentPage: 0,
      paging: new Array(6),
    }
  },
  created(){
    this.showYear(2022);

  },
  mounted(){
    var el = document.querySelector('.expct')
    el.addEventListener("touchstart", function(e){ e.stopPropagation() });

    console.log(this.month)
  },
  methods: {
    agencySelect(val){
      val ? this.agency = val : ''
      this.btmLayer.agency = false
    },
    showYear(y) {
      let year = [];
      let month = [];
      let day = {};

      for (let i = 0; i < 8; i++) {
          year.push(y-(7-i));
      }

      var d1, d2 = y+(y-1-(y-1)%4)/4-(y-1-(y-1)%100)/100+(y-1-(y-1)%400)/400;
      for (let m = 1; m < 13; m++) {
          d1 = d2%7;
          d2 = d1+(m*9-m*9%8)/8%2+(m==2?y%4||y%100==0&&y%400?28:29:30);
          month.push(m)
          day[m] = []
          for (let i = 0; i < 42; i++) {
              if (i < d1 || i >= d2) ''
              else  day[m].push((i+1-d1))
          }
      }
      this.year = year
      this.yearOpt.start = this.year.length - 1
      this.month = month
      this.monthOpt.start = 4
      this.day = day
    }    
  }
}
</script>
