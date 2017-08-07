/**
 * Created by semanticbits on 7/8/17.
 */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.component('sample', {
  template: '#sample-template',
  data () {
    return {
      msg: 'Hai',
      rr: false,
      pp: true
    }
  }
})
Vue.component('register', {
  template: '#register-template',
  data () {
    return {
      msg1: 'bye'
    }
  }
})
new Vue({
  data () {
    return {
    }
  }
}).$mount('#app')
