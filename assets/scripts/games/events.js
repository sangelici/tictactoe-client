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
let gameover = false

const onBoxClicked = function(event) {
  event.preventDefault()
  let letter = playerTurn ? 'X' : 'O'
  api.updateGame(event.target.id, letter, gameover)
    .then(ui.onUpdateGameSuccess)
  //if player1 goes, the next input should be 'o'
  if ($(event.target).html() === ""){
    $(event.target).html(letter).css('color', 'blue')
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

  checkForDraw()
  checkForWin()
  //ifGameover()
}

const checkForDraw = function() {
  if ($('#0').html() !== '' && $('#1').html() !== '' && $('#2').html() !== '' && $('#3').html() !== '' && $('#4').html() !== '' && $('#5').html() !== '' && $('#6').html() !== '' && $('#7').html() !== '' && $('#8').html() !== '') {
    //console.log('It is a tie!')
    $('#game-message').html(`It's a tie!`)
    $('.box').off('click', onBoxClicked)
  }
}

const checkForWin = function() {
  // HORIZONTAL
  if($('#0').html() !== '' && $('#0').html() === $('#1').html() && $('#0').html() ===  $('#2').html()) {
    console.log('Winner!')
    $('#game-message').html(`Winner!`)
    $('.box').off('click', onBoxClicked)
  } else if($('#3').html() !== '' && $('#3').html() === $('#4').html() && $('#3').html() ===  $('#5').html()){
    $('#game-message').html(`Winner!`)
    $('.box').off('click', onBoxClicked)
  } else if($('#6').html() !== '' && $('#6').html() === $('#7').html() && $('#6').html() ===  $('#8').html()) {
    //console.log('Winner!')
    $('#game-message').html(`Winner!`)
    $('.box').off('click', onBoxClicked)
  //VERTICAL
} else if($('#0').html() !== '' && $('#0').html() === $('#3').html() && $('#0').html() ===  $('#6').html()) {
    //console.log('Winner!')
    $('#game-message').html(`Winner!`)
    $('.box').off('click', onBoxClicked)
  } else if($('#1').html() !== '' && $('#1').html() === $('#4').html() && $('#1').html() ===  $('#7').html()) {
    //console.log('Winner!')
    $('#game-message').html(`Winner!`)
    $('.box').off('click', onBoxClicked)
  } else if($('#2').html() !== '' && $('#2').html() === $('#5').html() && $('#2').html() ===  $('#8').html()) {
    //console.log('Winner!')
    $('#game-message').html(`Winner!`)
    $('.box').off('click', onBoxClicked)
  // // DIAGONAL
} else if($('#0').html() !== '' && $('#0').html() === $('#4').html() && $('#0').html() ===  $('#8').html()) {
    //console.log('Winner!')
    $('#game-message').html(`Winner!`)
    $('.box').off('click', onBoxClicked)
  } else if($('#2').html() !== '' && $('#2').html() === $('#4').html() && $('#2').html() ===  $('#6').html()) {
    //console.log('Winner!')
    $('#game-message').html(`Winner!`)
    $('.box').off('click', onBoxClicked)
  }
}

// const ifGameover = function() {
//   if (checkForWin) {
//     gameover = true
//   } else {
//     gameover = false
//   }
// }

module.exports = {
  onBoxClicked,
  onCreateGame,
  onUpdateGame
}
