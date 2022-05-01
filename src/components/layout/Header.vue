<template>
    <div class="header">
        <div class="left">
            <!-- <div class="user"><Icon type="g" />이상욱</div> -->
            <button class="status" :class="{on:status}" @click="status = !status">
                <span class="bar"><span></span></span>
                <template v-if="status">
                    차량맞춤 정보
                    <b class="charging">충전중<Icon type="charge" /></b>
                </template>
                <template v-else>전체 충전소</template>
            </button>
        </div>
       <div class="right">
           <router-link to="/" class="btn"><Icon type="search" /></router-link>
           <router-link to="/" class="btn"><Icon type="alarm" /></router-link>
       </div>
    </div>
</template>
<script>
export default{
  data(){
      return {
          status: true
      }
  }
}
</script>
