<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="charge-wrap">
                <!-- 충전소 -->
                <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-station')">
                  <Icon type="arr-bottom" />
                  <h2 class="tit-type1">충전소</h2>
                </button>
                <div id="slide-station">
                  <div class="charge-station">
                    <div class="row">
                      <div class="cell">
                        <p class="place-tit">서울시 송파구<br />롯데타워 지하2층</p>
                      </div>
                      <div class="cell right">
                        <div class="company">차지비</div>
                        <div class="status">충전가능</div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-info-list">
                    <div class="row">
                      <div class="cell label">주소</div>
                      <div class="cell">서울시 송파구 올림픽로 300<br />지하 2층 R5 구역</div>
                      <div class="cell right">
                        <router-link to="/" class="btn-map-pos"><Icon type="map-pos" /></router-link>
                      </div>
                    </div>
                    <div class="row">
                      <div class="cell label">완속</div>
                      <div class="cell">10/24</div>
                    </div>
                    <div class="row">
                      <div class="cell label">급속</div>
                      <div class="cell">1/2</div>
                    </div>
                    <div class="row">
                      <div class="cell label">운영시간</div>
                      <div class="cell">00:00 ~ 24:00</div>
                    </div>
                  </div>
                </div>
                <!-- 차트 -->
                <Chart />

                <!-- 충전사업자 -->
                <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-buisnessman')">
                  <Icon type="arr-bottom" />
                  <h2 class="tit-type1">충전사업자</h2>
                </button>
                <div id="slide-buisnessman">
                  <div class="grid-info-list">
                    <div class="row">
                      <div class="cell label">사업자명</div>
                      <div class="cell">차지비</div>
                    </div>
                    <div class="row">
                      <div class="cell label">문의</div>
                      <div class="cell">1600-4047</div>
                    </div>
                  </div>
                </div>


              <!-- 충전기 -->
              <h2 class="tit-type1">충전기</h2>
                <ChargeList 
                  :data="chargeList"
                  @charge="btmLayer.PopCharge = true;timeSetType = 'charge'"
                  @reserve="btmLayer.PopCharge = true;timeSetType = 'reserve'"
                />
            </div>
          </splide-slide>
      </template>
    </Carousel>


    <!-- 충전소 -->
    <PopCharge :visible="btmLayer.PopCharge" :timeSetType="timeSetType" @close="btmLayer.PopCharge = false"/>
  </div>
</template>

<script>
import Chart from '@/views/common/Chart'
import ChargeList from '@/views/common/ChargeList'
import PopCharge from '@/views/PopCharge'
export default {
  components:{
    Chart,
    ChargeList,
    PopCharge
  },
  data(){
    return{
      chargeList: [
        {
          'number': '200130001',
          'km': '279',
          'status': '충전가능',
          'speed': '완속',
          'etc': 'DC콤보',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'number': '200130001',
          'km': '279',
          'status': '충전가능',
          'speed': '완속',
          'etc': 'DC콤보',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'number': '200130001',
          'km': '279',
          'status': '충전가능',
          'speed': '완속',
          'etc': 'DC콤보',
          tag: [
            '혼잡함', '할인중'
          ],
        },
      ],
      timeSetType:'',
      
      options: {
        perPage: 1,
        perMove: 1,
        destroy: true
      },
      currentPage: 0,
      btmLayer:{
        PopChargeSearch: false,
        PopCharge: false
      },      
    }
  },
}
</script>
