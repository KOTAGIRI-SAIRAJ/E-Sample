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
  }
}
export default common
