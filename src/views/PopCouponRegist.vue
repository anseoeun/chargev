<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-coupon-regist max">
      <template slot="content">
          <div class="cont-scroll">
            <div class="coupon-regist-wrap">
                <template v-if="!mobileShow && !couponShow">
                    <h2 class="tit-type1 c-white">등록구분</h2>
                    <div class="btn-box">
                        <button class="btn-type1 st2" @click="mobileShow = true">모바일충전권</button>
                        <button class="btn-type1 st2" @click="couponShow = true">쿠폰</button>
                    </div>
                </template>
                 <!-- 모바일 충전권 -->
                 <div v-if="mobileShow" class="retist-wrap">
                     <div class="form-box-wrap">
                        <h2 class="tit-type1 c-white">모바일 충전권</h2>
                        <div class="form-box">
                            <div class="row">
                                <div class="input">
                                    <Input type="number" maxlength="12" placeholder="충전권 번호 12자리 입력" />
                                </div>
                            </div>
                        </div>
                        <div class="btn-box">
                            <button class="btn-type1 st2">등록하기</button>
                        </div>
                     </div>
                 </div>
                 <!-- 쿠폰 -->
                 <div v-if="couponShow" class="retist-wrap">
                     <div class="form-box-wrap">
                        <h2 class="tit-type1 c-white">쿠폰</h2>
                        <div class="form-box">
                            <div class="row">
                                <div class="input">
                                    <Input type="number" maxlength="16" placeholder="쿠폰번호 16자리 입력" />
                                </div>
                            </div>
                        </div>
                        <div class="btn-box">
                            <button class="btn-type1 st2">등록하기</button>
                        </div>
                     </div>
                 </div>
            </div>
          </div>
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
          mobileShow: false,
          couponShow: false,
      }
  }
}
</script>
