<template>
    <BtmLayer :visible="visible" @close="$emit('close');" class="pop-car-add max">
      <template slot="content">
          <div class="cont-scroll">
              <div class="car-info-add-wrap">
                <template v-if="!newRegistShow && !shareKeyShow">
                  <h2 class="tit-type1">등록구분</h2>
                  <div class="btn-box">
                    <button class="btn-type1 st2" @click="newRegistShow = true">신규등록</button>
                    <button class="btn-type1 st2" @click="shareKeyShow = true">공유키로 등록</button>
                  </div>
                </template>
                <CarInfoAdd
                  v-if="newRegistShow"
                  title="신규등록"
                  @confirm="carInfoAddConfirm"
                 />
                 <template v-else-if="shareKeyShow">
                    <h2 class="tit-type1">공유키로 등록</h2>
                    <div class="form-box-wrap">
                        <div class="form-box">
                            <div class="row">
                                <div class="input">
                                    <Input type="number" v-model="form.sharekey" maxlength="8" placeholder="공유키 8자리 입력" />
                                </div>
                            </div>
                        </div>
                        <div class="btn-box">
                            <button class="btn-type1 st2">등록하기</button>
                        </div>
                    </div>
                 </template>
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
