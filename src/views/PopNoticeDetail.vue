<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-notice-detail">
      <template slot="content">
        <button class="btn-layer-close" @click="$emit('close');"><Icon type="close" /></button>
        <div class="cont-scroll">
              <div class="notice-detail-wrap">
                <h2 class="tit-type1">공지사항</h2>
                <div class="img"><img :src="require('@/assets/images/temp-noti.jpg')"></div>
                <h3 class="tit-type2">신규 서비스 안내</h3>
                <div class="time">2022-02-25</div>
                <div class="noti-content">
                  기프티쇼 쿠폰이 출시되었습니다.
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </div> 
                <div class="date">
                  2022-02-25
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

}
</script>
