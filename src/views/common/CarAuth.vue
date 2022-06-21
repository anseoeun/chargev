<template>
    <div class="card-wrap-wrap">
      <div class="card-wrap">
        <h2 class="tit-type1">차량확인</h2>
          <Carousel class="slide-list" :content="true" :options="sliderOpt">
              <template slot="content">
                  <splide-slide v-for="(item, index) in carList" :key="index">
                      <div class="card5" :class="{on: item.selected}">
                          <div class="text">{{ item.email }}</div>
                          <div class="text space-text"><span>{{ item.carnum[0] }}</span><span>{{ item.carnum[1] }}</span></div>
                          <div class="text">
                              <span>{{ item.num[0] }}</span> -
                              <span>{{ item.num[1] }}</span> -
                              <span>{{ item.num[2] }}</span> -
                              <span>{{ item.num[3] }}</span>
                          </div>
                          <div class="btn-box-inner">
                              <button class="btn-type1 st2" @click="$emit('auth')">인증하기</button>
                          </div>
                      </div>
                  </splide-slide>
              </template>
          </Carousel>
      </div>
      <div class="btn-box">
          <button class="btn-type1 st2">확인</button>
          <button class="btn-type1 st2">나중에 등록</button>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      sliderOpt: {
        autoWidth: true,
        perMove:1,
        pagination:false,
      },           
      carList: [
          {
              email: 'email1@email.com',
              carnum: ['01가5678', 'EQC400'],
              num: ['9999', '9999', '9999', '9999'],
              selected: true,
          },
          {
              email: 'email1@email.com',
              carnum: ['01가5678', 'EQC400'],
              num: ['9999', '9999', '9999', '9999'],
              selected: false,
          },
      ],      

      btmLayer:{
        PopCarAuth: false,
      }, 
    }
  },
}
</script>
