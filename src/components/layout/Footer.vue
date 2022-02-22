<template>
    <div class="footer">
       <div class="footer-menu">
           <router-link to="/" class="menu" :class="{ on : menus['charging-station'] }"><span class="icon"><i class="i-foot-charging-station"></i></span><span class="txt">충전소찾기</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menus['route-recommend'] }"><span class="icon"><i class="i-foot-route-recommend"></i></span><span class="txt">경로추천</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menus['instant-charge'] }"><span class="icon"><i class="i-foot-instant-charge"></i></span><span class="txt">즉시충전</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menus['favorites'] }"><span class="icon"><i class="i-foot-favorites"></i></span><span class="txt">즐겨찾기</span></router-link>
           <router-link to="/" class="menu"><span class="icon"><i class="i-foot-more"></i></span><span class="txt">더보기</span></router-link>
       </div>
    </div>
</template>
<script>
// import EventBus from '@/js/EventBus';
export default {
    name: 'Header',
    data() {
        return {
            menus: {
                'charging-station': false,
                'route-recommend': false,
                'instant-charge': false,
                'favorites': false
            }
        }
    },

    mounted(){
        this.setMenus()
    },
    methods: {
        setMenus(){
            if(this.title === '케이스') {
                 this.menus['charging-station'] = true
            }
        }
    }
};
</script>