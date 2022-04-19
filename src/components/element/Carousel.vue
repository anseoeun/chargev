<template>
  <div class="carousel">
    <Splide
      ref="slider"
      class="slider"
      :options="setOption"
      @splide:mounted="init"
      @splide:move="onMove"
      @splide:moved="onMoved"
      @splide:drag="onDrag"
      @splide:dragged="onDragged"
    >
      <template v-if="content">
        <slot ref="content" name="content"></slot>
      </template>
      <!-- list -->
      <template v-else>
        <SplideSlide v-for="(item, index) in data" :key="index">
          <slot :item="item" :index="index"></slot>
        </SplideSlide>
      </template>
    </Splide>

    <div v-if="customPaging" class="grident-bottom">
      <div class="custom-dotting">
          <button v-for="(item, index) in tempPage || paging" :disabled="index >= paging.length" :key="index" :class="{on: currentPage === index}" @click="gotoPage(index)"></button>
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
    page:{
      type: Number,
      default: 0,
    },
    tempPage:{
      type: Number,
      default: 0,
    },
    destroy:{
      type: Boolean,
      default: false,
    },
  },
  
  data() {
    return {
      key:0,
      currentPage: 0, 
      paging: [],
      prev: null,
      prevIndex: 0,
      isPageslider: false      
    }
  },
  computed: {
    setOption() {
      let opt =Object.assign({
        arrows : false,
        pagination : true
      }, this.options)

      if(!this.content && this.data.length <= 1){
        opt.arrows = false;
      }
      if(this.options.destroy){
        opt.breakpoints = {
          100000000: {
            destroy: true,
          }
        }
      }
      return opt;
    }
  },
  watch:{
    page(value){
      if(value){
        this.gotoPage(value);
      }
    }
  },
  mounted(){
   this.paging = this.$refs.slider.$children;
   this.$refs.slider.$el.addEventListener("touchstart", function(e){ e.stopPropagation() });
   if(this.$refs.slider.$el.parentNode.classList.contains('slider-page')){
    this.isPageslider = true;
   }
  },
  methods: {
    init(slider) {
      this.currentPage = slider.index;
      this.$emit('init', slider);
    },
    onMove(slider, index){
      if(this.isPageslider){
        if(this.prev !== null && this.prev !== undefined) {
          this.prev.removeAttribute('prev');
        }
        this.prev = this.getPrev(index);
        this.prev ? this.prev.setAttribute('prev', true) : null;
      }
      this.currentPage = index;
      this.$emit('onMove', slider, index);
      this.$emit('update:page', index);
    },
    onMoved(slider, index){  
      if(this.isPageslider){
        if(this.prevIndex == index) return;        
        this.$refs.slider.$el.firstChild.firstChild.querySelectorAll('li').forEach((el) => {
          el.scrollTop = 0;
        })
        this.prevIndex = index;
      }
      setTimeout(()=>{
        this.$refs.slider.$el.classList.remove('ing');
      }, 200)
      this.$emit('onMoved', slider, index);
    },
    onDrag(){
      this.$refs.slider.$el.classList.add('ing');
    },
    onDragged(){
      this.$refs.slider.$el.classList.remove('ing');
    },
    gotoPage(index){
      this.$refs.slider.$el.lastChild.querySelector('.splide__pagination li:nth-child('+(index +  1)+') button').click();
    },
    getPrev(index){
      return  index === 0 ? null : this.$refs.slider.$el.firstChild.firstChild.querySelector('li:nth-child('+index+')');
    }
  },
}
</script>

