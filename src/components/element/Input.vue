<template>
  <input
    :type="type"    
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"      
    :maxlength="maxlength" 
    :autocomplete="autocomplete"    
    @input="onInput"
    @focus="onFocus"
    @blur="onFocusOut"
    :oninput="maxLength(maxlength)"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [String, Number],
      default: ''
    },         
    autocomplete: {
      type: String,
      default: ''
    },
  },
  methods: {
    onInput(e) {
      let value =  e.target.value
      let max = parseInt(this.maxlength)
      if (max !== '' && value.length > max){
        value = value.slice(0, max)
      }
      this.$emit('input', value)
    },    
    onFocus(e){
      document.querySelectorAll('.grident-bottom').forEach((el) => {
          if(!el.parentNode.parentNode.classList.contains('btm-layer')){
            el.style.display = 'none';
          }
      });
      if(document.querySelector('.footer'))  document.querySelector('.footer').style.display = 'none';
      this.$emit('focus', e);
    },
    onFocusOut(e){
      setTimeout(()=>{
          document.querySelectorAll('.grident-bottom').forEach((el) => {
              el.style.display = 'flex';
          });
          if(document.querySelector('.footer')) document.querySelector('.footer').style.display = 'block';
      }, 200)
      this.$emit('blur', e);
    },   
    maxLength(max){
      if(!max) return;
      return 'if (this.value.length > '+ max +') this.value = this.value.slice(0, '+ max +')';
    }  
  }
}
</script>