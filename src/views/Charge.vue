<template>
  <div class="contents">
    <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
      <template slot="content">
          <splide-slide>
            <div class="charge-wrap">
                <h2 class="tit-type1">충전대기중</h2>
                <div class="charge-status-text">충전중이 아닙니다.</div>

                <!-- 인근 충전소 -->
                <h2 class="tit-type1">인근 충전소</h2>
                <ChargeSearchList 
                  :data="chargeList"
                  :chargeType="['charge', 'reserve']"
                  @charge="btmLayer.PopCharge = true"
                />
            </div>              
          </splide-slide>
          <splide-slide>
            <div class="charge-wrap">
                <h2 class="tit-type1">충전예약</h2>
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

                <!-- 기존 이용 이력 -->
                <h2 class="tit-type1">기존 이용 이력</h2>
                <ChargeSearchList 
                  :data="chargeList"
                  :chargeType="['reserve']"
                  @charge="btmLayer.PopCharge = true"
                />
            </div>              
          </splide-slide>
          <splide-slide>
            <div class="charge-wrap">
                <h2 class="tit-type1">즉시충전</h2>
                <div class="form-box-wrap">
                  <div class="form-box">
                      <div class="row">
                      <div class="input">
                          <input type="text" placeholder="충전기 ID 입력">
                      </div>
                      </div>
                  </div>
                  <div class="btn-box">
                      <button class="btn-type1 st2">검색</button>
                  </div>
                </div>

                <!-- QR코드 인식 -->
                <h2 class="tit-type1">QR코드 인식</h2>
                <div class="qrcode">
                  <div class="qr"></div>
                </div>
            </div>              
          </splide-slide>
      </template>
    </Carousel>

    <!-- 충전소 리스트 -->
    <PopChargeSearch :visible="btmLayer.PopChargeSearch" @close="btmLayer.PopChargeSearch = false"/>
    <!-- 충전소 -->
    <PopCharge :visible="btmLayer.PopCharge" @close="btmLayer.PopCharge = false"/>
  </div>
</template>

<script>
import ChargeSearchList from '@/views/common/ChargeSearchList'
import PopChargeSearch from '@/views/PopChargeSearch'
import PopCharge from '@/views/PopCharge'
export default {
  components:{
    ChargeSearchList,
    PopChargeSearch,
    PopCharge
  },
  data(){
    return{
       chargeList: [
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '269 ~ 279 (kWh/원) ',
          'km': '1km 이내',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '269 ~ 279 (kWh/원) ',
          'km': '1km 이내',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '269 ~ 279 (kWh/원) ',
          'km': '1km 이내',
          tag: [
            '혼잡함', '할인중'
          ],
        },
        {
          'addr': '서울시 송파구<br />롯데타워 지하2층',
          'price': '269 ~ 279 (kWh/원) ',
          'km': '1km 이내',
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
        PopCharge: false
      },      
    }
  },
}
</script>
