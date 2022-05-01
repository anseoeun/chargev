<template>
  <div class="contents">
    <div class="login-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>
      <div class="min-fix">
        <!-- pin설정 -->
        <PinSetting :form="form" />
      </div>
    </div>
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
        id: '',
        pw: '',
        agency: {},
        tel: '',
        auth: '',
        pin: '',
        pin2: '',
      },
    }
  }
}
</script>
