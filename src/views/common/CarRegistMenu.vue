<template>
<div class="car-regist-menu-wrap">
    <h2 class="tit-type1">차량등록</h2>
    <div class="btn-box">
        <button class="btn-type1 st2" @click="$emit('basic')">일반/법인</button>
        <button class="btn-type1 st2" @click="$emit('rent')">리스/렌트</button>
        <button class="btn-type1 st2" @click="$emit('later');registAfterPop = true">나중에 등록</button>
    </div>  
</div>
</template>

<script>

export default {
  props: {
    form: {
      type: Object,
      default: ()=>{}
    },
    isAuthKey: {
      type: Boolean,
      default: false
    }
  },  
  data(){
    return{
      status: '',
      setForm: false
    }
  },
}
</script>
