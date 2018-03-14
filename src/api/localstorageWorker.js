export const localStorager = {
  getData: function ({key}) {
    return window.localStorage.getItem(key)
  },
  checkStorage: function () {
    if (window.sessionStorage && window.localStorage) {
      return true
    }
  },
  setData: function ({key, data}) {
    window.localStorage.setItem(key, data)
  }
}
