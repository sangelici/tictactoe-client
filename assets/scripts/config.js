'use strict'

let apiUrl
const apiUrls = {
  production: 'https://sangelici.github.io/tictactoe-client/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
