<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-addr max">
      <template slot="content">
        <div class="cont-scroll">
          <AddrSearch />
        </div>
      </template>
    </BtmLayer>
</template>

<script>
import AddrSearch from '@/views/common/AddrSearch'
export default {
  components:{
    AddrSearch
  },  
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
}
</script>
