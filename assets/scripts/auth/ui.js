'use strict'

const store = require ('../store.js')



const successMessage = function(newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function(newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function() {
  successMessage(`You've signed up successfully!`)
}

const onSignUpFailure = function() {
  failureMessage(`Sign-Up failed, please enter a valid email and/or password`)
}

const onSignInSuccess = function(responseData) {
  successMessage(`You've signed in!`)
  store.user = responseData.user
}

const onSignInFailure = function() {
  failureMessage(`Entry Invalid. Please try to sign in again`)
}

const onChangePasswordSuccess = function() {
  successMessage(`Your password has been updated!`)
}

const onChangePasswordFailure = function() {
  failureMessage(`Entry failed, please enter a valid password`)
}

const onSignOutSuccess = function() {
  successMessage(`You have signed out!`)
}

const onSignOutFailure = function() {
  failureMessage(`Sign out attempt failed, please try to sign out again`)
}


module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
