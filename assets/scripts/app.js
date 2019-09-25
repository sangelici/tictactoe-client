'use strict'

//reference to bundle the file and use it in this file
const events = require ('./games/events')


$(() => {
  $('#gameboard').on('click', events.onPlayerMove)
  $('sign-up').on('submit', events.onSignUp)
})
