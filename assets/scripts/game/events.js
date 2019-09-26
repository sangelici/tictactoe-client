'use-strict'

//const getFormFields = require ('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const gameBoard = ["", "", "", "", "", "", "", "",""]
const player_x = 'X'
const player_o = 'O'

//registers that a cell has been clicked and logs which cell
const onBoxClicked = function(event) {
  event.preventDefault()
  console.log(event.target)
  $(event.target).text('X')
}



module.exports = {
  onBoxClicked
}
