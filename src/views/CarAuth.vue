<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
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
                                <button class="btn-type1 st2">인증하기</button>
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
      <div class="info-text">
          전화번호와 성함이 일치하는 계정의
          <br />차량이 확인되었습니다.
          <br />인증하기를 눌러 차량을 인증해주세요.
          <br />인증이 완료된 차량만 등록이 가능합니다.  
      </div>
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
      form:{
        id: '',
        pw: '',
        agency: {},
        tel: '',
        auth: '',
      }, 
      cardList: [
          {
              name: '결제카드 1',
              date: '02/24',
              company: '삼성',
              num: ['5361', '48**', '****', '4151'],
              selected: true,
          },
          {
              name: '결제카드 2',
              date: '02/24',
              company: '삼성',
              num: ['5361', '48**', '****', '4151'],
              selected: true,
          },
      ],      

      btmLayer:{
        agency: false,
      }, 
    }
  },
  methods: {
    agencySelect(val){
      val ? this.form.agency = val : ''
      this.btmLayer.agency = false
    },
  }
}
</script>
