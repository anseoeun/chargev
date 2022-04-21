<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-charge max">
      <template slot="content">
        <button class="btn-layer-close" @click="$emit('close');"><Icon type="close" /></button>
            <div class="cont-scroll">
              <div class="charge-wrap">
                  <h2 class="tit-type1">검색결과</h2>
                  <template v-if="chargeList.length > 0">
                    <ChargeSearchList
                      :data="chargeList"
                    />
                  </template>
                  <template v-else>
                    <div class="no-result">
                      검색 결과가 없습니다.
                    </div>
                  </template>
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
