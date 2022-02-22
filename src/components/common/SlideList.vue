<template>
    <div class="slide-list">
        <ul>
            <li v-for="(item, index) in data" :key="index" :data-id="String(index + 1)">
                <button @click=listToggle($event)>
                    <i class="i-arr-right"></i>
                    <slot name="header" :item="item" />
                </button>
                <!-- <slot name="content" :item="item" /> -->
                <div class="conts-wrap">
                    <div class="conts" v-html="item.content"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import $ from 'jquery'
export default {
    props:{
      data: {
        type: Array,
        default: () => []
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

