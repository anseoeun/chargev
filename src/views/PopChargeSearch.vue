<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-charge">
      <template slot="content">
        <button class="btn-layer-close" @click="$emit('close');"><Icon type="close" /></button>
          <div class="cont-scroll">
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
                      <button class="btn-type1 st2" @click="$emit('PopChargeSearchList')">검색</button>
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
          </div>
      </template>
    </BtmLayer>
</template>

<script>
import ChargeSearchList from '@/views/common/ChargeSearchList'
export default {
  components:{
    ChargeSearchList
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
    }
  },
}
</script>
