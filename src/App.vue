<template>
  <div class="app">
    <b-container>
      <Header />
      <Navigation />

      <main>
        <Slider />

        This need for circle
        <section>
          Photo
        </section>
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

import './styles/styles.min.css'

export default {

  name: 'app',

  components: {Header, Navigation, Slider},

  data () {
    return {
      
    }
  }
}
</script>