<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="charge-wrap">
                <h2 class="tit-type1">충전대기중</h2>
                <div class="text-charge-status">충전중이 아닙니다.</div>

                <!-- 인근 충전소 -->
                <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-around')">
                  <Icon type="arr-bottom" />
                  <h2 class="tit-type1">인근 충전소</h2>
                </button>
                <div id="slide-around">
                  <ChargeSearchList
                    :data="chargeList"
                    @charge="btmLayer.PopCharge = true"
                  />
                </div>
                <!-- 즐겨찾기 -->
                <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-favorites')">
                  <Icon type="arr-bottom" />
                  <h2 class="tit-type1">즐겨찾기</h2>
                </button>
                <div id="slide-favorites">
                  <ChargeSearchList
                    :data="chargeList"
                    @charge="btmLayer.PopCharge = true"
                  />
                </div>
            </div>              
          </splide-slide>
          <splide-slide>
            <div class="charge-wrap">
                <h2 class="tit-type1">충전예약</h2>
                <div class="form-box-wrap">
                  <div class="form-box">
                      <div class="row">
                        <div class="input">
                            <Input type="text" placeholder="충전소 명 또는 주소 입력" />
                        </div>
                      </div>
                  </div>
                  <div class="btn-box">
                      <button class="btn-type1 st2" @click="btmLayer.PopChargeSearch = true">검색</button>
                  </div>
                </div>

                <!-- 인근 충전소 -->
                <button class="btn-toggle-slide on" @click="toggleSlide($event, '#slide-use')">
                  <Icon type="arr-bottom" />
                  <h2 class="tit-type1">기존 이용 이력</h2>
                </button>
                <div id="slide-use">
                  <ChargeSearchList
                    :data="chargeList"
                    @charge="btmLayer.PopCharge = true"
                  />
                </div>
            </div>              
          </splide-slide>
          <splide-slide>
            <div class="charge-wrap">
                <h2 class="tit-type1">즉시충전</h2>
                <div class="form-box-wrap">
                  <div class="form-box">
                      <div class="row">
                      <div class="input">
                          <Input type="text" placeholder="충전기 ID 입력" />
                      </div>
                      </div>
                  </div>
                  <div class="btn-box">
                      <button class="btn-type1 st2" @click="btmLayer.PopChargeTime = true">검색</button>
                  </div>
                </div>

                <!-- QR코드 인식 -->
                <h2 class="tit-type1">QR코드 인식</h2>
                <div class="qrcode">
                  <div class="qr" @click="btmLayer.PopChargeTime = true"></div>
                </div>
            </div>              
          </splide-slide>
      </template>
    </Carousel>

    <!-- 충전소 리스트 -->
    <PopChargeSearchList :visible="btmLayer.PopChargeSearch" @close="btmLayer.PopChargeSearch = false"/>
    <!-- 충전시간 -->
    <PopChargeTime :visible="btmLayer.PopChargeTime" timeSetType="charge" @close="btmLayer.PopChargeTime = false"/>    
  </div>
</template>

<script>
import ChargeSearchList from '@/views/common/ChargeSearchList'
import PopChargeSearchList from '@/views/PopChargeSearchList'
import PopChargeTime from '@/views/PopChargeTime'
export default {
  components:{
    ChargeSearchList,
    PopChargeSearchList,
    PopChargeTime
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
      },
      currentPage: 0,
      btmLayer:{
        PopChargeSearch: false,
        PopChargeTime: false        
      },      
    }
  },
}
</script>
