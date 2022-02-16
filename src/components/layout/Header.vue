<template>
    <div class="header">
        <div class="left">
            <router-link v-if="menus.back" to="/" class="btn"><Icon type="back" /></router-link>
            <!-- <router-link to="/"><i class="i-back"></i></router-link> -->
        </div>
       <h1 class="title">{{ title }}</h1>
       <div class="right">
           <router-link v-if="menus.view" to="/" class="btn c-blue">둘러보기</router-link>
           <router-link v-if="menus.tel" to="/" class="btn"><Icon type="tel" /></router-link>
           <router-link v-if="menus.home" to="/" class="btn"><Icon type="home" /></router-link>
       </div>
    </div>
</template>
<script>
// import EventBus from '@/js/EventBus';
export default {
    name: 'Header',
    data() {
        return {
            title: '',
            titleData: {
                'notice': '공지사항',
                'calendar': '캘린더'
            },
            menus: {
                back: false,
                view: false,
                tel: false,
                home: false
            }
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                this.title = this.titleData[to.path.split('/')[1]]
            }
        },
    },    
    mounted(){
        this.setMenus()
    },
    methods: {
        setMenus(){
            if(this.title === '공지사항') {
                this.menus.back = true
                this.menus.home = true
            }
        }
    }
};
</script>
