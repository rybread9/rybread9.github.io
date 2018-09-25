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

  // MODAL
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



  // DICE ROLL
  const $diceBtn = $('#dice');

  const $rollDice = () => {
    $('#output').text(Math.floor(Math.random() * 6) +1);
  }
  $diceBtn.on('click', $rollDice);


  // RESTART
  const $restartBtn = $('#restart');

  const $restartGame = () => {
    $('.path').removeClass('yellowToken');
    $('.path').removeClass('pinkToken');
    $('.path').empty();
    $('.path').empty();
  }
  $restartBtn.on('click', $restartGame);


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

      $move.append($pinkToken);
      $move.addClass('pinkToken');
      turn = false;

    } else if(turn === false) {//when turn = false, its yellow's turn
      // when a gameboard div is clicked, a yellow token will be appended to it

      $move.append($yellowToken);
      $move.addClass('yellowToken');
      turn = true;
    }
  }




  const generateGameBoard = () => {
    for(let i=0; i<81; i++){
      $('<div>')
        .addClass('path')
        .attr('id', 'box'+i)
        .appendTo('.gameboard')
        .on('click', play);
    }
    $('#box48').text('start').attr('class','texttile');
    $('#box39').text('home').attr('class', 'texttile');
    $('#box41').text('finish').attr('class', 'texttile');
  }

generateGameBoard();

});
