<template>
  <div class="contents">
    <div class="login-rule-list-wrap">
      <div class="logo-chargev"><Icon type="chargev" /></div>

        <div class="menu-wrap">
          <div class="grid-list-menu">
            <div class="row total">
               <div class="check">
                  <button  @click="setAllCheck">
                    <Icon type="check" :class="{on: !ruleChecked.includes(false)}" />
                    <span class="txt">전체동의</span>
                  </button>
              </div>
            </div>
            <div v-for="(item, index) in ruleList" :key="index" class="row">
              <div class="check">
                  <button  @click="checkIcon($event, 'ruleChecked', index)">
                    <Icon type="check" :class="{on: ruleChecked[index]}" />
                    <sp class="txt">{{ item.tit }}</sp>
                  </button>
              </div>
              <div class="right">
                <router-link :to="item.link" class="bth-link">
                  <Icon type="arr-right" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="btn-wrap">
            <button class="btn-type1 st2">확인</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      ruleChecked: new Array(5).fill(false),
      ruleList: [
        {
          tit: '서비스 이용약관 [필수]',
          link: '/'
        },
        {
          tit: '개인정보처리방침 [필수]',
          link: '/'
        },
        {
          tit: '위치기반서비스 이용약관 [필수]',
          link: '/'
        },
        {
          tit: '휴대폰본인확인서비스 [필수]',
          link: '/'
        },
        {
          tit: '마케팅 이용 동의 [선택]',
          link: '/'
        },
      ]
    }
  },
  methods: {
    setAllCheck(){
      let num = this.ruleChecked.length;
      for(let i=0;i<=num;i++){
        this.$set(this.ruleChecked, i, true);
      }
    }
  }
}
</script>
