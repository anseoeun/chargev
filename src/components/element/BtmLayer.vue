<template>
    <div 
      ref="layerwrap" 
      class="btm-layer-wrap"
      :class="{on:visible}"
     >
     <div class="dim"></div>
      <div ref="layer" class="btm-layer" style="display:none">
          <template>
              <slot ref="content" name="content" />
          </template>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      closeChk: {
        type: Boolean,
        default: false
      },
    },
    watch: {
      visible(newVisible) {
        const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer
        
        if (newVisible) {
            setTimeout(()=>{
              $('body').css('overflow', 'hidden');
              $(layerwrap).slideDown(250);
              setTimeout(()=>{
                $(layer).slideDown(300);
              },300)
              $(layer).find('.splide__slide').on('scroll', function(e){
                e.stopPropagation(); 
                let el = $(this)
                el.addEventListener("touchstart", function(e){ e.stopPropagation() });
                el.addEventListener("touchmove", function(e){ e.stopPropagation() });
              });

              this.onClose()
            }, 100)
        }else{
          this.closeLayer()
        }
      }
    },
    methods:{
      onClose() {
        const layerwrap = this.$refs.layerwrap
        // const layerwrap = document.querySelector('body')
        const layer = this.$refs.layer

        let startY= null;
        let startX= null;
        let dir = null;
        let menutop = 0 
        let menuleft = 0 
        let over = 100;
        let close = false;
        let moveY = null;
        let moveX = null;

        function touchMove(){
            if($(layer).find('.splide.slider').hasClass('ing')){
              return;
            }

            let e = window.event;
            let touch = e.touches[0];
            // let style = $(layerwrap).find('.splide__list').attr('style');
            
            moveY = Math.abs(menutop - parseInt(startY - touch.clientY));
            moveX = Math.abs(menuleft - parseInt(startX - touch.clientX));
            
            e.stopPropagation()
            if(moveY < 30) return;
            $(layer).addClass('ing');
            $(layerwrap).find('.dim').show();
            if(moveX > 30){
              // console.log('a')
              // e.stopPropagation()
              //  $(layerwrap).find('.carousel').append('<div class="dim" style="opacity:0"></div>')
              //  $(layerwrap).find('.carousel .dim').on("touchmove",function(e){ 
              //    console.log('dimff')
              //    e.stopPropagation() 
              //  });
              // $('body').append('<style>.splide__list{'+style.split(';')[0]+' !important;}</style>')

            }
            // if(moveY >= 30){
            //   console.log('b')
            //   $(layerwrap).find('.splide__list').unbind('touchmove.temp');    
            // }
            
            if(startY > touch.clientY) dir = 'plus'
            else dir = 'minus'
            
            if(menutop - parseInt(startY - touch.clientY) >= 0) {
              $(layer).css('bottom',  parseInt(startY - touch.clientY) + 'px');
            }else{
              $(layer).css('bottom', 0);
            }

           if(dir == 'minus' && moveY > over){
                close = true;
            }else{
                close = false;
            }
        }

        function touchEnd(){  
            if(close) {
                this.closeLayer();
                setTimeout(()=>{
                  this.$emit('close');
                }, 300)
            }else{
                $(layer).css('bottom', 0);
                $('body').css('overflow', 'hidden');
            }

            $(layer).removeClass('ing');
            $(layerwrap).find('.dim').hide()
            // $(layerwrap).find('.splide__list').unbind('touchmove.temp');            
        }

        function touchStart(e){
            let touch = e.touches[0];
            menutop = 0;
            startY = touch.clientY;
            startX = touch.clientX;
            close = false;
        }

        $(layerwrap).on("touchstart",function(e){ touchStart(e); });
        $(layerwrap).find('*').on("touchstart",function(e){ touchStart(e); });

        $(layerwrap).off("touchmove");
        // $(layerwrap).on("touchmove", touchMove);
        $(layerwrap)[0].addEventListener("touchmove",touchMove, true);         
       
        $(layerwrap).off("touchend");
        $(layerwrap).on("touchend",touchEnd.bind(this))
      },
      closeLayer(){
        const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer

        $(layerwrap).slideUp()
        $(layerwrap).fadeOut()
        $(layer).slideUp(300, ()=>{
          $(layer).css('bottom', 0)
        })
        $('body').css('overflow', '');
      }      
    }
}
</script>
