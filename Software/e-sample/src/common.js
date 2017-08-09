/**
 * Created by semanticbits on 8/8/17.
 */
let common = {
  setValueToStore: function (data, path, value) {
    localStorage.setItem(path, JSON.stringify(value))
  },
  setNewRegisteredData: function (path, value) {
    localStorage.setItem(path, JSON.stringify(value))
  },
  getTheDonarData: function () {
    let donardata = JSON.parse(localStorage.getItem('donors_data'))
    return donardata
  }
}
export default common
