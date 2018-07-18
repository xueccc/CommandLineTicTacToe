var express = require('express');
var app = express();
var prompt = require('prompt');

prompt.start();

var board = { 
  0: '_', 
  1: '_', 
  2: '_',
  3: '_',
  4: '_',
  5: '_',
  6: '_',
  7: '_', 
  8: '_'  }

var currentPlayer;

var checkWinner = 

prompt.get(['namePlayer1', 'namePlayer2'], (err, result) => {
  console.log('Player 1: ', result.namePlayer1);
  console.log('Player 2: ', result.namePlayer2);
  currentPlayer = result.namePlayer1;
  board.map(row => {
    console.log(`_${row[0]}_ | _${row[1]}_ | _${row[2]}_`);
  })
})

prompt.get(['location'], (err, result) => {
  
})


// app.listen(3000, ()=> console.log('start game!!'));

// prompt.stop();