import Vue from 'vue'

Vue.mixin({
    data(){
      return {
        title:'',
        titleData: {
            'notice': '공지사항',
            'qna': '문의내역',
            'event': '이벤트',
            'calendar': '캘린더'
        },
      }
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                if(to) this.title = this.titleData[to.path.split('/')[1]]
                console.log(this.title)
            }
        },
    },        
    mounted(){
        
    },
    methods: {
       
    }
  })