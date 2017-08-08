/**
 * Created by semanticbits on 8/8/17.
 */
let common = {
  setValueToStore: function (data, path, value) {
    console.log('set value to store')
    console.log(data)
    console.log(path)
    console.log(value)
    localStorage.setItem(path, JSON.stringify(value))
    console.log('set value to store')
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
