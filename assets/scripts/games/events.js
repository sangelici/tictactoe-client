'use-strict'

//const getFormFields = require ('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require ('../store.js')

const onCreateGame = function(event) {
  playerTurn = true
  winner = false
  $('.box').text('')
  $('.box').css('border-color', '#728CFF')
  $('.box').on('click', onBoxClicked)
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
}

// const onNewGame = function(event) {
//
//   event.preventDefault()
//   api.createGame()
//     .then(ui.onCreateGameSuccess)
// }

const onUpdateGame = function(event) {
  event.preventDefault()
  store.id = $(event.target).attr('data-cell-index')
}

const onShowGames = function() {
    event.preventDefault()
    api.showGames()
      .then(ui.onShowGamesSuccess)
      .catch(ui.onShowGamesFailure)
}

//GAME LOGIC

const gameboard = ["","","", "","","","","",""]
let draw = false
let playerTurn = true
let winner = false
let gameover = false

const onBoxClicked = function(event) {
  event.preventDefault()
  let letter = playerTurn ? 'X' : 'O'
  console.log(letter)
  if ($(event.target).html() === ""){
    $(event.target).html(letter).css('color', '#FF8E51').css('font-family', 'Cute Font')
  } else {
    $('#tile-taken').text('Tile has been taken')
  }

  if(playerTurn) {
    playerTurn = false
    $('#game-message').text(`O's Turn!`).css('color', 'blue')
  } else {
    playerTurn = true
    $('#game-message').text(`X's Turn!`).css('color', '#FF8E51')
  }
  checkForDraw()
  checkForWin()
  //console.log(winner) //*********WORKS

  if (winner === true || draw === true) {
    gameover = true
  } else {
    gameover = false
  }
  //console.log(gameover) // *******WORKS

  api.updateGame(event.target.id, letter, gameover)
    .then(ui.onUpdateGameSuccess)
}

const checkForDraw = function() {
  if ($('#0').html() !== '' && $('#1').html() !== '' && $('#2').html() !== '' && $('#3').html() !== '' && $('#4').html() !== '' && $('#5').html() !== '' && $('#6').html() !== '' && $('#7').html() !== '' && $('#8').html() !== '') {
    //console.log('It is a tie!')
    draw = true
    $('#0').css('border-color', '#EE6352')
    $('#1').css('border-color', '#EE6352')
    $('#2').css('border-color', '#EE6352')
    $('#3').css('border-color', '#EE6352')
    $('#4').css('border-color', '#EE6352')
    $('#5').css('border-color', '#EE6352')
    $('#6').css('border-color', '#EE6352')
    $('#7').css('border-color', '#EE6352')
    $('#8').css('border-color', '#EE6352')

    $('#game-message').html(`It's a Tie!`).css('color', '#EE6352').css('background-color', '#ffffff')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
  }
}

const checkForWin = function() {
  // HORIZONTAL
  if($('#0').html() !== '' && $('#0').html() === $('#1').html() && $('#0').html() ===  $('#2').html()) {
    //console.log('Winner!')
    winner = true
    //console.log(winner) //***********WORKS
    $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
    $('#0').css('border-color', '#3DFF4D')
    $('#1').css('border-color', '#3DFF4D')
    $('#2').css('border-color', '#3DFF4D')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
    $('#new-game').on('click', onCreateGame)
  } else if($('#3').html() !== '' && $('#3').html() === $('#4').html() && $('#3').html() ===  $('#5').html()){
    winner = true
    $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
    $('#3').css('border-color', '#3DFF4D')
    $('#4').css('border-color', '#3DFF4D')
    $('#5').css('border-color', '#3DFF4D')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
    $('#new-game').on('click', onCreateGame)
  } else if($('#6').html() !== '' && $('#6').html() === $('#7').html() && $('#6').html() ===  $('#8').html()) {
    //console.log('Winner!')
    winner = true
    $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
    $('#6').css('border-color', '#3DFF4D')
    $('#7').css('border-color', '#3DFF4D')
    $('#8').css('border-color', '#3DFF4D')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
    $('#new-game').on('click', onCreateGame)
  //VERTICAL
} else if($('#0').html() !== '' && $('#0').html() === $('#3').html() && $('#0').html() ===  $('#6').html()) {
    //console.log('Winner!')
    winner = true
    $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
    $('#0').css('border-color', '#3DFF4D')
    $('#3').css('border-color', '#3DFF4D')
    $('#6').css('border-color', '#3DFF4D')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
    $('#new-game').on('click', onCreateGame)
  } else if($('#1').html() !== '' && $('#1').html() === $('#4').html() && $('#1').html() ===  $('#7').html()) {
    //console.log('Winner!')
    winner = true
    $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
    $('#1').css('border-color', '#3DFF4D')
    $('#4').css('border-color', '#3DFF4D')
    $('#7').css('border-color', '#3DFF4D')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
    $('#new-game').on('click', onCreateGame)
  } else if($('#2').html() !== '' && $('#2').html() === $('#5').html() && $('#2').html() ===  $('#8').html()) {
    //console.log('Winner!')
    winner = true
    $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
    $('#2').css('border-color', '#3DFF4D')
    $('#5').css('border-color', '#3DFF4D')
    $('#8').css('border-color', '#3DFF4D')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
    $('#new-game').on('click', onCreateGame)
  // // DIAGONAL
} else if($('#0').html() !== '' && $('#0').html() === $('#4').html() && $('#0').html() ===  $('#8').html()) {
    //console.log('Winner!')
    winner = true
    $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
    $('#0').css('border-color', '#3DFF4D')
    $('#4').css('border-color', '#3DFF4D')
    $('#8').css('border-color', '#3DFF4D')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
    $('#new-game').on('click', onCreateGame)
  } else if($('#2').html() !== '' && $('#2').html() === $('#4').html() && $('#2').html() ===  $('#6').html()) {
    //console.log('Winner!')
    winner = true
    $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
    $('#2').css('border-color', '#3DFF4D')
    $('#4').css('border-color', '#3DFF4D')
    $('#6').css('border-color', '#3DFF4D')
    $('.box').off('click', onBoxClicked)
    $('#create-game').hide()
    $('#new-game').show()
    $('#new-game').on('click', onCreateGame)
  }
}

module.exports = {
  onBoxClicked,
  onCreateGame,
  onUpdateGame,
  onShowGames,
}
