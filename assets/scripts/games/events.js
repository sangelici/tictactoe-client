'use-strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// ______________________________________GLOBALS
const gameboard = ['', '', '', '', '', '', '', '', '']
let playerTurn = true
let draw = false
let winner = false
let gameover = false

const onCreateGame = function (event) {
  event.preventDefault()
  reset()
  api.createGame()
    .then(ui.onCreateGameSuccess)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  store.id = $(event.target).attr('data-cell-index')
}

const onShowGames = function () {
  event.preventDefault()
  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onShowGamesFailure)
}

// ______________________________________GAME LOGIC
const onBoxClicked = function (event) {
  event.preventDefault()
  const letter = playerTurn ? 'X' : 'O'
  console.log(letter)
  if ($(event.target).html() === '') {
    $(event.target).html(letter).css('color', '#FF8E51').css('font-family', 'Cute Font')
    if (playerTurn) {
      playerTurn = false
      $('#game-message').text(`O's Turn!`).css('color', 'blue')
    } else {
      playerTurn = true
      $('#game-message').text(`X's Turn!`).css('color', '#FF8E51')
    }
    checkForDraw()
    checkForWin()
    if (winner === true || draw === true) {
      gameover = true
    } else {
      gameover = false
    }
    api.updateGame(event.target.id, letter, gameover)
      .then(ui.onUpdateGameSuccess)
    $('#tile-taken').hide()
  } else {
    $('#tile-taken').text('Tile taken!').show()
  }
}
const winStyling = function () {
  $('#game-message').html(`Winner!`).css('color', '#3DFF4D').css('background-color', '#ffffff')
  $('.box').off('click', onBoxClicked)
  $('#create-game').text('Play Again?')
  // use variables or an if statement to create win highlight to DRY code
}
const checkForDraw = function () {
  if ($('#0').html() !== '' && $('#1').html() !== '' && $('#2').html() !== '' && $('#3').html() !== '' && $('#4').html() !== '' && $('#5').html() !== '' && $('#6').html() !== '' && $('#7').html() !== '' && $('#8').html() !== '') {
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
    $('#create-game').text('Play Again?')
  }
}
const checkForWin = function () {
  // HORIZONTAL
  if ($('#0').html() !== '' && $('#0').html() === $('#1').html() && $('#0').html() ===  $('#2').html()) {
    winner = true
    winStyling()
    $('#0').css('border-color', '#3DFF4D')
    $('#1').css('border-color', '#3DFF4D')
    $('#2').css('border-color', '#3DFF4D')
  } else if ($('#3').html() !== '' && $('#3').html() === $('#4').html() && $('#3').html() === $('#5').html()) {
    winner = true
    winStyling()
    $('#3').css('border-color', '#3DFF4D')
    $('#4').css('border-color', '#3DFF4D')
    $('#5').css('border-color', '#3DFF4D')
  } else if ($('#6').html() !== '' && $('#6').html() === $('#7').html() && $('#6').html() === $('#8').html()) {
    winner = true
    winStyling()
    $('#6').css('border-color', '#3DFF4D')
    $('#7').css('border-color', '#3DFF4D')
    $('#8').css('border-color', '#3DFF4D')
  // VERTICAL
  } else if ($('#0').html() !== '' && $('#0').html() === $('#3').html() && $('#0').html() === $('#6').html()) {
    winner = true
    winStyling()
    $('#0').css('border-color', '#3DFF4D')
    $('#3').css('border-color', '#3DFF4D')
    $('#6').css('border-color', '#3DFF4D')
  } else if ($('#1').html() !== '' && $('#1').html() === $('#4').html() && $('#1').html() === $('#7').html()) {
    winner = true
    winStyling()
    $('#1').css('border-color', '#3DFF4D')
    $('#4').css('border-color', '#3DFF4D')
    $('#7').css('border-color', '#3DFF4D')
  } else if ($('#2').html() !== '' && $('#2').html() === $('#5').html() && $('#2').html() === $('#8').html()) {
    // console.log('Winner!')
    winner = true
    winStyling()
    $('#2').css('border-color', '#3DFF4D')
    $('#5').css('border-color', '#3DFF4D')
    $('#8').css('border-color', '#3DFF4D')
  // DIAGONAL
  } else if ($('#0').html() !== '' && $('#0').html() === $('#4').html() && $('#0').html() === $('#8').html()) {
    winner = true
    winStyling()
    $('#0').css('border-color', '#3DFF4D')
    $('#4').css('border-color', '#3DFF4D')
    $('#8').css('border-color', '#3DFF4D')
  } else if ($('#2').html() !== '' && $('#2').html() === $('#4').html() && $('#2').html() === $('#6').html()) {
    winner = true
    winStyling()
    $('#2').css('border-color', '#3DFF4D')
    $('#4').css('border-color', '#3DFF4D')
    $('#6').css('border-color', '#3DFF4D')
  }
}

const reset = function () {
  playerTurn = true
  winner = false
  $('#game-message').text('')
  $('#tile-taken').text('')
  $('.box').text('')
  $('.box').css('border-color', '#728CFF')
  $('.box').on('click', onBoxClicked)
}
// ______________________________________MUSIC
// const onPlayMusic = function() {
//   console.log('I\'m clicked!')
//   let myAudio = document.getElementById("audio");
//
//   function togglePlay() {
//     return myAudio.paused ? myAudio.play() : myAudio.pause()
//   }
// }

module.exports = {
  onBoxClicked,
  onCreateGame,
  onUpdateGame,
  onShowGames
  // onPlayMusic
}
