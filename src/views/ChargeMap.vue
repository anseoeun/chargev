<template>
  <div class="contents">
    <div class="map-wrap">
      <!-- ※ 개발시 백그라운드 제거 -->
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
      <button class="btn-type2 st1 inbl" style="position:absolute;top:325px;left:200px;" @click="btmLayer.PopChargeSearch = true">
        총전소검색 버튼
      </button>
    
    </div>

    <!-- 지도필터 -->
    <PopMapFilter :visible="btmLayer.PopMapFilter" @close="btmLayer.PopMapFilter = false"/>
    <!-- 범례 -->
    <PopMapLegend :visible="btmLayer.PopMapLegend" @close="btmLayer.PopMapLegend = false"/>
    <!-- 충전소 -->
    <PopChargeStation :visible="btmLayer.PopCharge" @close="btmLayer.PopCharge = false"/>
    <!-- 총전소검색 -->
    <PopChargeSearch :visible="btmLayer.PopChargeSearch" @close="btmLayer.PopChargeSearch = false" @PopChargeSearchList="btmLayer.PopChargeSearchList = true"/>
    <!-- 충전소 리스트 -->
    <PopChargeSearchList :visible="btmLayer.PopChargeSearchList" @close="btmLayer.PopChargeSearchList = false"/>
  </div>
</template>

<script>
import PopMapFilter from '@/views/PopMapFilter'
import PopMapLegend from '@/views/PopMapLegend'
import PopChargeStation from '@/views/PopChargeStation'
import PopChargeSearch from '@/views/PopChargeSearch'
import PopChargeSearchList from '@/views/PopChargeSearchList'
export default {
  components:{
    PopMapFilter,
    PopMapLegend,
    PopChargeStation,
    PopChargeSearch,
    PopChargeSearchList
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
        PopChargeSearch: false,
        PopChargeSearchList: false,
      },
    }
  }
}
</script>
