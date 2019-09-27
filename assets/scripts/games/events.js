'use-strict'

//const getFormFields = require ('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require ('../store.js')

const onCreateGame = function(event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
}

const onUpdateGame = function(event) {
  event.preventDefault()
  store.id = $(event.target).attr('data-cell-index')
  //console.log('did this work', store.id)
  // api.updateGame()
  //   .then(ui.onUpdateGameSuccess)
}


//GAME LOGIC

//i need to make the letter variable accessible so that I can put it into my api

const gameboard = ["","","", "","","","","",""]

let playerTurn = true

const onBoxClicked = function(event) {
  event.preventDefault()
  let letter = playerTurn ? 'X' : 'O'
  api.updateGame(event.target.id, letter,/*parameter that identifies the symbol*/)
    .then(ui.onUpdateGameSuccess)
  //if player1 goes, the next input should be 'o'
  if ($(event.target).html() === ""){
    $(event.target).html(letter)
  } else if($(event.target).html() === "X"||$(event.target).html() === "O") {
    $('#tile-taken').text('Tile has been taken')
  }

  if(playerTurn) {
    playerTurn = false
    $('#game-message').text(`O's Turn!`).css('color', 'blue')
  } else {
    playerTurn = true
    $('#game-message').text(`X's Turn!`).css('color', 'blue')
  }
  checkForWin()
}

const checkForWin = function() {
  // HORIZONTAL
  if(($('#0').html() === 'X' && $('#1').html() === 'X' && $('#2').html() === 'X') || ($('#0').html() === 'O' && $('#1').html() === 'O' && $('#2').html() === 'O')) {
    console.log('Winner!')
  } else if(($('#3').html() === 'X' && $('#4').html() === 'X' && $('#5').html() === 'X') || ($('#3').html() === 'O' && $('#4').html() === 'O' && $('#5').html() === 'O')) {
  } else if(($('#6').html() === 'X' && $('#7').html() === 'X' && $('#8').html() === 'X') || ($('#6').html() === 'O' && $('#7').html() === 'O' && $('#8').html() === 'O')) {
    console.log('Winner!')
  //VERTICAL
  } else if(($('#0').html() === 'X' && $('#3').html() === 'X' && $('#6').html() === 'X') || ($('#0').html() === 'O' && $('#3').html() === 'O' && $('#6').html() === 'O')) {
    console.log('Winner!')
  } else if(($('#1').html() === 'X' && $('#4').html() === 'X' && $('#7').html() === 'X') || ($('#1').html() === 'O' && $('#4').html() === 'O' && $('#7').html() === 'O')) {
    console.log('Winner!')
  } else if(($('#2').html() === 'X' && $('#5').html() === 'X' && $('#8').html() === 'X') || ($('#3').html() === 'O' && $('#5').html() === 'O' && $('#8').html() === 'O')) {
    console.log('Winner!')
  // // DIAGONAL
  } else if(($('#0').html() === 'X' && $('#4').html() === 'X' && $('#8').html() === 'X') || ($('#0').html() === 'O' && $('#4').html() === 'O' && $('#8').html() === 'O')) {
    console.log('Winner!')
  } else if(($('#2').html() === 'X' && $('#4').html() === 'X' && $('#6').html() === 'X') || ($('#2').html() === 'O' && $('#4').html() === 'O' && $('#6').html() === 'O')) {
    console.log('Winner!')
  // } else if (/*if none of the cells match*/) {
  //   console.log('It is a tie!')
  // }
  }
}

module.exports = {
  onBoxClicked,
  onCreateGame,
  onUpdateGame
}
