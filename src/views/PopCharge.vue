<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-charge">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page" @onMove="sliderMoved">
          <template slot="content">
              <splide-slide>
                <ChargePlace :chargeType="['select']" @select="currentPage = 1;timeSetType ='charge'" />
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
      timeSetType: '',      
      options: {
        perPage: 1,
        perMove: 1,
        start: 0
      },
      currentPage: 2
    }
  },
  methods: {
    sliderMoved(slier, index){
      if(index == 1) this.timeSetType = 'charge'
    }
  }
}
</script>
