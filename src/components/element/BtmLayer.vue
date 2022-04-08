<template>
    <div 
      ref="layerwrap" 
      class="btm-layer-wrap"
      :class="{on:visible}"
     >
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
        const layer = this.$refs.layer

        let startY= null;
        let dir = null;
        let menutop = 0 
        let over = 100;
        let close = false;
        let moveY = null;
        let flag = false        

        function touchMove(){
            if($(layer).find('.splide.slider').hasClass('ing')) return;

            let e = window.event;
            let touch = e.touches[0];

            moveY = Math.abs(menutop - parseInt(startY - touch.clientY));

            if(moveY > 20) flag = true; 
            if(flag) e.stopPropagation();
 
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
            flag = false
        }

        function touchStart(e){
            let touch = e.touches[0];
            menutop = 0;
            startY = touch.clientY;
            close = false;
        }

        layerwrap.addEventListener("touchstart", touchStart, true);
        layerwrap.addEventListener("touchmove",touchMove, true);
        layerwrap.addEventListener("touchend",touchEnd.bind(this), true);
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
