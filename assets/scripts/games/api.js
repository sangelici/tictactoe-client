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

const updateGame = function(index, value, gameover) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
      'over': gameover
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
