<template>
  <div>
      <!-- <time-picker
        v-model="now"
        format="HH:mm"
        :pattern="{
            hour: 'A hh',
            minute: 'mm',
            dividerTime: ','
        }"
        /> -->
        <!-- <template v-slot:activator="{ on }">
    <button
      class="button is-primary"
      v-on="on"
    >
      {{ now }}
    </button>
  </template> 
</time-picker>-->
<time-picker
  v-model="now"
  dialog
    format="HH:mm"
    :pattern="{
        hour: 'hh',
        minute: 'mm',
    }"  
>
  <template v-slot:activator="{ on }">
    <button
      class="button is-primary"
      v-on="on"
    >
      {{ now }}
    </button>
  </template>
</time-picker>
<input type="text" v-model="now">
  </div>
</template>

<script>
// https://www.telerik.com/kendo-vue-ui/components/dateinputs/timepicker/formats/
// https://docs.telerik.com/devtools/maui/controls/timepicker/timepicker-templates

// https://www.plus-one.tech/vue-drumroll-datetime-picker/
import { TimePicker } from 'vue-drumroll-datetime-picker'
import 'vue-drumroll-datetime-picker/dist/style.css'
export default {
  components: {
    // DateTimePicker,
    // DatePicker,
    TimePicker
  },  
  data() {
    return {
        now:'12:00'
    }
  },
  mounted(){

  },
  methods: {
   
  }
};
</script>
