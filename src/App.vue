<template>
  <div class="app">
    <div id="shadowBlock" class="shadow_block"></div>

    <b-container>
      <Header />
      <Navigation />

      <main>
        <Slider />
        <Gallery />
      </main>

	    <Footer />
    </b-container>
  </div>
</template>
 
<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue'
import Slider from './components/Slider.vue'
import Gallery from './components/Gallery.vue'
import Footer from './components/Footer.vue'


import './styles/styles.min.css'

export default {
  name: 'app',

  components: {Header, Navigation, Slider, Gallery, Footer},

  data () {
    return {
      
    }
  }
}
</script>

<style lang="less">
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