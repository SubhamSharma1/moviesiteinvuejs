<template>
  <Layout>
    <router-view></router-view>
    </Layout>

</template>

<script>
import Layout from './layout/Layout.vue';
import Home from './views/Home.vue';
export default {

  components:{
    Layout,
    Home
  }
}
</script>

<style>

</style>