import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
 

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  router ,
  render: h => h(App),

  methods: {
    showShadowBlock(action) {
      const shadowBlock = document.querySelector('body').classList;

      if(shadowBlock) {
        switch(action) {
          case 'show':
            shadowBlock.add('shadow');
            break;

          case 'hide':
            shadowBlock.remove('shadow');
            break;

          default:
            shadowBlock.toggle('shadow');
        }
      }
    }
  }
})