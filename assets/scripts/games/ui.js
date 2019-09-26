'use strict'

const store = require ('../store.js')

const successMessage = function(newText) {
  $('#game-message').text(newText)
  $('#game-message').removeClass('failure')
  $('#game-message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function(newText) {
  $('#game-message').text(newText)
// removes success so it doesn't appear green
  $('#game-message').removeClass('success')
  $('#game-message').addClass('failure')
}

const onCreateGameSuccess = function(newText) {
  successMessage('Game has Started!')
}

const onCreateGameFailure = function(newText) {
  failureMessage('Try to start the game again')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure
}
