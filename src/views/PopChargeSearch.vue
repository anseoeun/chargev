<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-charge">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page" @onMove="sliderMoved">
          <template slot="content">
              <splide-slide>
                <div class="charge-search-wrap">
                    <h2 class="tit-type1">검색결과</h2>
                    <div class="charge-list">
                        <ul>
                          <li v-for="(item, index) in chargeList" :key="index">
                            <div class="row">
                              <div class="cell" v-html="item.addr"></div>
                              <div class="cell right">차지비</div>
                            </div>
                            <div class="row">
                              <div class="cell t-s">{{ item.price }}</div>
                              <div class="cell right">{{ item.km }}</div>
                            </div>
                            <div class="tag">
                              <span v-for="(item, i) in item.tag" :key="i">{{ item }}</span>
                            </div>
                            <div class="btn-box">
                              <button class="btn-type1 st2" @click="currentPage = 1">선택</button>
                            </div>
                          </li>
                        </ul>
                    </div>
                </div>
              </splide-slide>
              <splide-slide>
                <ChargePlace :chargeType="['charge', 'reserve']"
                   @select="currentPage = 2;timeSetType ='charge'"
                   @charge="currentPage = 2;timeSetType ='charge'"
                   @reserve="currentPage = 2;timeSetType ='reserve'"
                 />
              </splide-slide>
              <splide-slide>
                <ChargeTime :timeSetType="timeSetType" :key="timeSetType" />
              </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>
import ChargePlace from '@/views/common/ChargePlace'
import ChargeTime from '@/views/common/ChargeTime'

export default {
  components:{
    ChargePlace,
    ChargeTime
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
      timeSetType: '',
      options: {
        perPage: 1,
        perMove: 1,
        start: 0
      },
      currentPage: 2
    }
  },
  methods:{
    sliderMoved(slier, index){
      if(index == 2 && this.timeSetType == '') this.timeSetType = 'charge'
    }
  }
}
</script>
