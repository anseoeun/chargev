<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-car-add max">
      <template slot="content">
          <div class="cont-scroll">
              <CarInfoAdd
                v-if="status==='carAdd'"
                @cardRegist="status = 'cardAdd'"
               />
               
              <CardInfoAdd
                v-if="status==='cardAdd'"
               />
               
          </div>
      </template>
    </BtmLayer>
</template>

<script>
import CarInfoAdd from '@/views/common/CarInfoAdd'
import CardInfoAdd from '@/views/common/CardInfoAdd'
export default {
  components:{
    CarInfoAdd,
    CardInfoAdd
  },    
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
  data(){
      return{
        status: 'carAdd',
        newRegistShow: false,
        shareKeyShow: false,
        form:{
          sharekey: ''
        },
      }
  },
  methods: {
    carInfoAddConfirm(form){
      this.form = Object.assign({}, this.form, form)
    }
  }  
}
</script>
