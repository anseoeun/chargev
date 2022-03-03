<template>
    <i v-if="type === 'home'" :class="cls"><svg width="17" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.40655 5.86153L7.40655 1.43757C7.75941 1.17739 8.24059 1.17739 8.59345 1.43757L14.5935 5.86153C14.8491 6.05003 15 6.34877 15 6.6664V16C15 16.5523 14.5523 17 14 17H11.3023C10.9654 17 10.6923 16.7269 10.6923 16.39V12.9826C10.6923 11.4957 9.48692 10.2903 8 10.2903C6.51308 10.2903 5.30769 11.4957 5.30769 12.9826V16.39C5.30769 16.7269 5.0346 17 4.69772 17H2C1.44772 17 1 16.5523 1 16V6.6664C1 6.34877 1.1509 6.05003 1.40655 5.86153Z" stroke="black" stroke-width="2"/> </svg> </i>
    <i v-else-if="type === 'home-red'" :class="cls"><svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.40152 7.79682L9.90152 1.44708C10.2565 1.18193 10.7435 1.18193 11.0985 1.44708L19.5985 7.79682C19.8512 7.9856 20 8.28254 20 8.59797V22C20 22.5523 19.5523 23 19 23H14.9926C14.5293 23 14.1538 22.6245 14.1538 22.1613V17.428C14.1538 15.4101 12.518 13.7742 10.5 13.7742C8.48204 13.7742 6.84615 15.4101 6.84615 17.428V22.1613C6.84615 22.6245 6.47065 23 6.00745 23H2C1.44772 23 1 22.5523 1 22V8.59796C1 8.28254 1.14882 7.9856 1.40152 7.79682Z" stroke="url(#paint0_linear_149_3943)" stroke-width="2"/> <defs> <linearGradient id="paint0_linear_149_3943" x1="-5.13717" y1="8.10619" x2="9.81881" y2="28.1003" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF8800"/> <stop offset="1" stop-color="#E63535"/> </linearGradient> </defs> </svg> </i>
    <i v-else-if="type === 'back'" :class="cls"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 9H2M2 9L8.85714 17M2 9L8.85714 1" stroke="black" stroke-width="2"/> </svg> </i>
    <i v-else-if="type === 'back-red'" :class="cls"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 9H2M2 9L8.85714 17M2 9L8.85714 1" stroke="url(#paint0_linear_1_4443)" stroke-width="2"/> <defs> <linearGradient id="paint0_linear_1_4443" x1="23.1681" y1="11.8319" x2="12.8319" y2="-4.16814" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF8800"/> <stop offset="1" stop-color="#E63535"/> </linearGradient> </defs> </svg> </i>
    <i v-else-if="type === 'tel'" :class="cls"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.57375 2.75958L3.62623 1.70711C4.01675 1.31658 4.64992 1.31658 5.04044 1.70711L8.95956 5.62623C9.35008 6.01675 9.35008 6.64992 8.95956 7.04044L7.36233 8.63767C7.14595 8.85405 7.09231 9.18461 7.22916 9.45831C8.81137 12.6227 11.3773 15.1886 14.5417 16.7708C14.8154 16.9077 15.1459 16.8541 15.3623 16.6377L16.9596 15.0404C17.3501 14.6499 17.9833 14.6499 18.3738 15.0404L22.2929 18.9596C22.6834 19.3501 22.6834 19.9833 22.2929 20.3738L21.2404 21.4263C19.1754 23.4913 15.9235 23.7695 13.5377 22.0854L12 21L8.99555 18.5964C7.66927 17.5354 6.46459 16.3307 5.40356 15.0044L3 12L1.91458 10.4623C0.230456 8.07648 0.50874 4.82459 2.57375 2.75958Z" stroke="black"/> </svg> </i>
    <i v-else-if="type === 'arr-right'" :class="cls"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 9L16 9M16 9L9.14286 1M16 9L9.14286 17" stroke="black" stroke-width="2"/> </svg> </i>
    <i v-else-if="type === 'arr-right-red'" :class="cls"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 9H16M16 9L9.14286 1M16 9L9.14286 17" stroke="url(#paint0_linear_1_7973)" stroke-width="2"/> <defs> <linearGradient id="paint0_linear_1_7973" x1="-5.16814" y1="6.16814" x2="5.16814" y2="22.1681" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF8800"/> <stop offset="1" stop-color="#E63535"/> </linearGradient> </defs> </svg> </i>
    <i v-else-if="type === 'answer-complete'" :class="cls"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="16" height="16" rx="4" fill="black"/> <circle cx="8.00006" cy="7.99982" r="5.25714" fill="white"/> <path d="M4.5 7L7.5 10L11.5 6" stroke="black"/> </svg> </i>
    <i v-else-if="type === 'answer-wating'" :class="cls"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="16" height="16" rx="4" fill="#A3A9A4"/> <circle cx="8.00006" cy="7.99982" r="5.25714" fill="white"/> <path d="M7.7016 10.6642H8.3096V6.70416H7.7016V10.6642ZM7.6936 5.90416H8.3176V5.26416H7.6936V5.90416Z" fill="#A3A9A4"/> </svg> </i>

</template>
<script>
export default {
  name: 'Icon',
  props: {
      type:{
          type: String,
          default: null,
      },
      icoClass:{
          type: String,
          default: null,
      },
  },
  components: {
    
  },
  data(){
    return {
        cls: 'i-'+ this.type + (this.icoClass ? ' ' + this.icoClass : '')
    }
  },
   mounted(){
    this.setSvgPrevent();
    this.setStyle();
  },
   methods: {
       setSvgPrevent(){
           if(this.$el.querySelector('.svg-prevent')) return;
           let svgprevent = document.createElement('span')
           svgprevent.classList.add('svg-prevent')
           this.$el.prepend(svgprevent)
       },
       setStyle(){
           const w = this.$el.querySelector('svg').getAttribute('width')
           const h = this.$el.querySelector('svg').getAttribute('height')
           this.$el.style.width = rem(w);
           this.$el.style.height = rem(h);
           function rem(value){
               return (value / 28) * 2 + 'rem'
           }
       }
   }  
}
</script>
