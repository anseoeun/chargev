<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-payment-detail">
      <template slot="content">
        <Carousel :options="options" :content="true" :customPaging="true" :page.sync="currentPage" class="slider-page">
          <template slot="content">
              <splide-slide>

              </splide-slide>
              <splide-slide>
                
              </splide-slide>
          </template>
        </Carousel>
      </template>
    </BtmLayer>
</template>

<script>

export default {
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
        start: 1
      },
      currentPage: 0      
    }
  }
}
</script>
