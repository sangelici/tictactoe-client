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

const onCreateGameSuccess = function(responseData) {
  successMessage('Game has Started!')
  store.game = responseData.game
  $('#curtain').hide()
}

const onCreateGameFailure = function() {
  failureMessage('Try to start the game again')
}

const onUpdateGameSuccess = function(responseData) {
  store.game = responseData.game
  console.log(store.game)
}

const onShowGamesSuccess = function(responseData) {
  $('#game-stats').text(responseData.games.length)
}

const onShowGamesFailure = function() {
  store.games = $('#game-stats').text('No Game History')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onShowGamesSuccess,
  onShowGamesFailure
}
