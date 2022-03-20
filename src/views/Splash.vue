<template>
  <div class="splash-wrap">
      <div class="reveal"></div>
  </div>
</template>

<script>

export default {
  data(){
    return{
    }
  },
  mounted(){
   this.splash()
  },
  methods: {
    splash(){
      let delay = 0.3;
      let revealText = document.querySelector(".reveal");
      let letters = [
        '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 10.0551V10.0005C0 4.50311 4.12204 0 10.0298 0C13.6564 0 15.8275 1.21542 17.6137 2.98327L14.9207 6.10521C13.4372 4.75113 11.9254 3.92278 10.002 3.92278C6.76002 3.92278 4.42424 6.63015 4.42424 9.94492V10.0005C4.42424 13.3151 6.70473 16.0772 10.002 16.0772C12.2007 16.0772 13.5468 15.1931 15.0578 13.8121L17.7511 16.5474C15.7724 18.6744 13.5743 20 9.86468 20C4.20408 20 0 15.6079 0 10.0551Z" fill="white"/> </svg>',
        '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.516083 1.90735e-06H4.71876V7.7954H12.4692V1.90735e-06H16.6717V19.6992H12.4692V11.7916H4.71876V19.6992H0.516083V1.90735e-06Z" fill="white"/> </svg> </svg>',
        '<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.0326 -1.90735e-06H11.2838L4.9691 16.0695H0.694092V19.8496H3.48363H8.05838H8.05918L13.1031 5.96916L18.1477 19.8496H22.8332L15.0326 -1.90735e-06Z" fill="white"/> </svg>',
        '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.20595 9.56814C11.2642 9.56814 12.444 8.443 12.444 6.78249V6.72607C12.444 4.86849 11.1814 3.91221 9.12322 3.91221H4.92429V9.56814H9.20595ZM0.697845 1.90735e-06H9.48007C11.9226 1.90735e-06 13.8162 0.703413 15.0787 1.99801C16.1491 3.09555 16.7258 4.64384 16.7258 6.5008V6.55722C16.7258 9.73699 15.051 11.735 12.6086 12.6639L17.3022 19.6992H12.362L8.24504 13.3955H8.18981H4.92429V19.6992H0.697845V1.90735e-06Z" fill="white"/> </svg>',
        '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.11969 10.0551V10.0005C0.11969 4.50311 4.36082 0 10.1613 0C13.6087 0 15.6888 0.93951 17.6856 2.65178L15.0315 5.88408C13.5546 4.64116 12.2407 3.92278 10.0248 3.92278C6.96007 3.92278 4.52498 6.65784 4.52498 9.94492V10.0005C4.52498 13.5362 6.93324 16.1326 10.3257 16.1326C11.8577 16.1326 13.2261 15.7457 14.2933 14.9728V12.2098H10.0524V8.53605H18.3695V16.9334C16.4001 18.619 13.6911 20 10.189 20C4.22408 20 0.11969 15.7736 0.11969 10.0551Z" fill="white"/> </svg>',
        '<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.04058 7.85194V3.85575H15.3547V1.90735e-06H0.832458V19.6992H15.4922V15.8435H5.04058V11.7069H11.1532V7.85194H5.04058Z" fill="white"/> </svg>',
        '<svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23 -1.90735e-06H20.2108H15.6355H15.6353L10.5911 13.8807L5.5465 -1.90735e-06H0.860901L8.66189 19.8496H12.4106L18.7255 3.77996H23V-1.90735e-06Z" fill="white"/> </svg>',
      ]

      revealText.textContent = "";

      let middle = letters.filter(e => e !== " ").length / 2.5;

      letters.forEach((letter, i) => {
        let tag = document.createElement('i')
        tag.classList.add('i-letter')
        tag.insertAdjacentHTML( 'beforeend', letter );
        setStyle(tag, i)
        revealText.append(tag);
      })     

      function setStyle(el, i){
          const w = el.querySelector('svg').getAttribute('width')
           const h = el.querySelector('svg').getAttribute('height')
           el.style.width = rem(w);
           el.style.height = rem(h);
           el.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
           function rem(value){
               return (value / 28) * 1.95 + 'rem'
           }
       }      
    },
  }
}
</script>
