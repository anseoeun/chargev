<template>
    <div class="header">
        <div class="left">
            <!-- <div class="user"><Icon type="g" />이상욱</div> -->
            <button class="status" :class="{on:status}" @click="status = !status">
                <span class="bar-wrap">
                    <span class="bar"><span></span></span>
                    <span class="txt">맞춤정보</span>
                </span>
                <template v-if="status">
                    02보6596
                    <b class="charging">충전중<Icon type="charge" /></b>
                </template>
                <template v-else>전체 충전소</template>
            </button>
        </div>
       <div class="right">
           <router-link to="/" class="btn"><Icon type="qr" /></router-link>
           <router-link to="/" class="btn"><Icon type="search" /></router-link>
           <router-link to="/" class="btn"><Icon :type="`alarm-${alarm < 10 ? alarm : '9+'}`" /></router-link>
       </div>
    </div>
</template>
<script>
export default{
  data(){
      return {
          status: true,
          alarm: 10
      }
  }
}
</script>
