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
                @cardIssue="status = 'cardIssue'"
               />

              <CardIssueComp
                v-if="status==='cardIssue'"
                @postCode="$emit('postCode')"
               />
               
          </div>
      </template>
    </BtmLayer>
</template>

<script>
import CarInfoAdd from '@/views/common/CarInfoAdd'
import CardInfoAdd from '@/views/common/CardInfoAdd'
import CardIssueComp from '@/views/common/CardIssueComp'
export default {
  components:{
    CarInfoAdd,
    CardInfoAdd,
    CardIssueComp
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
