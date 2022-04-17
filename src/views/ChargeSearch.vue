<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="charge-wrap">
                <!-- 충전소검색 -->
                <h2 class="tit-type1">충전소검색</h2>
                <div class="form-box-wrap">
                  <div class="form-box">
                      <div class="row">
                      <div class="input">
                          <input type="text" placeholder="충전소 명 또는 주소 입력">
                      </div>
                      </div>
                  </div>
                  <div class="btn-box">
                      <button class="btn-type1 st2" @click="btmLayer.PopChargeSearch = true">검색</button>
                  </div>
                </div>

                <!-- 기존 이용 충전소 -->
                <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-use')">
                  <Icon type="arr-bottom" />
                  <h2 class="tit-type1">기존 이용 충전소</h2>
                </button>
                <div id="slide-use">
                  <ChargeSearchList
                    :data="chargeList"
                  />
                </div>

                <!-- 인근 충전소 -->
                <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-around')">
                  <Icon type="arr-bottom" />
                  <h2 class="tit-type1">인근 충전소</h2>
                </button>
                <div id="slide-around">
                  <ChargeSearchList
                    :data="chargeList"
                  />
                </div>
            </div>
          </splide-slide>
      </template>
    </Carousel>

    <!-- 충전소 리스트 -->
    <PopChargeSearch :visible="btmLayer.PopChargeSearch" @close="btmLayer.PopChargeSearch = false"/>
  </div>
</template>

<script>
import ChargeSearchList from '@/views/common/ChargeSearchList'
import PopChargeSearch from '@/views/PopChargeSearch'
export default {
  components:{
    ChargeSearchList,
    PopChargeSearch,
  },
  data(){
    return{
       chargeList: [
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'addr2': '서울시 송파구 올림픽로 300<br />지하 2층 R5 구역',
          'status': '충전가능',
          'start': '269',
          'end': '279',
          'km': '100km',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'addr2': '서울시 송파구 올림픽로 300<br />지하 2층 R5 구역',
          'status': '충전가능',
          'start': '269',
          'end': '279',
          'km': '100km',
          tag: [
            '혼잡함', '할인중'
          ],
        },
      ],

      options: {
        perPage: 1,
        perMove: 1,
        destroy: true
      },
      currentPage: 0,
      btmLayer:{
        PopChargeSearch: false,
      },      
    }
  },
}
</script>
