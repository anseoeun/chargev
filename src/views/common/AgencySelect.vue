<template>
    <BtmLayer :visible="visible" @close="$emit('close')" class="agency-select-wrap">
      <template slot="content">
        <div class="agency-select">
          <strong class="tit">통신사 선택</strong>
          <ul class="agency-list">
            <li v-for="(item, index) in agencyList" :key="index"><button @click="setAgency(index)">{{ item.label }}</button></li>
          </ul>
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
      agency:'',
      agencyList: [
        {label: 'SKT', value:0},
        {label: 'KT', value:1},
        {label: 'LGU+', value:2},
        {label: '알뜰폰 (SKT)', value:3},
        {label: '알뜰폰 (KT)', value:4},
        {label: '알뜰폰 (LGU+)', value:5},
      ]
    }
  },
  methods:{
    setAgency(index){
      this.agency = this.agencyList[index]
      this.$emit('close', this.agency);
    }
  }
}
</script>
