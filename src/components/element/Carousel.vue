<template>
  <div class="carousel">
    <Splide
      ref="slider"
      class="slider"
      :options="setOption"
      @splide:mounted="init"
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

    <div v-if="customPaging" class="grident-bottom">
      <div class="custom-dotting">
          <button v-for="(item, index) in paging" :key="index" :class="{on: currentPage === index}" @click="gotoPage(index)"></button>
      </div>
    </div>
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
    customPaging: {
      type: Boolean,
      default: false,
    },
    thumbnail:{
      type: Boolean,
      default: false,
    },
    page:{
      type: Number,
      default: 0,
    }
  },

  data() {
    return {
      currentPage: 0, 
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
      // paging: new Array(this.$refs.slider.$children),
      paging: [],
      prev: null,
      prevIndex: 0,
      prevX: 0
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
    if(this.thumbnail) this.$refs.slider.sync( this.$refs.secondary.splide )
  },
  watch:{
    page(value){
      if(value){
        this.gotoPage(value)
      }
    }
  },
  mounted(){
    this.paging = this.$refs.slider.$children
  },
  methods: {
    init(slider) {
      this.currentPage = slider.index
      this.$emit('init', slider)
    },
    onMove(slider, index){
      if(index != this.prevIndex){
        if(this.prevIndex < index){
          this.prev = this.$refs.slider.$el.querySelector('.is-active')  
        }else{
          this.prev.removeAttribute('prev')
          this.prev = this.$refs.slider.$el.querySelector('.is-active').previousElementSibling.previousElementSibling
        }

      if(this.prev !== null) this.prev.removeAttribute('prev')
        this.prev ? this.prev.setAttribute('prev', true) : ''
        this.prevIndex = index
      }
      this.currentPage = index
      this.$emit('onMove', slider)
      this.$emit('update:page', index)
    },
    onMoved(slider){  
      if(this.prev !== null) this.prev.scrollTop = 0      
      this.$refs.slider.$el.querySelector('.is-active').scrollTop = 0
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
    },
    gotoPage(index){
      this.$refs.slider.$el.querySelector('.splide__pagination li:nth-child('+(index +  1)+') button').click()
    },
  },
}
</script>

