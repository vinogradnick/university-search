function checkStorage ({data}) {
  if (window.sessionStorage && window.localStorage) {
    window.localStorage.setItem('universitylist', data)
  }
}
const getData = ({key}) => { return window.localStorage.getItem(key) }
const setData = ({key, data}) => { window.localStorage.setItem(key, data) }
