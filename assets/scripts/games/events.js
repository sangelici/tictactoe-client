'use-strict'

//const getFormFields = require ('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require ('../store.js')

const gameboard = ["","","", "","","","","",""]
let playerOneMove = true

const onCreateGame = function(event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

//store.cell = $(event.target).attr('id')
//console.log('did this work' ,store.cell) //WORKS!

const onBoxClicked = function(event) {
  event.preventDefault()
  // if player1 goes, the next input should be 'o'
  if ($(event.target).html() === ""){
    let letter = playerOneMove ? 'X' : 'O'
    $(event.target).html(letter)
  } else {
    $('#tile-taken').text('Tile has already been selected!')
  }

  if(playerOneMove) {
    playerOneMove = false
  } else {
    playerOneMove = true
  }
}

const win = function() {

}

module.exports = {
  onBoxClicked,
  onCreateGame
}
