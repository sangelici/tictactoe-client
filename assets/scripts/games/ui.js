const store = require ('../store.js')

const successMessage = function(newText) {
  $('#message').text(newText)
// Connected to index.scss file
// removes failure so it doesn't appear red
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function(newText) {
  $('#message').text(newText)
// removes success so it doesn't appear green
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function() {
  successMessage(`You've signed up successfully!`)
}

const onSignUpFailure = function() {
  failureMessage(`Sign-Up failed, please enter a valid email and/or password`)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
