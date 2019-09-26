'use-strict'

const config = require ('../config.js')
const store = require ('../store.js')

const createGame = function() {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

module.exports = {
  createGame
}
