<template>
    <div class="slide-list" :class="setClass">
        <ul>
            <li v-for="(item, index) in data" :key="index" :data-id="String(index + 1)">
                <button class="btn" @click="listToggle($event)">
                    <slot name="header" :item="item" />
                </button>
                <div class="conts-wrap">
                    <slot name="content" :item="item" />
                    <div class="conts" v-html="item.content"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props:{
      data: {
        type: Array,
        default: () => []
      },
      setClass: {
        type: String,
        default: ''
      }
    },
    mounted(){

    },
    methods:{
        listToggle(e){
            let $btn = $(e.currentTarget);
            let $cont = $btn.next()
            
            if($cont.is(':hidden')){
                $cont.slideDown();
                $btn.addClass('on');
            }else{
                $cont.slideUp();
                $btn.removeClass('on');
            }
        }
    }
}
</script>

