<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-addr max">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>
                <AddrSearch />
              </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>
import AddrSearch from '@/views/common/AddrSearch'
export default {
  components:{
    AddrSearch
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
        destroy: true,
      },
      currentPage: 0
    }
  },
}
</script>
