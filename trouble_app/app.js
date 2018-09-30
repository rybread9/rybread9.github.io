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
  const $restartBtn = $('#restart');

  const $restartGame = () => {
    $('#pinkToken').remove();//remove the tokens
    $('#yellowToken').remove();
    $('.gameSquares').removeClass('yellowToken');//remove the classes from whole board
    $('.gameSquares').removeClass('pinkToken');
  }
  $restartBtn.on('click', $restartGame);



  // ---DICE ROLL---

  const rollDice = () => {
    const resultOfRoll = $('#diceRoll').text(Math.floor(Math.random() * 6) +1);

    const movePieceTo = path[newPathValue].append('<div class="halo"></div>');
  }

  $('#dice').on('click', rollDice);

// ---MOVING A TOKEN ACCORDING TO DICE ROLL---INCOMPLETE
  let newPathValue;
  const $pinkToken = $('<div id="pinkToken"></div>');
  const $yellowToken = $('<div id="yellowToken"></div>');
  const findNewPathValue = () => {
    let diceRoll = $('#diceRoll').val();//result of dice roll
    if(turn === true) {
      sendHome();
      let currentPinkPathValue = $('#pinkToken').parent().attr('path');//current location of pink token
      let newPathValue = parseInt(diceRoll) + parseInt(currentPinkPathValue);//new location for token
      const movePieceTo = path[newPathValue].append($pinkToken);// move token to it's new div by accessing path array
    } else if (turn === false) {
      sendHome();
      let currentYellowPathValue = $('#yellowToken').parent().attr('path');//get current location of token
      let newPathValue = parseInt(diceRoll) + parseInt(currentYellowPathValue);//add them together to get new location for token
      const movePieceTo = path[newPathValue].append($pinkToken);// move token to it's new div by accessing path array
    }
  }

  $('#move').on('click', findNewPathValue);


  // ---WIN---

  const checkWin = ()=>{
    if($('#box41').hasClass('pinkToken') === true){
      alert('PINK WON!! If you would like to play again, click the Restart Button!');
    } else if ($('#box41').hasClass('yellowToken') === true){
      alert('YELLOW WON! If you would like to play again, click the Restart Button!');
    }
  }


// ---MOVING TOKENS---

  let turn = true;



  //when user clicks on a square, alternate between displaying pink and yellow
  const sendHome = () => {
    //when turn is true, its pink's turn
    if(turn === true){
      //if you land on an opponent's token, opponent gets sent home
      if ($('.gameSquare').hasClass('yellowToken')) {
        $('#yellowToken').appendTo('#box39');
        $('.gameSquares').removeClass('yellowToken');
        $('.gameSquares').removeClass('pinkToken');
        alert(`Womp womp. Yellow has been sent back to Home.`);
      }
    // when a gameboard div is clicked, a pink token with a class of .pinkToken will be appended to it
    $('.gameSquares').removeClass('pinkToken');
    $move.append($pinkToken);//.attr('path', newPathValue)
    $move.addClass('pinkToken');

    checkWin();
    turn = false;

    toggle(turn);


    } else if(turn === false) {//when turn = false, its yellow's turn

      //if you land on an opponent's token, opponent gets sent home
      if ($(event.currentTarget).hasClass('pinkToken')) {
        $('#pinkToken').appendTo('#box39');
        $('.gameSquares').removeClass('pinkToken');
        $('.gameSquares').removeClass('yellowToken');
        alert(`Womp womp. Pink has been sent back to Home.`);
      }
    // when a gameboard div is clicked, a yellow token will be appended to it
    // console.log(findNewYellowPathValue());
    $('div').removeClass('yellowToken');
    $move.append($yellowToken);
    $move.addClass('yellowToken');
    checkWin();
    turn = true;

    toggle(turn);

    }
  }


// const gamePath = [];

const toggle = (turn) => {
  if(turn === false){//yellow token turn is false
    $('#check').attr('unchecked', '');//yellow
    // turn = true;
    $('#diceRoll').empty();
    $('#check').removeAttr('unchecked', '');
    $('#check').attr('checked', '');
    // $('input:unchecked').css('background-color', 'rgb(255, 0, 214)');//pink
  } else if (turn === true) {//pink token turn is true
    $('#check').attr('checked', '');//pink
    // turn = false;
    $('#diceRoll').empty();
    $('#check').removeAttr('checked', '');
    $('#check').attr('unchecked', '');
    // $('input:checked').css('background-color', 'rgb(235, 255, 0)');//yellow
  }
}

let path = [];

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
  }//LABEL THE PATH FOR TOKENS TO FOLLOW. ONLY ALLOW CLICKING ON PATH
  $('#box48').text('start');
  $('#box39').text('home');
  $('#box41').text('finish');
  $pinkToken.appendTo('#box39');
  $yellowToken.appendTo('#box39');
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
console.log(path[2]);

});
// --FOR FUTURE UPDATES--
// set value of each token as 0
// each time you roll the dice, you take the dice value and add it to the current value of the token to equal the game path place
// move the token to the value of the box on Path
// add conditional if values are the same, to move the previous token to zero.
// if value > final box #, turn is lost.

// if current target is pink, then set yellow back to zero and vice versa
