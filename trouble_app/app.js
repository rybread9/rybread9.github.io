// GAME PLAY
// 1. Player 1 rolls dice.
// dice: #1-6.
// 2. Player 1 moves amount of squares rolled.
// click event listener on divs
// 3. Player 2 rolls dice.
// 4. Player 2 moves amount of squares rolled.
// 5. Repeat until all tokens of one player are in finish div.--> pop up message of "player wins"
// 6. Token can only go around board once


// Roll dice button
  // random num between 1 and 6



// EXTRA:
// toggle bar toggles between sides for turn
  // toggles automatically each turn but user can change toggle.



$(()=>{


  // ---GAME RULES MODAL---
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  const openModal = () => {
    $modal.css('display', 'block');
  }
  const closeModal = () => {
    $modal.css('display', 'none');
  }
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);


  // ---RESTART---
  // restart button
  const $restartBtn = $('#restart');

  const $restartGame = () => {
    //remove the tokens
    $('#pinkToken').remove();
    $('#yellowToken').remove();
    //remove the classes from whole board
    $('.gameSquares').removeClass('yellowToken');
    $('.gameSquares').removeClass('pinkToken');
    //append the tokens to the home div
    $($pinkToken).appendTo('#box39');
    $($yellowToken).appendTo('#box39');
  }
  // when restart button is clicked, run $restartGame
  $restartBtn.on('click', $restartGame);



  // ---DICE ROLL---
  // the token's new destination determined by rollDice
  let newPathValue;
  // WHEN TURN IS TRUE, IT IS PINK'S TURN. WHEN TURN IS FALSE, IT IS YELLOW'S TURN
  let turn = true;
  // pink token is a div that will be appended to path values
  const $pinkToken = $('<div id="pinkToken"></div>');
  // yellow token is a div that will be appended to path values
  const $yellowToken = $('<div id="yellowToken"></div>');
  // halo is a div that shows the player's next move according to the dice roll.
  const $halo = $('<div id="halo"></div>');


  const rollDice = () => {
    //roll the dice
    $('#diceRoll').text(Math.floor(Math.random() * 6) +1);
    //dice roll results:
    let diceRoll = $('#diceRoll').val();
    //move the halo into the position the player's token is supposed to move
    if (turn === true) {
      let currentPinkPathValue = $('#pinkToken').parent().attr('path');
      let newPathValue = parseInt(diceRoll) + parseInt(currentPinkPathValue);
      const movePieceTo = path[newPathValue].append($halo);
      $halo.css('border', '1px solid rgb(0, 217, 255)');
      // if(path[newPathValue] > path.length){
      //   alert('You must roll the exact number of moves to move your token into the Finish.');
      //   turn = false;
      // }
    } else if (turn === false) {
      let currentYellowPathValue = $('#yellowToken').parent().attr('path');
      let newPathValue = parseInt(diceRoll) + parseInt(currentYellowPathValue);
      const movePieceTo = path[newPathValue].append($halo);
      $halo.css('border', '1px solid rgb(0, 217, 255)');
      // if(path[newPathValue] > path.length){
      //   alert('You must roll the exact number of moves to move your token into the Finish.');
      //   turn = true;
      // }
    }

  }

  $('#dice').on('click', rollDice);

// ---MOVING A TOKEN ACCORDING TO DICE ROLL---INCOMPLETE

  const moveToNewPosition = () => {
    //remove halo from new path div
    $halo.remove();

    let diceRoll = $('#diceRoll').val();//result of dice roll

    if(turn === true) {
      //current location of pink token:
      let currentPinkPathValue = $('#pinkToken').parent().attr('path');
      //new location for token:
      let newPathValue = parseInt(diceRoll) + parseInt(currentPinkPathValue);
      //empty board of class .pinkToken
      $('.gameSquares').removeClass('pinkToken');
      // move token to it's new div by accessing path array
      if(path[newPathValue]){
        path[newPathValue].append($pinkToken);
      } else {
        $('#box41').append($pinkToken);
      }
      // check to see if there is already a token on newPathValue
      sendHome();
      // add a class of .pinkToken to div
      $pinkToken.parent().addClass('pinkToken');
      //check to see if the token has landed on the finish div
      checkWin();
      //change turn
      turn = false;
      //reflect change turn on toggle bar
      toggle(turn);

    } else if (turn === false) {
       //get current location of token
      let currentYellowPathValue = $('#yellowToken').parent().attr('path');
      //add them together to get new location for token
      let newPathValue = parseInt(diceRoll) + parseInt(currentYellowPathValue);
      $('.gameSquares').removeClass('yellowToken');
      // move token to it's new div by accessing path array
      if(path[newPathValue]){
        path[newPathValue].append($yellowToken);
      } else {
        $('#box41').append($yellowToken);
      }
      // check to see if there is already a token on newPathValue
      sendHome();
      // add a class of .pinkToken to div
      $yellowToken.parent().addClass('yellowToken');
      //check to see if the token has landed on the finish div
      checkWin();
      //change turn
      turn = true;
      //reflect change turn on toggle bar
      toggle(turn);
    }
  }

  $('#move').on('click', moveToNewPosition);


  // ---WIN---

  const checkWin = ()=>{
    if($('#box41').hasClass('pinkToken') === true){
      alert('PINK WON!! If you would like to play again, click the Restart Button!');
    } else if ($('#box41').hasClass('yellowToken') === true){
      alert('YELLOW WON! If you would like to play again, click the Restart Button!');
    }
  }


// ---SENDING TOKENS HOME---

  const sendHome = () => {
    if (turn === true){
      //if you land on an opponent's token, opponent gets sent home
      if ($($pinkToken).parent().hasClass('yellowToken')) {
        $('.gameSquares').removeClass('yellowToken');
        $('.gameSquares').removeClass('pinkToken');
        $('#yellowToken').remove();
        $yellowToken.appendTo('#box39'); //home
        alert(`Womp womp. Yellow has been sent back to Home.`);
        $pinkToken.parent().addClass('pinkToken');
      }
    } else if (turn === false) {
      //if you land on an opponent's token, opponent gets sent home
      if ($($yellowToken).parent().hasClass('pinkToken')) {
        $('.gameSquares').removeClass('pinkToken');
        $('.gameSquares').removeClass('yellowToken');
        // $pinkToken.remove();
        $('#pinkToken').remove();
        $pinkToken.appendTo('#box39'); //home
        alert(`Womp womp. Pink has been sent back to Home.`);
        $yellowToken.parent().addClass('yellowToken');
      }
    }
  }


// const gamePath = [];

const toggle = (turn) => {
  //yellow- token turn is false, toggle is yellow
  if(turn === false){
    $('#check').attr('unchecked', '');//yellow
    $('#diceRoll').empty();
    $('#check').removeAttr('unchecked', '');
    $('#check').attr('checked', '');

    //pink- token turn is true, toggle is pink
  } else if (turn === true) {
    $('#check').attr('checked', '');//pink
    $('#diceRoll').empty();
    $('#check').removeAttr('checked', '');
    $('#check').attr('unchecked', '');

  }
}

let path = [];
// For visual reference of key-value properties of objects in an array:
// let path = [
//   {
//     id: #box39,
//     path: 0
//   },
// ];

// ---MAKE THE GAMEBOARD A GRID---
const generateGameBoard = () => {
  for(let i=0; i<81; i++){
    $('<div>')
      .addClass('gameSquares')
      .attr('id', 'box'+i)
      .appendTo('.gameboard');
  }//LABEL THE PATH FOR TOKENS TO FOLLOW.
  $('#box48').text('start');
  $('#box39').text('home');
  $('#box41').text('finish');
  $pinkToken.appendTo('#box39');
  $yellowToken.appendTo('#box39');
  $halo.appendTo('#box39');
  path.push($('#box39').attr('path', 0));
  path.push($('#box48').attr('path', 1));
  path.push($('#box57').attr('path', 2));
  path.push($('#box66').attr('path', 3));
  path.push($('#box65').attr('path', 4));
  path.push($('#box64').attr('path', 5));
  path.push($('#box55').attr('path', 6));
  path.push($('#box46').attr('path', 7));
  path.push($('#box37').attr('path', 8));
  path.push($('#box28').attr('path', 9));
  path.push($('#box19').attr('path', 10));
  path.push($('#box10').attr('path', 11));
  path.push($('#box11').attr('path', 12));
  path.push($('#box12').attr('path', 13));
  path.push($('#box13').attr('path', 14));
  path.push($('#box14').attr('path', 15));
  path.push($('#box15').attr('path', 16));
  path.push($('#box16').attr('path', 17));
  path.push($('#box25').attr('path', 18));
  path.push($('#box34').attr('path', 19));
  path.push($('#box43').attr('path', 20));
  path.push($('#box52').attr('path', 21));
  path.push($('#box61').attr('path', 22));
  path.push($('#box70').attr('path', 23));
  path.push($('#box69').attr('path', 24));
  path.push($('#box68').attr('path', 25));
  path.push($('#box59').attr('path', 26));
  path.push($('#box50').attr('path', 27));
  path.push($('#box41').attr('path', 28));
}
generateGameBoard();

});
// --FOR FUTURE UPDATES--
// set value of each token as 0
// each time you roll the dice, you take the dice value and add it to the current value of the token to equal the game path place
// move the token to the value of the box on Path
// add conditional if values are the same, to move the previous token to zero.
// if value > final box #, turn is lost.

// if current target is pink, then set yellow back to zero and vice versa
