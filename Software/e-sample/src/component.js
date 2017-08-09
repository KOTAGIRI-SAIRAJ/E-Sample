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
import common from './common'
import VueBootstrapTable from 'vue2-bootstrap-table2'
import vSelect from 'vue-select'

let tabledonarData = []
let citiesForAutoCompleter = []
let bloodgroupForDropDown = []
Vue.use(BootstrapVue)
Vue.use(VueRouter)
window.bb = {}
window.bb.routes = [
  {
    path: '/search',
    component: {
      template: '#search-template',
      components: {
        VueBootstrapTable: VueBootstrapTable,
        vSelect: vSelect
      },
      beforeCreate () {
        let donardata = common.getTheDonarData()
        tabledonarData = []
        citiesForAutoCompleter = []
        donardata.forEach((eachRecord) => {
          let flag = 0
          let eachRecordObj = {
            'Id': moment(eachRecord.Id, 'YYYY-MM-DD').format('YYYY-MM-DD'),
            'bloodGroup': eachRecord.blood_group,
            'city': eachRecord.city,
            'current_date': eachRecord.current_date,
            'dob': eachRecord.dob,
            'e_email': eachRecord.e_email,
            'e_phone': eachRecord.e_phone,
            'end_date': eachRecord.end_date,
            'firstName': eachRecord.firstName,
            'lastName': eachRecord.lastName,
            'occupation': eachRecord.occupation,
            'p_email': eachRecord.p_email,
            'p_phone': eachRecord.p_phone,
            'recent_donar': false
          }
          let eachCityObject = eachRecord.city
          let eachBloodGroupObject = eachRecord.blood_group
          tabledonarData.push(eachRecordObj)
          if (citiesForAutoCompleter.length === 0) {
            citiesForAutoCompleter.push(eachCityObject)
            flag = 1
          } else {
            citiesForAutoCompleter.forEach((eachCity) => {
              if (eachCity === eachRecord.city) {
                flag = 1
              }
            })
          }
          if (flag === 0) {
            citiesForAutoCompleter.push(eachCityObject)
          }
          flag = 0
          if (bloodgroupForDropDown.length === 0) {
            bloodgroupForDropDown.push(eachBloodGroupObject)
            flag = 1
          } else {
            bloodgroupForDropDown.forEach((eachBloodGroup) => {
              if (eachBloodGroup === eachRecord.blood_group) {
                flag = 1
              }
            })
          }
          if (flag === 0) {
            bloodgroupForDropDown.push(eachBloodGroupObject)
          }
        })
      },
      data () {
        return {
          columns: [
            {
              title: 'Id'
            },
            {
              title: 'firstName',
              path: 'firstName',
              visible: true,
              editable: true
            },
            {
              title: 'lastName',
              path: 'lastName',
              visible: true,
              editable: true
            },
            {
              title: 'occupation',
              path: 'occupation',
              visible: true,
              editable: true
            },
            {
              title: 'dob',
              path: 'dob',
              visible: true,
              editable: true
            },
            {
              title: 'bloodGroup',
              path: 'bloodGroup',
              visible: true,
              editable: true
            },
            {
              title: 'city',
              path: 'city',
              visible: true,
              editable: true
            },
            {
              title: 'p_email',
              path: 'p_email',
              visible: true,
              editable: true
            },
            {
              title: 'p_phone',
              path: 'p_phone',
              visible: true,
              editable: true
            },
            {
              title: 'e_email',
              path: 'e_email',
              visible: true,
              editable: true
            },
            {
              title: 'e_phone',
              path: 'e_phone',
              visible: true,
              editable: true
            }
          ],
          values: tabledonarData,
          options: citiesForAutoCompleter,
          bloodGroupdata: bloodgroupForDropDown
        }
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
            p_email: '',
            p_phone: '',
            e_email: '',
            e_phone: '',
            recent_donar: '',
            current_date: '',
            end_date: ''
          }
        }
      },
      methods: {
        donarRegistration: function () {
          this.registered_donar_data.Id = moment().format()
          const d = common.getTheDonarData()
          d.push(this.registered_donar_data)
          common.setNewRegisteredData('donors_data', d)
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
    return {
      bb: window.bb
    }
  }
})
Vue.component('headertemplate', {
  template: '#header-template',
  data () {
    return {
      bb: window.bb
    }
  }
})
let router = new VueRouter({
  mode: 'history',
  routes: window.bb.routes
})
new Vue({
  router: router,
  mounted () {
    console.log(window)
    actions.getDonarData(function () {
      console.log('populate Donors')
    })
    // vm.$router.replace({path: window.bb.basePath + '/home'})
  },
  data () {
    return {
      bb: window.bb
    }
  }
}).$mount('#app')
