<template>
  <div class="charge-list">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <div class="row">
          <div class="cell">
            <div class="number">200130001</div>
            <div class="price">
              <span class="c-green">{{ item.km }}</span> (kWh/원)
            </div>
            <div class="tag">
              <span v-for="(item, i) in item.tag" :key="i">{{ item }}</span>
            </div>
          </div>
          <div class="cell right f-col-box">
            <div v-if="type != 'breakdown'" class="status">{{ item.status }}</div>
            <div class="bottom">
              <div class="t-s">{{ item.speed }}</div>
              <div class="t-s">{{ item.etc }}</div>
            </div>
          </div>
          <div v-if="type === 'breakdown'" class="cell btn-menu">
            <button class="btn" @click="$emit('selected')"><span>선택</span></button>
          </div>
          <div v-else class="btn-menu">
            <button class="btn" @click="$emit('reserve')">
              <Icon type="clock" /><span>예약</span>
            </button>
            <button class="btn" @click="$emit('charge')">
              <Icon type="charge-half" /><span>충전</span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
}
</script>
