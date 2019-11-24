'use strict'

const store = require('../store.js')
const gameLogic = require('../games/events.js')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
  setInterval(function () { successMessage('') }, 2000)
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  setInterval(function () { failureMessage('') }, 2000)
}

const onSignUpSuccess = function () {
  successMessage(`You've signed up successfully!`)
  $('.sign-up').hide()
}

const onSignUpFailure = function () {
  failureMessage('Sign-Up failed, please enter valid email')
}

const onSignInSuccess = function (responseData) {
  successMessage('You\'ve signed in!')
  store.user = responseData.user
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.change-password').show()
  $('.sign-out').show()
  $('#create-game').text('START').show()
  $('#show-games').show()
  $('#curtain').text('Press Start!')
  $('#tile-taken').show()
  $('#game-message').text('').show()
  $('#game-stats').show()
}

const onSignInFailure = function () {
  failureMessage('Entry Invalid. Please try to sign in again')
}

const onChangePasswordSuccess = function () {
  successMessage('Password updated!')
  $('#message').show()
}

const onChangePasswordFailure = function () {
  failureMessage(`Entry failed, PLease enter valid password`)
  $('#message').show()
}

const onSignOutSuccess = function () {
  successMessage(`Signed out!`)
  $('.sign-up').show()
  $('.sign-in').show()
  $('.change-password').hide()
  $('.menu2').hide()
  $('#tile-taken').hide()
  $('#game-message').hide()
  $('#game-stats').hide()
  $('.box').text('')
  $('.box').css('border-color', '#728CFF')
  $('#curtain').text('Sign Up or Sign In to play!')
  $('#curtain').show()
  $('.box').off('click', gameLogic.onBoxClicked)
}

const onSignOutFailure = function () {
  failureMessage(`Sign out failed, please try again`)
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
