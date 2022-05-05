<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-car-add max">
      <template slot="content">
          <div class="cont-scroll">
              <div class="car-info-add-wrap">
                <CarInfoAdd
                  :simpleRecognition = true
                  @confirm="carInfoAddConfirm"
                 />
              </div>
          </div>
      </template>
    </BtmLayer>
</template>

<script>
import CarInfoAdd from '@/views/common/CarInfoAdd'
export default {
  components:{
    CarInfoAdd
  },    
  props: {
    visible: {
      type: Boolean,
      default: false  
    },
  },  
  data(){
      return{
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
