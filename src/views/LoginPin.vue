<template>
  <div class="contents">
    <button class="back"><Icon type="back" /></button>            
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
        <!-- pin설정 -->
        <PinSetting :form="form" @pinSetting="pinIniputStatus = 'completion'" />
      </div>
      <div v-if="pinIniputStatus != 'completion'" class="info-text">
        로그인을 위해 PIN코드를 입력해주세요.
      </div>
      <div v-if="pinIniputStatus != 'completion'" class="info-text">
        PIN코드를 입력해주세요.
        <br />PIN코드는 충전시작,앱 로그인시 사용됩니다. 
      </div>
      <div v-else class="info-text">
        PIN코드를 확인해주세요.
      </div>
    </div>

    <!-- 팝업 -->
    <Alert :is-open="biometricsPop" @close="biometricsPop = false" :confirm="false" class="header-title-size2">
        <template slot="header">생체인식 사용</template>
        <template slot="body">
          <span class="bold t-m">생체인식을 사용하시겠습니까?</span>
        </template>
        <template slot="btn">
          <button class="btn-type1 st1" @click="alertPop = false">사용</button>
          <button class="btn-type1 st3" @click="alertPop = false">사용안함</button>
        </template>
    </Alert>       
  </div>
</template>

<script>
import PinSetting from '@/views/common/PinSetting'
export default {
  components:{
    PinSetting,
  },
  data(){
    return{
      form:{
        pin: '',
        pin2: '',
      },
      pinIniputStatus: '',
      biometricsPop: false,
    }
  },
  mounted(){
    this.biometricsPop = true
  }
}
</script>
