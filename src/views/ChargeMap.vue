<template>
  <div class="contents">
    <div class="map-wrap">
      <!-- ※ 개발시 백그라운드 제거 -->
      <div class="map" :style="`background:url('${require('@/assets/images/temp-map.jpg')}') no-repeat 50% 50%;background-size:cover`"></div>

      <div class="map-menu" :class="{on: mapMenuTogStatus}">
        <button class="map-menu-btn-tog" @click="mapMenuTogStatus = !mapMenuTogStatus"><Icon type="map-tog" /></button>
        <div v-if="mapMenuTogStatus" class="map-menu-tog">
          <button><Icon type="map-pos2" /></button>
          <button><Icon type="map-index2" /></button>
          <button @click="btmLayer.PopMapFilter = true"><Icon type="map-filter" /></button>
          <button @click="btmLayer.PopMapLegend = true"><Icon type="map-legend" /></button>
        </div>
      </div>

      <button class="mapindex" style="top:150px;left:180px;">
        <img :src="require('@/assets/images/mapindex-off.png')">
      </button>
      <button class="mapindex on" style="top:200px;left:220px;" @click="btmLayer.PopCharge = true">
        <img :src="require('@/assets/images/mapindex-on.png')">
      </button>
      <button class="btn-type2 st1 inbl" style="position:absolute;top:325px;left:200px;" @click="$root.$emit('PopChargeSearch')">
        총전소검색 버튼
      </button>
      <button class="btn-type2 st1 inbl" style="position:absolute;top:425px;left:150px;" @click="btmLayer.PopChargeStationDetail = true">
        총전소 상세 검색 버튼
      </button>
    
    </div>

    <!-- 지도필터 -->
    <PopMapFilter :visible="btmLayer.PopMapFilter" @close="btmLayer.PopMapFilter = false"/>
    <!-- 범례 -->
    <PopMapLegend :visible="btmLayer.PopMapLegend" @close="btmLayer.PopMapLegend = false"/>
    <!-- 충전소 -->
    <PopChargeStation :visible="btmLayer.PopCharge" @close="btmLayer.PopCharge = false"/>
    <!-- 충전소 -->
    <PopChargeStationDetail :visible="btmLayer.PopChargeStationDetail" @close="btmLayer.PopChargeStationDetail = false"
      @PopChargeTimeCharge="btmLayer.PopChargeTime = true;timeSetType = 'charge'"
      @PopChargeTimeReserve="btmLayer.PopChargeTime = true;timeSetType = 'reserve'"
    />
    <!-- 충전시간 -->
    <PopChargeTime :visible="btmLayer.PopChargeTime" :timeSetType="timeSetType" @close="btmLayer.PopChargeTime = false"/>    
  </div>
</template>

<script>
import PopMapFilter from '@/views/PopMapFilter'
import PopMapLegend from '@/views/PopMapLegend'
import PopChargeStation from '@/views/PopChargeStation'
import PopChargeStationDetail from '@/views/PopChargeStationDetail'
import PopChargeTime from '@/views/PopChargeTime'
export default {
  components:{
    PopMapFilter,
    PopMapLegend,
    PopChargeStation,
    PopChargeStationDetail,
    PopChargeTime
  },
  data(){
    return{
      mapMenuTogStatus: true,
      timeSetType:'',
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
        PopChargeStationDetail: false,
        PopChargeTime: false,
      },
    }
  }
}
</script>
