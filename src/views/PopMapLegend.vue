<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-legend no-dim">
      <template slot="content">
        <button class="btn-layer-close" @click="$emit('close');"><Icon type="close" /></button>        
        <div class="cont-scroll">
          <h2 class="tit-type1">색인</h2>
          <!-- map-legend -->
          <div class="map-legend">
            <div class="cell">
              <div class="mapindex"><img :src="require('@/assets/images/mapindex-on.png')"></div>
              <div class="txt">이용가능</div>
            </div>
            <div class="cell">
              <div class="mapindex"><img :src="require('@/assets/images/mapindex-off.png')"></div>
              <div class="txt">이용불가</div>
            </div>
          </div>
          <!-- // map-legend -->
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
