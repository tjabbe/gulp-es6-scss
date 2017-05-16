import Default from './Default'

class App {
  constructor () {
    this._init()
  }

  _init() {
    console.log('App loaded!')
    this._default = new Default()
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  const app = new App()
})