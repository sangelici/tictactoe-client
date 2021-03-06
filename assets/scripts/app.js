'use strict'

// reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('click', gameEvents.onCreateGame)
  $('.box').on('click', gameEvents.onUpdateGame)
  $('#show-games').on('click', gameEvents.onShowGames)
  $('.audio').on('click', gameEvents.onPlayMusic)
  $('.change-password').hide()
  $('.menu2').hide()
})
