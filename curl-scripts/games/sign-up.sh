<<<<<<< HEAD
curl "https://wdi-library-api.herokuapp.com/sign-up" \
=======
curl "https://sangelici.github.io/tictactoe-client/sign-up" \
>>>>>>> logic
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'


echo
