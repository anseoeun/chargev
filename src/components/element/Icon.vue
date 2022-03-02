<template>
    <i v-if="type === 'home'" :class="cls"><svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.901525 7.79682L9.40152 1.44708C9.75646 1.18193 10.2435 1.18193 10.5985 1.44708L19.0985 7.79682C19.3512 7.9856 19.5 8.28254 19.5 8.59797V22C19.5 22.5523 19.0523 23 18.5 23H14.4926C14.0293 23 13.6538 22.6245 13.6538 22.1613V17.428C13.6538 15.4101 12.018 13.7742 10 13.7742C7.98204 13.7742 6.34615 15.4101 6.34615 17.428V22.1613C6.34615 22.6245 5.97065 23 5.50745 23H1.5C0.947715 23 0.5 22.5523 0.5 22V8.59796C0.5 8.28254 0.648823 7.9856 0.901525 7.79682Z" stroke="#17233D"/> </svg> </i>
    <i v-else-if="type === 'back'" :class="cls"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 9H2M2 9L8.85714 17M2 9L8.85714 1" stroke="black" stroke-width="2"/> </svg> </i>
    <i v-else-if="type === 'tel'" :class="cls"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.57375 2.75958L3.62623 1.70711C4.01675 1.31658 4.64992 1.31658 5.04044 1.70711L8.95956 5.62623C9.35008 6.01675 9.35008 6.64992 8.95956 7.04044L7.36233 8.63767C7.14595 8.85405 7.09231 9.18461 7.22916 9.45831C8.81137 12.6227 11.3773 15.1886 14.5417 16.7708C14.8154 16.9077 15.1459 16.8541 15.3623 16.6377L16.9596 15.0404C17.3501 14.6499 17.9833 14.6499 18.3738 15.0404L22.2929 18.9596C22.6834 19.3501 22.6834 19.9833 22.2929 20.3738L21.2404 21.4263C19.1754 23.4913 15.9235 23.7695 13.5377 22.0854L12 21L8.99555 18.5964C7.66927 17.5354 6.46459 16.3307 5.40356 15.0044L3 12L1.91458 10.4623C0.230456 8.07648 0.50874 4.82459 2.57375 2.75958Z" stroke="black"/> </svg> </i>

</template>
<script>
    const Component = {
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
        data(){
            return {
                cls: 'i-'+ this.type + (this.icoClass ? ' ' + this.icoClass : '')
            }
        },
        mounted(){
            let svgprevent = document.createElement('span')
            svgprevent.classList.add('svg-prevent')
            document.querySelector('.i-'+this.type).prepend(svgprevent)
    console.log(this)
        }
    }

    export default Component
</script>
