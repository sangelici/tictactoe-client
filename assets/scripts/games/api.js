'use-strict'

const config = require ('../config.js')

const store = require ('../store.js')

const signUp = function(formData) {
  $.ajax ({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}


module.exports = {
  signUp
}
