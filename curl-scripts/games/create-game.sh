curl   --include --request POST 'POST'"https://sangelici.github.io/tictactoe-client/games"\
  --header "Content-type: applications/json"\
  --data '{
    "game": {
    "id": 1,
    "cells": ["","","","","","","","",""],
    "over": false,
    "player_x": {
      "id": "'"${ID}"'".
      "email": "'"${EMAIL}"'"
    },
    "player_o": null
    }
  }'
