'use-strict'

const api = require('./api.js')
const ui = require('./ui.js')



const onPlayerMove = function(box) {
  console.log('clicked!')
}

const onSignUp = function(event) {
  event.preventDEfault()
  const form = event.target
  const formData = getFieldForms(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onPlayerMove,
  onSignUp
}
