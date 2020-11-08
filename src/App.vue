<template>
  <div class="app">
    <Header />

    <nav>
      Navigation
    </nav>

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
import Header from './components/Header.Component.vue';
import './styles/styles.min.css'

export default {

  name: 'app',

  components: {Header},

  data () {
    return {
      
    }
  }
}
</script>