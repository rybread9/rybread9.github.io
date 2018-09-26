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
    $('#pinkToken').remove();
    $('#yellowToken').remove();
    $('.gameSquares').removeClass('yellowToken');
    $('.gameSquares').removeClass('pinkToken');

  }
  $restartBtn.on('click', $restartGame);



  // DICE ROLL

  const $rollDice = () => {
    const $spaces = $('#diceRoll').text(`Move: ${Math.floor(Math.random() * 6) +1}`);

  }
  const $clickRoll = $('#dice').on('click', $rollDice);

  //take value of rollDice + $pinkToken.val()




  // WIN

  const checkWin = ()=>{
    if($('#box41').hasClass('pinkToken') === true){
      alert('PINK WON!! If you would like to play again, click the Restart Button!');
    } else if ($('#box41').hasClass('yellowToken') === true){
      alert('YELLOW WON! If you would like to play again, click the Restart Button!');
    }
  }

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
      if ($(event.currentTarget).hasClass('yellowToken')) {
        $('#yellowToken').remove();
        $('.gameSquares').removeClass('yellowToken');
        $('.gameSquares').removeClass('pinkToken');
        alert(`Womp womp. Yellow has been sent back to Home.`);
      }
      $('.gameSquares').removeClass('pinkToken');
      $move.append($pinkToken);
      $move.addClass('pinkToken');
      checkWin();
      turn = false;

    } else if(turn === false) {//when turn = false, its yellow's turn
      // when a gameboard div is clicked, a yellow token will be appended to it
      // $('input').attr('unchecked', '');
      if ($(event.currentTarget).hasClass('pinkToken')) {
        $('#pinkToken').remove();
        $('.gameSquares').removeClass('pinkToken');
        $('.gameSquares').removeClass('yellowToken');
        alert(`Womp womp. Pink has been sent back to Home.`);
      }
      $('.gameSquares').removeClass('yellowToken');
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
        .appendTo('.gameboard');
        // .on('click', play);

    }
    $('#box48').text('start');
    $('#box39').text('home');
    $('#box41').text('finish');
    $('#box39').attr('path', 0).on('click', play);
    $('#box48').attr('path', 1).on('click', play);
    $('#box57').attr('path', 2).on('click', play);
    $('#box66').attr('path', 3).on('click', play);
    $('#box65').attr('path', 4).on('click', play);
    $('#box64').attr('path', 5).on('click', play);
    $('#box55').attr('path', 6).on('click', play);
    $('#box46').attr('path', 7).on('click', play);
    $('#box37').attr('path', 8).on('click', play);
    $('#box28').attr('path', 9).on('click', play);
    $('#box19').attr('path', 10).on('click', play);
    $('#box10').attr('path', 11).on('click', play);
    $('#box11').attr('path', 12).on('click', play);
    $('#box12').attr('path', 13).on('click', play);
    $('#box13').attr('path', 14).on('click', play);
    $('#box14').attr('path', 15).on('click', play);
    $('#box15').attr('path', 16).on('click', play);
    $('#box16').attr('path', 17).on('click', play);
    $('#box25').attr('path', 18).on('click', play);
    $('#box34').attr('path', 19).on('click', play);
    $('#box43').attr('path', 20).on('click', play);
    $('#box52').attr('path', 21).on('click', play);
    $('#box61').attr('path', 22).on('click', play);
    $('#box70').attr('path', 23).on('click', play);
    $('#box69').attr('path', 24).on('click', play);
    $('#box68').attr('path', 25).on('click', play);
    $('#box59').attr('path', 26).on('click', play);
    $('#box50').attr('path', 27).on('click', play);
    $('#box41').attr('path', 28).on('click', play);
    // .on('click', play);
    // $('.gameSquares').css('pointer-events', 'none').on('click', play);
  }

generateGameBoard();
// console.log(gamePath);
});
// re-label path-done
// set gamepath as an array of box#
// set value of each token as 0
// each time you roll the dice, you take the dice value and add it to the current value of the token to equal the game path place
// move the token to the value of the box on Path
// add conditional if values are the same, to move the previous token to zero.
// if value > final box #, turn is lost.

// if current target is pink, then set yellow back to zero and vice versa
