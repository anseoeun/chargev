<template>
  <div class="carousel">
    <Splide
      ref="primary"
      class="primary"
      :options="setOption"
      :btmarrow="btmarrow"
      :class="{'btm-arrow' : btmarrow}"
      @splide:mounted="init"
      @splide:move="onMove"
      @splide:moved="onMoved"
      @splide:drag="onDrag"
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
      prev: null,
      posX: 0
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
    init(slider) {
      this.$emit('init', slider)
    },
    onDrag(){
      this.$refs.primary.$el.classList.add('drag')
    },
    onMove(slider){
      let currentPos = this.getTranslateX(this.$refs.primary.$el.querySelector('.splide__list'))
      console.log(this.posX, currentPos)
      if(this.prev !== null) this.prev.removeAttribute('prev')
      if(this.posX <= currentPos){
        console.log('a')
        this.prev = this.$refs.primary.$el.querySelector('.is-active')  
      }else if(this.posX > currentPos){
        console.log('b')
        this.prev = this.$refs.primary.$el.querySelector('.is-active').previousElementSibling.previousElementSibling
      }

      this.prev.setAttribute('prev', true)
      this.$emit('onMove', slider)
    },
    onMoved(slider){
      let currentPos = this.getTranslateX(this.$refs.primary.$el.querySelector('.splide__list'))      
            console.log(currentPos)
      this.posX = currentPos      
      this.$emit('onMoved', slider)
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
    getTranslateX(element) {
      let style = window.getComputedStyle(element);
      //eslint-disable-next-line
      let matrix = new WebKitCSSMatrix(style.transform);
      return matrix.m41
    }
  },
}
</script>

