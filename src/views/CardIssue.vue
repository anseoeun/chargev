<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>        
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
          <CardIssueComp
            @postCode="btmLayer.PopAddr = true"
            />
      </div>
      <div class="info-text">
        멤버십카드를 발급받기 위한 주소를 입력해주세요.
        <br />카드 발급 비용은 6,000원입니다.
      </div>
    </div>

    <!-- 주소 -->
    <PopAddr :visible="btmLayer.PopAddr" @close="btmLayer.PopAddr = false"/>
  </div>
</template>

<script>
import PopAddr from '@/views/PopAddr'
import CardIssueComp from '@/views/common/CardIssueComp'
export default { 
  components:{
    PopAddr,
    CardIssueComp
  },
  data(){
    return{
      form: {
        addr: '',
        addr2: '',
      },
      btmLayer:{
        PopAddr: false,
      }      
    }
  },
}
</script>
