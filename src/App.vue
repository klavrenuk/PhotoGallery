<template>
  <div class="app">
    <b-container>
      <Header />
      <Navigation />

      <main>
        <Slider />
        <Gallery />
      </main>

      <footer>
        Footer
      </footer>
    </b-container>
  </div>
</template>
 
<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue'
import Slider from './components/Slider.vue'
import Gallery from './components/Gallery.vue'

import './styles/styles.min.css'

export default {

  name: 'app',

  components: {Header, Navigation, Slider, Gallery},

  data () {
    return {
      
    }
  }
}
</script>