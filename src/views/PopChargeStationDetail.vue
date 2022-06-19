<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-charge">
      <template slot="content">
        <div class="cont-scroll">
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
                      <div class="cell">서울시 송파구 올림픽로 300<br />지하 2층 R5 구역</div>
                      <div class="cell right">
                        <div class="btn-menu-wrap">
                          <button class="btn-menu"><Icon type="map-pos2" /></button>
                          <button class="btn-menu" @click="checkIcon($event, 'favoriteChecked')"><Icon type="map-favorite" :class="{on: favoriteChecked}" /></button>
                        </div>
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
                  <!-- 차트 -->
                  <Chart />                  
                </div>

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
                <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-charger')">
                  <Icon type="arr-bottom" />
                  <h2 class="tit-type1">충전기</h2>
                </button>
                <div id="slide-charger">
                  <ChargeList 
                    :data="chargeList"
                    @charge="$emit('PopChargeTimeCharge');"
                    @reserve="$emit('PopChargeTimeReserve');"
                  />
                </div>
            </div>
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import Chart from '@/views/common/Chart'
import ChargeList from '@/views/common/ChargeList'
export default {
  components:{
    Chart,
    ChargeList
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
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
      favoriteChecked: false
    }
  }
}
</script>
