<template>
  <div class="carousel">
    <Splide
      ref="primary"
      class="primary"
      :options="setOption"
      :btmarrow="btmarrow"
      :class="{'btm-arrow' : btmarrow}"
      @splide:mounted="initClientOnlyComp"
      @splide:move="onMove"
      @splide:moved="onMoved"
    >

      <template v-if="content">
        <slot ref="content" name="content"></slot>
      </template>
      <!-- list -->
      <template v-else>
        <SplideSlide v-for="(item, index) in list" :key="index">
          <slot :item="item" :index="index"></slot>
        </SplideSlide>
      </template>
    </Splide>

    <Splide
      v-if="thumbnail"
      ref="secondary"
      class="secondary"
      :options="secondaryOptions"
    >
      <template v-if="content">
        <slot ref="content" name="content"></slot>
      </template>
      <!-- list -->
      <template v-else>
        <SplideSlide v-for="(item, index) in list" :key="index">
          <slot :item="item" :index="index"></slot>
        </SplideSlide>
      </template>
    </Splide>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSplide from '@splidejs/vue-splide';
Vue.use( VueSplide );

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
   components: { Splide, SplideSlide },
    props: {
    slliderName: {
      type: String,
      default: '',
    },
    btmarrow: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => {},
    },
    content: {
      type: Boolean,
      default: false,
    },
    gate:{
      type: Boolean,
      default: false,
    },
    thumbnail:{
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      pagingNumber: 1,
        secondaryOptions: {
          type: 'slide',
          rewind: true,
          cover: true,
          isNavigation: true,
          perPage  : 2.7,
          gap: '0.8rem',
          trimSpace: true,
          pagination  : false,
          arrows: false,
        },
    }
  },
  computed: {
    list() {
      return this.data.map((item) => ({ ...item }))
    },
    pagingSize() {
      return 31 * this.list.length
    },
    setOption() {
      let opt =Object.assign({
        arrows : this.options.perPage <  this.getDataLength(),
        pagination : this.options.perPage <  this.getDataLength(),
        drag : this.options.perPage <  this.getDataLength()
      }, this.options)

      if(!this.content && this.list.length <= 1){
        opt.arrows = false
      }

      return opt
    }
  },
  updated() {
    // this.initClientOnlyComp()
    if(this.thumbnail) this.$refs.primary.sync( this.$refs.secondary.splide )
  },
  methods: {
    initClientOnlyComp(count = 10) {
      this.$nextTick(() => {
        if (this.btmarrow) {
          this.$refs.primary.$el.firstChild.firstChild.style.left = -this.pagingSize / 2 + 'px'
          this.$refs.primary.$el.firstChild.lastChild.style.right = -this.pagingSize / 2 + 'px'
        } else if (count > 0) {
          this.initClientOnlyComp(count - 1)
        }
        this.$emit('init')
      })
    },
    onMove(){
      document.querySelectorAll('.el-popover.el-popper').forEach((value) => {
        value.style.display = 'none'
      })
      document.querySelectorAll('.similar-recommend-list .option .active').forEach((value) => {
        value.classList.remove('active')
      })
    },
    onMoved(){
      if(document.querySelector('.getpage')){
        let page = document.querySelector('.getpage .splide__pagination .is-active').getAttribute('aria-label').split('slide ')[1]
        this.$emit('onMoved', page)
      }
    },
    getDataLength() {
      if(this.content){
        let num = 0
        for (var key in this.$slots.content) {
          this.$slots.content[key].tag !== undefined ? num += 1 : ''
        }
        return num
      }else{
        return this.data.length
      }
    },
  },
}
</script>

