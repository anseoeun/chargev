import Vue from 'vue'
import $ from 'jquery'

Vue.mixin({
    methods: {
      checkIcon(e, arr, i){
        e.stopPropagation();
        e.preventDefault();
        const el = e.currentTarget.querySelector('i')
        if(el.classList.contains('on')){
          if(Array.isArray(this[arr])) this.$set(this[arr], i, false)
          else this[arr] = false
        }else{
          if(Array.isArray(this[arr]))  this.$set(this[arr], i, true)
          else this[arr] = true
        }
      },
      arrAllCheck(arr, length){
        let num = length;
        for(let i=0;i<=num;i++){
          this.$set(this[arr], i, true);
        }
      },
      fillZero(width, str){
        return String(str).length >= width ? str : new Array(width - String(str).length + 1).join('0')+str;
      },      
      toggleSlide(e, target){
        let $btn = $(e.currentTarget);
        let $cont = $(target)
        
        if($cont.is(':hidden')){
            $cont.slideDown();
            $btn.addClass('on');
        }else{
            $cont.slideUp();
            $btn.removeClass('on');
        }
      }
    }
  })
