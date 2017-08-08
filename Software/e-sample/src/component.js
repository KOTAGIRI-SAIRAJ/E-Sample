/**
 * Created by semanticbits on 7/8/17.
 */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import actions from './actions'
import moment from 'moment'
Vue.use(BootstrapVue)
Vue.use(VueRouter)
window.bb = {}
window.bb.routes = [
  {
    path: '/search',
    component: {
      template: '#search-template',
      data () {
        return { }
      }
    }
  },
  {
    path: '/register',
    component: {
      template: '#register-template',
      data () {
        return {
          registered_donar_data: {
            Id: '',
            firstName: '',
            lastName: '',
            occupation: '',
            dob: '',
            blood_group: '',
            city: '',
            p_emial: '',
            p_phone: '',
            e_email: '',
            e_phone: '',
            recent_donar: '',
            current_date: '',
            end_date: ''
          },
          totalData: []
        }
      },
      created () {
        console.log('Hi From Created')
      },
      methods: {
        donarRegistration: function () {
          console.log('from DonarRegistration Data')
          this.registered_donar_data.Id = moment().format()
          this.totalData.push(this.registered_donar_data)
          console.log('form Regisration')
        }
      }
    }
  },
  {
    path: '/post',
    component: {
      template: '#post-template',
      data () {
        return { }
      }
    }
  }
]
Vue.component('home', {
  template: '#home-template',
  data () {
    return { }
  }
})
Vue.component('headertemplate', {
  template: '#header-template',
  data () {
    return { }
  }
})
let router = new VueRouter({
  mode: 'history',
  routes: window.bb.routes
})
new Vue({
  router: router,
  mounted () {
    console.log('mounted')
    console.log(window)
    actions.populateDonors(function () {
      console.log('populate Donors')
    })
    console.log('mounted')
    // vm.$router.replace({path: window.bb.basePath + '/home'})
  },
  data () {
    return { }
  }
}).$mount('#app')
