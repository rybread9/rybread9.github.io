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




  // point-and-click to move tokens.- event listeners and handlers-
  //
  // const $pinkToken = $('<div class="pinkToken"></div>');
  //
  // const $makePink = $('.path').on('click', (event)=>{
  //   $(event.currentTarget).append($pinkToken);
  // })
  //
  // const $yellowToken = $('<div class="yellowToken"></div>');
  //
  // const $makeYellow = $('.path').on('click', (event)=>{
  //   $(event.currentTarget).append($yellowToken);
  // })



  // knowing who's turn it is:
  //toggle bar
  //toggles when a square is clicked


  let turn = true;

  const play = (event) => {

    const $move = $(event.currentTarget);

    // Pink token div
    const $pinkToken = $('<div class="pinkToken"></div>');

    // when a gameboard div is clicked, a pink token will be appended to it
    const $makePink = $('.path').on('click', (event)=>{
      $(event.currentTarget).append($pinkToken);
    })

    // Yellow token div
    const $yellowToken = $('<div class="yellowToken"></div>');

    // when a gameboard div is clicked, a yellow token will be appended to it
    const $makeYellow = $('.path').on('click', (event)=>{
      $(event.currentTarget).append($yellowToken);
    })

    //when user clicks on a square, alternate between displaying pink and yellow
    //when turn is true, its pink's turn
    if(turn === true){
      $move
        .on('click', $makePink);
      turn = false;
      $move.off('click');
    } else {//when turn = false, its yellow's turn
      $move
        .on('click', $makeYellow);
      turn = true;
      $move.off('click');
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
    $('#box48').append('<p>start</p>').addClass('texttile');
    $('#box39').append('<p>home</p>').addClass('texttile');
    $('#box41').append('<p>finish</p>').addClass('texttile');
  }

generateGameBoard();

});
