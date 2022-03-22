<template>
  <div class="contents">
    <div class="login-wrap">
        <div class="logo-chargev"><Icon type="chargev" /></div>
        <button @click="btmLayer.agency = true">레이어 클릭</button>
        <button @click="update">슬라이더 추가</button>
    </div>
    {{ slider1 }}
    <Slider :options="options" :content="true" class="slider-default" :key="componentKey">
      <template slot="content">
        <splide-slide>
          <div style="height: 200px; background: red">가나다</div>
        </splide-slide>
        <splide-slide>
          <div style="height: 200px; background: green">라마바</div>
        </splide-slide>
        <splide-slide v-if="slider1">
          <div style="height: 200px; background: black">아자차</div>
        </splide-slide>
        <splide-slide v-if="false">
          <div style="height: 200px; background: black">파하</div>
        </splide-slide>
      </template>
    </Slider>
    <div class="custom-dotting">
      <button v-for="(item, index) in 4" :key="index" @click="gotoPage(index)">{{ index }}</button>
    </div>
    <BtmLayer :visible="btmLayer.agency" @close="btmLayer.agency = false">
      <template slot="content">
          dfsf
      </template>
    </BtmLayer>
  </div>
</template>

<script>

export default {
  data(){
    return{
      btmLayer:{
        agency: false,
      },
      slider1: false,
       componentKey: 2,
      options: {
        // rewind: true, // 맨끝에서 처음으로 다시 돌아가기
        // width: 800,
        perPage: 1,
        perMove: 1,
        // pagination: false,
        // arrows: false,
      },      
    }
  },
  mounted(){
   
  },
  methods: {
    update(){
      this.slider1 = true;
      this.componentKey += 1;   
      this.options.start = 1
      // this.$forceUpdate();
    },
    gotoPage(index){
      document.querySelector('.splide__pagination li:nth-child('+(index +  1)+') button').click()
    }
  }
}
</script>
