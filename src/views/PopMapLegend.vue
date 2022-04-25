<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="pop-legend no-dim">
      <template slot="content">
        <div class="cont-scroll">
          <div class="layer-hdader">
            <div class="back-tit">
              <button class="layer-back" @click="$emit('close')"><Icon type="arr-left" /></button>
              범례
            </div>
          </div>
          <!-- map-legend -->
          <div class="map-legend">
            <div class="cell">
              <span class="status on"></span>
              <div class="txt">충전가능</div>
            </div>
            <div class="cell">
              <span class="status"></span>
              <div class="txt">충전불가</div>
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
