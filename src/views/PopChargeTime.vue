<template>
    <BtmLayer :visible="visible" @close="close" class="pop-charge" @opended="opended">
      <template slot="content">
        <button class="btn-layer-close" @click="$emit('close');"><Icon type="close" /></button>      
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>
                <ChargeTime :timeSetType="timeSetType" :opacity="opacity" :key="opacity" />
              </splide-slide>
          </template>
        </Carousel>          
      </template>
    </BtmLayer>
</template>

<script>
import ChargeTime from '@/views/common/ChargeTime'
export default {
  components:{
    ChargeTime
  },
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
    timeSetType:{
      type: String,
      default: ''  
    },
  },  
  data(){
    return{
      opacity: 0,

      options: {
        perPage: 1,
        perMove: 1,
        start: 0,
        destroy: true
      },
      currentPage: 0            
    }
  }, 
  methods:{
    close(){
      this.$emit('close');
      this.opacity = 0
    },
    opended(){
      this.opacity = 1
    }
  }
}
</script>
