<template>
   
<HeaderVue/>
<slot/>
<FooterVue/>  
</template>

<script>
import FooterVue from './Footer.vue'
import HeaderVue from './Header.vue'
export default {
components:{
HeaderVue,
FooterVue


}
}
</script>

<style>

</style>