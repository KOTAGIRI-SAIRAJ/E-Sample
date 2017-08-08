/**
 * Created by semanticbits on 8/8/17.
 */
import common from './common'
import './data'

let actions = {
  responseInterceptor: function (result, event, cb) {
    cb()
  },
  getDonarData: function (afterPopulate) {
    window.remoteController.donar_data(function (result, event, cb) {
      console.log(result)
      actions.responseInterceptor(result, event, function () {
        common.setValueToStore(window.bb, 'donors_data', result)
        afterPopulate()
      })
    })
  }
}
export default actions

