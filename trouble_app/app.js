// GAME PLAY
// 1. Player 1 rolls dice.
// dice: #1-6.
// 2. Player 1 moves amount of squares rolled.
// click event listener on divs
// 3. Player 2 rolls dice.
// 4. Player 2 moves amount of squares rolled.
// 5. Repeat until all tokens of one player are in finish div.--> pop up message of "player wins"
      // add pt to score when a player reaches FINISH. first one to 3 pts wins
// 6. Token can only go around board once


// Player 1 object
// -red
// -score

// Player 2 object
// -blue
// -score

// Roll dice button
  // random num between 1 and 6



// EXTRA:
// toggle bar toggles between sides for turn
  // toggles automatically each turn but user can change toggle.



$(()=>{

  // GAME RULES MODAL
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


  // RESTART
  const $restartBtn = $('#restart');

  const $restartGame = () => {
    $('.gameSquares').removeClass('yellowToken');
    $('.gameSquares').removeClass('pinkToken');
    $('.gameSquares').empty();
    $('.gameSquares').empty();
  }
  $restartBtn.on('click', $restartGame);



  // DICE ROLL

  const $rollDice = () => {
    $('#diceRoll').text(`Move: ${Math.floor(Math.random() * 6) +1}`);
  }
  $('#dice').on('click', $rollDice);


  // WIN

  const checkWin = ()=>{
    if($('#box41').hasClass('pinkToken') === true){
      console.log('Pink won!');
    } else if ($('#box41').hasClass('yellowToken') === true){
      console.log('Yellow won!');
    }
  }
  // $('#box41').on('click', checkPinkWin);





  // re-label path-done
  // set gamepath as an array of box#
  // set value of each token as 0
  // each time you roll the dice, you take the dice value and add it to the current value of the token to equal the game path place
  // move the token to the value of the box on Path
  // add conditional if values are the same, to move the previous token to zero.
  // if value > final box #, turn is lost.

  // if current target is pink, then set yellow back to zero and vice versa




  // point-and-click to move tokens.- event listeners and handlers-
  // knowing who's turn it is:
  //toggle bar
  //toggles when a square is clicked


  let turn = true;
  const $pinkToken = $('<div id="pinkToken"></div>');
  const $yellowToken = $('<div id="yellowToken"></div>');

  //when user clicks on a square, alternate between displaying pink and yellow
  const play = (event) => {

    const $move = $(event.currentTarget);

    //when turn is true, its pink's turn
    if(turn === true){
      // when a gameboard div is clicked, a pink token with a class of .pinkToken will be appended to it
      // $('input').attr('checked', '');
      $move.append($pinkToken);
      $move.addClass('pinkToken');
      // $('#box41').on('click', checkPinkWin);
      checkWin();

      turn = false;

    } else if(turn === false) {//when turn = false, its yellow's turn
      // when a gameboard div is clicked, a yellow token will be appended to it
      // $('input').attr('unchecked', '');
      $move.append($yellowToken);
      $move.addClass('yellowToken');
      checkWin();

      turn = true;
    }
  }


// const gamePath = [];

  const generateGameBoard = () => {
    for(let i=0; i<81; i++){
      $('<div>')
        .addClass('gameSquares')
        .attr('id', 'box'+i)
        .appendTo('.gameboard')
        .on('click', play);
    }
    $('#box48').text('start').attr('class','texttile');
    $('#box39').text('home').attr('class', 'texttile');
    $('#box41').text('finish').attr('class', 'texttile');
    // gamePath.push($('#box39').attr('path', 0));
    // $('#box48').attr('path', 1);
    // $('#box57').attr('path', 2);
    // $('#box66').attr('path', 3);
    // $('#box65').attr('path', 4);
    // $('#box64').attr('path', 5);
    // $('#box55').attr('path', 6);
    // $('#box46').attr('path', 7);
    // $('#box37').attr('path', 8);
    // $('#box28').attr('path', 9);
    // $('#box19').attr('path', 10);
    // $('#box10').attr('path', 11);
    // $('#box11').attr('path', 12);
    // $('#box12').attr('path', 13);
    // $('#box13').attr('path', 14);
    // $('#box14').attr('path', 15);
    // $('#box15').attr('path', 16);
    // $('#box16').attr('path', 17);
    // $('#box25').attr('path', 18);
    // $('#box34').attr('path', 19);
    // $('#box43').attr('path', 20);
    // $('#box52').attr('path', 21);
    // $('#box61').attr('path', 22);
    // $('#box70').attr('path', 23);
    // $('#box69').attr('path', 24);
    // $('#box68').attr('path', 25);
    // $('#box59').attr('path', 26);
    // $('#box50').attr('path', 27);
    // $('#box41').attr('path', 28);
    // gamePath.push()

  }

generateGameBoard();
// console.log(gamePath);
});
