<template>
  <div class="app">
    <Header />
    <Navigation />

    <main>
      This need for circle
      <section>
        Photo
      </section>
    </main>

    <footer>
      Footer
    </footer>
  </div>
</template>
 
<script>
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue'

import './styles/styles.min.css'

export default {

  name: 'app',

  components: {Header, Navigation},

  data () {
    return {
      
    }
  }
}
</script>