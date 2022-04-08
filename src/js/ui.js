import Vue from 'vue'

Vue.mixin({
    data(){
      return {
        // headerTitle:'',
        // title:'',
      }
    },
    watch: {
        // $route: {
        //     immediate: true,
        //     handler(to) {
        //       if(to){
        //         // console.log(this.titleData[to.path.split('/')[1]][0])
        //        let path = this.titleData[to.path.split('/')[1]];
        //         if(path && path.length > 0){
        //             this.headerTitle = path[0]
        //             this.title = path[1]
        //         }
        //       }
        //     }
        // },
    },        
    created(){
      
    },
    mounted(){
      
    },
    methods: {
      checkIcon(e, arr, i){
        e.stopPropagation();
        e.preventDefault  ();
        const el = e.currentTarget.querySelector('i')
        if(el.classList.contains('on')){
          if(Array.isArray(this[arr])) this.$set(this[arr], i, false)
          else this[arr] = false
        }else{
          if(Array.isArray(this[arr]))  this.$set(this[arr], i, true)
          else this[arr] = true
        }
      },
      maxLength(max){
        return 'if (this.value.length > '+ max +') this.value = this.value.slice(0, '+ max +')';
      }      
    }
  })
