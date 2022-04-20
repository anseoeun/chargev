<template>
    <div class="charge-list">
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <router-link to="/" class="link">
            <div class="row">
              <div class="cell">
                <div class="addr" v-html="item.addr"></div>
                <div class="addr2">
                  <div class="row">
                    <div class="cell label">주소</div>
                    <div class="cell" v-html="item.addr2"></div>
                  </div>
                </div>
                <div class="price">
                  <span class="c-green">{{ item.start }}</span> - <span class="c-green">{{ item.end }}</span> (kWh/원)
                </div>
              </div>
              <div class="cell right">
                <div class="company">차지비</div>
                <div class="status t-s">{{ item.status }}</div>
                <div>{{ item.km }}</div>
              </div>
            </div>
            <div class="tag">
              <span v-for="(item, i) in item.tag" :key="i">{{ item }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props:{
    data:{
      type : Array,
      default: ()=>[]
    } 
  }
}
</script>
