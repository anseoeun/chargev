<template>
    <div 
      ref="layerwrap" 
      class="btm-layer-wrap"
     >
      <div ref="layer" class="btm-layer">
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
              $(layerwrap).slideDown()
              $(layer).slideDown()
              $('.btm-layer .scroll').on('scroll', function(e){
                e.stopPropagation(); 
                let el = document.querySelector('.scroll')
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
        let move = null;

        function touchMove(){
            let e = window.event;
            e.stopPropagation();

            let touch = e.touches[0];
            move = Math.abs(menutop - parseInt(startY - touch.clientY));

            if(move < 30) return;

            if(startY > touch.clientY) dir = 'plus'
            else dir = 'minus'
            
            if(menutop - parseInt(startY - touch.clientY) >= 0) {
              $(layer).css('bottom',  parseInt(startY - touch.clientY) + 'px');
            }else{
              $(layer).css('bottom', 0);
            }

           if(dir == 'minus' && move > over){
                close = true;
            }else{
                close = false;
            }
        }

        function touchEnd(){  
            let e = window.event;
            e.stopPropagation();

            if(close) {
                this.closeLayer();
                setTimeout(()=>{
                  this.$emit('close');
                }, 300)
            }else{
                $(layer).css('bottom', 0);
                $('body').css('overflow', 'hidden');
            }
        }

        $(layerwrap).on("touchstart",function(e){  
            e.stopPropagation();

            let touch = e.touches[0];
            menutop = 0;
            startY = touch.clientY;
            close = false;
        });

        $(layerwrap).off("touchmove");
        $(layerwrap).on("touchmove",touchMove);         
       
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
