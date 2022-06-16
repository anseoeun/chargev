<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
        <!-- 본인인증 -->
        <SelfAuth :form="form" @agencyOpen="btmLayer.agency = true" />
      </div>
      <div class="info-text">
        인증키 확인을 통해 로그인을 진행합니다.
        <br />전화번호가 변경되었을 경우
        <br />인증값 찾기 버튼을 눌러 진행해주세요        
      </div>
    </div>
    
    <!-- 팝업:통신사 선택 -->
    <AgencySelect :visible="btmLayer.agency" @close="agencySelect"/>

  </div>
</template>

<script>
import SelfAuth from '@/views/common/SelfAuth'
import AgencySelect from '@/views/common/AgencySelect'
export default {
  components:{
    SelfAuth,
    AgencySelect
  },
  data(){
    return{
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
