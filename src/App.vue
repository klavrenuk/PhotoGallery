<template>
  <div class="app">
    <div id="shadowBlock" class="shadow_block"></div>

    <b-container>
      <Header />

      <main>
        <router-view />
      </main>

	    <Footer />
    </b-container>
  </div>
</template>
 
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'app',

  components: {Header, Footer}
}
</script>

<style lang="less">
  @import './src/styles/styles';

  .shadow_block {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    background: rgba(0,0,0, .5);
  }
</style>