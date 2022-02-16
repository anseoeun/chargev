<template>
  <div class="contents">
    <div class="notice-wrap">
      <SlideList>
        <template slot="header">
          header
        </template>
        <template slot="content">
          content
        </template>
      </SlideList>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Notice',
  components: {
    
  },
   mounted(){
    $('ul li button').on('click', function(){
      console.log('message')
    })
  }
}
</script>
