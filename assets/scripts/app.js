'use strict'

//reference to bundle the file and use it in this file
const authEvents = require ('./auth/events')


$(() => {
  $('#gameboard').on('click', authEvents.onPlayerMove)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
