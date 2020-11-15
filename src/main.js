import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  render: h => h(App),

  methods: {
    showShadowBlock(action) {
      const shadowBlock = document.querySelector('#shadowBlock').classList;

      if(shadowBlock) {
        switch(action) {
          case 'show':
            shadowBlock.add('active');
            break;

          case 'hide':
            shadowBlock.remove('active');
            break;

          default:
            shadowBlock.toggle('active');
        }
      }
    }
  }
})