<template>
    <div 
      ref="layerwrap" 
      class="btm-layer-wrap"
      :class="{on:visible}"
     >
      <div ref="layer" class="btm-layer" style="display:none">
        <button v-if="half && status ==='top'" class="btn-layer-close" @click="$emit('close');"><Icon type="close" /></button>        
        <button v-if="half && status ==='half'" class="btn-layer-half" @click="halfUp"><Icon type="arr-top" /></button>
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
      half: {
        type: Boolean,
        default: false
      },
    },
    data(){
      return{
        scrollTop: 0,
        isScrolling: false,
        bottom: this.half ? -150 : 0,
        halfBottom: -150,
        status: 'bottom'
      }
    },
    watch: {
      visible(newVisible) {
        const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer
        
        if (newVisible) {
            setTimeout(()=>{
              $('body').css('overflow', 'hidden');
              $(layerwrap).slideDown(150);
              setTimeout(()=>{
                $(layer).show()
                $(layer).css('bottom', '-100vh');
                $(layer).animate( { bottom: this.bottom }, 200, function(){
                 if(this.half) {
                   this.status = 'half';
                    $(layer).find('.cont-scroll').css('overflow', 'hidden');
                 }
                  this.$emit('opended');
                }.bind(this));
              },180)

              if(layer.querySelector('.splide__slide') || layer.querySelector('.cont-scroll')){
                let wrapper = layer.querySelector('.splide__slide') ? layer.querySelector('.splide__slide')
                  : layer.querySelector('.cont-scroll') ? layer.querySelector('.cont-scroll') : ''

                wrapper.addEventListener("scroll", (e)=>{
                  if(e.target.scrollTop <= 0){
                    setTimeout(()=>{
                      this.scrollTop = e.target.scrollTop;
                    }, 100)
                  }else{
                    this.scrollTop = e.target.scrollTop;
                    this.isScrolling = true
                  }
                });
              }

              this.onClose()
            }, 100)
        }else{
          this.closeLayer()
        }
      },
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
        let flag = false;

        function touchMove(){
          let e = window.event;
            if(e.target != layerwrap && this.isScrolling) return
            if($(layer).find('.splide.slider').hasClass('ing')) return;

            let touch = e.touches[0];

            moveY = Math.abs(menutop - parseInt(startY - touch.clientY));

            if(moveY > 30) flag = true; 
            if(flag) e.stopPropagation();
 
            if(startY > touch.clientY) dir = 'plus'
            else dir = 'minus'
            
            if(menutop - parseInt(startY - touch.clientY) >= 0) {
              if(this.status === 'top' && (this.bottom  + parseInt(startY - touch.clientY)) < this.halfBottom) return;
              $(layer).css('bottom', this.bottom  + parseInt(startY - touch.clientY) + 'px');
            }else{
              if(this.half){
                this.halfUp();
              }else{
                $(layer).css('bottom', 0);
              }
            }

           if(dir == 'minus' && moveY > over){
              if(this.half && this.status == 'top'){
               $(layer).animate( { bottom: this.halfBottom }, { queue:false, duration:200 })
               this.bottom = this.halfBottom 
               close = 'half';
              }else{
                close = true;
              }
            }else{
                close = false;
            }
        }

        function touchEnd(){  
            if(close == true) {
                this.closeLayer();
                setTimeout(()=>{
                  this.$emit('close');
                }, 300)
            }else if(close === 'half'){
              this.status = 'half'
              $(layer).find('.cont-scroll').css('overflow', 'hidden');
            }else{
                $(layer).css('bottom', this.bottom);
                $('body').css('overflow', 'hidden');
            }

            $(layer).removeClass('ing');
            flag = false;
            startY= null
            setTimeout(()=>{
              if(this.scrollTop == 0) this.isScrolling = false
            }, 150)
        }

        function touchStart(e){
          if(this.isScrolling) return
            let touch = e.touches[0];
            menutop = 0;
            startY = touch.clientY;
            close = false;
        }

        layerwrap.addEventListener("touchstart", touchStart, true);
        layerwrap.addEventListener("touchmove",touchMove.bind(this), true);
        layerwrap.addEventListener("touchend",touchEnd.bind(this), true);
      },
      halfUp(){
        const layer = this.$refs.layer

        $(layer).animate( { bottom: 0 }, { queue:false, duration:200 })
        $(layer).find('.cont-scroll').css('overflow', '');
        this.bottom = 0
        this.status = 'top'
      },
      closeLayer(){
        const layerwrap = this.$refs.layerwrap
        const layer = this.$refs.layer

        $(layerwrap).slideUp(200)
        $(layerwrap).fadeOut()
        $(layer).slideUp(150, ()=>{
          $(layer).css('bottom', 0)
        })
        setTimeout(()=>{
          $('body').css('overflow', '');
          this.status = 'bottom';
          this.bottom = this.half ? -150 : 0;
        }, 150);
      }      
    }
}
</script>
