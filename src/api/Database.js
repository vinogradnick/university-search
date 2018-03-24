import localforage from 'localforage'

localforage.config({
  driver: localforage.indexedDB, // Force WebSQL; same as using setDriver()
  name: 'myApp',
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'university-search', // Should be alphanumeric, with underscores.
  description: 'some description'
})

localforage.setItem('key', 'value').then(function () {
  return localforage.getItem('key')
}).then(function (value) {
  // we got our value
}).catch(function (err) {
  // we got an error
})

export default localforage
