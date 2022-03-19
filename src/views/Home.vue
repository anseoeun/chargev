<template>
  <div class="index">
    <h2>Publishing work sheet</h2>
    <table>
    <colgroup>
      <col style="width:60px" />
      <!-- <col style="width:150px" />
      <col style="width:200px" /> -->
      <col style="width:35%" />
      <col style="width:35%" />
      <col style="width:auto" />
    </colgroup>

    <thead>
      <tr>
        <th></th>
        <!-- <th>depth1</th>
        <th>depth2</th> -->
        <th>페이지</th>
        <th>FileName/Link</th>
        <th>memo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, name, index) in titleData" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ value[1] }}</td>
        <td><router-link :to="'/'+name">{{ '/'+name }}</router-link></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
// import '../router/index.js'
export default {
  name: 'Home',
  components: {

  },
}
</script>

<style scoped>
  h2{font-size:20px;color: #000;}
  .index{padding:20px;font-size:12px;}
  .index table {width:100%; border-collapse:collapse; border:0px solid #666;margin-top:10px;}
  .index caption {text-align:left; font-size:200%; color:#999;}
  .index th {padding:6px; border:1px solid #fff; color:#fff; font-size:110%; background-color:#000;}
  .index td {height:16px; padding:4px; padding-left:10px; border:1px solid #666;}
  .index a,
  .index a:link, #mwork a:visited {color:#009; text-decoration:none;}
  .index a:hover, #mwork a:active {color:#00f; text-decoration:underline;}
  .index tr:hover td {background-color:#eee !important;}

  .classname{display:none;}
  .down{font-size:15px;margin-left:50px;}

  .modify{position:relative;color: #ff0000;}
  .modify .layer{display:none;position: absolute;top:0;right:0;padding:15px;color:#333;white-space:pre-line;width:500px;height:300px;overflow: hidden;overflow-y:auto;background:#fff;z-index:50;}
  .modify .layer xmp{white-space:pre-line;}
  .modify:hover .layer{display:block;}

  .title td{background:#eee;}

  .delete{text-decoration:line-through;}
  .delete td{ color:#aaa !important;}
  .notice{padding:5px 0;font-size: 13px;padding-left:20px;margin-top:15px;background:url('data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCwsSBQBIWRXaAAAA7klEQVQoz43STUpCYRjF8Z+vcmncqLKhO8iCaNoCrqCtogZFeLegOahJm+iS2jxaQRE0dqi4hgSpgfj9eUYP5/1zeHjek6mZKBKLnTsy0PWt5c1g/JiZgCUPCubVkWiOxgCy6ppLGAWv6rKQvYSaqnW6sOd9lFjegEFVmSDyOO8nkkX0SRRUHNumvKuceNGtr0Lj4HRrHhSDg0VvxY4chuntNyvo78T1g5+dwM+gvRPYDlLdrVhPmjNw52XWXXHHW78BqcbGvIZ03J4P+87WYM/u/Y37OHSjrLMEdVRcGzLbcCIVJSfy6PnSkk6/4x+rojPgRremOAAAAABJRU5ErkJggg==') no-repeat 0 7px;background-size:auto 15px;}
  .notice ~ .notice{margin-top:0;}

</style>
