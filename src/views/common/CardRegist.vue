<template>
    <div class="form-box-wrap">
      <h2 class="tit-type1">카드등록</h2>
      <div class="form-box">
        <div class="row">
            <div class="input auto">
                <Input type="text" v-model="form.carnum" placeholder="차량번호" />
            </div>
        </div>
        <div class="row">
            <div class="input auto">
                <Input type="text" v-model="form.name" placeholder="소유자명" />
            </div>
        </div>
      </div>
      <div class="btn-box">
          <button class="btn-type1 st2" @click="$emit('regist')">멤버십카드 등록</button>
          <button class="btn-type1 st2" @click="$emit('nocard')">멤버십카드 없음</button>
      </div>
    </div>    
</template>

<script>
export default { 
  props: {
    form: {
      type: Object,
      default: ()=>{}
    }  
  }, 
}
</script>
