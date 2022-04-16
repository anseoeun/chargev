<template>
  <div class="contents">
    <div class="map-wrap">
      <div class="map" :style="`background:url('${require('@/assets/images/temp-map.jpg')}') no-repeat 50% 50%;background-size:cover`"></div>

      <div class="map-menu">
        <button><Icon type="map-pos" /></button>
        <button><Icon type="map-index" /></button>
        <button @click="btmLayer.PopMapFilter = true"><Icon type="map-filter" /></button>
        <button @click="btmLayer.PopMapLegend = true"><Icon type="map-legend" /></button>
      </div>

      <button class="mapindex" style="top:150px;left:180px;">
        <Icon type="mapindex" />
      </button>
      <button class="mapindex" style="top:200px;left:220px;" @click="btmLayer.PopCharge = true">
        <Icon type="mapindex-ing" />
      </button>
    
    </div>

    <!-- 지도필터 -->
    <PopMapFilter :visible="btmLayer.PopMapFilter" @close="btmLayer.PopMapFilter = false"/>
    <!-- 범례 -->
    <PopMapLegend :visible="btmLayer.PopMapLegend" @close="btmLayer.PopMapLegend = false"/>
    <!-- 충전소 -->
    <PopChargeStation :visible="btmLayer.PopCharge" @close="btmLayer.PopCharge = false"/>

  </div>
</template>

<script>
import PopMapFilter from '@/views/PopMapFilter'
import PopMapLegend from '@/views/PopMapLegend'
import PopChargeStation from '@/views/PopChargeStation'
export default {
  components:{
    PopMapFilter,
    PopMapLegend,
    PopChargeStation
  },
  data(){
    return{
      

      options: {
        perPage: 1,
        perMove: 1,
      },
      currentPage: 0,
      paging: new Array(3),
      btmLayer:{
        PopMapFilter: false,
        PopMapLegend: false,
        PopCharge: false,
      },
    }
  },
  created(){

  },
  methods: {
    
  }
}
</script>
