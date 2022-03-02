<template>
    <div class="footer">
       <div class="footer-menu">
           <router-link to="/" class="menu" :class="{ on : menus['search'] }"><span class="icon"><i class="i-foot-search"></i></span><span class="txt">검색조건</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menus['origin'] }"><span class="icon"><i class="i-foot-origin"></i></span><span class="txt">현재위치로</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menus['mapsearch'] }"><span class="icon"><i class="i-foot-mapsearch"></i></span><span class="txt">지도상검색</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menus['favorites'] }"><span class="icon"><i class="i-foot-favorites"></i></span><span class="txt">즐겨찾기</span></router-link>
           <router-link to="/" class="menu" :class="{ on : menus['legend'] }"><span class="icon"><i class="i-foot-legend"></i></span><span class="txt">범례</span></router-link>
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
                'search': false,
                'origin': false,
                'mapsearch': false,
                'favorites': false,
                'legend': false
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