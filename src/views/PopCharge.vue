<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-charge">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page" @onMove="sliderMoved">
          <template slot="content">
              <splide-slide>
                <ChargePlace :chargeType="['select']" @chargeSelect="currentPage = 1" />
              </splide-slide>
              <splide-slide>
                <ChargeTime :key="chargeTimeInit" />
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
      options: {
        perPage: 1,
        perMove: 1,
        start: 0
      },
      chargeTimeInit: false,
      currentPage: 2
    }
  },
  methods:{
    sliderMoved(slider, index){
      if(index === 1) this.chargeTimeInit = true
    },
  }
}
</script>
