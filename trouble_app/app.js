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
  const diceRoll = () => {
    const dice = Math.floor(Math.random() * 6) +1;
    $('#dice').on('click', console.log(dice));
  }


  // point-and-click to move tokens.- event listeners and handlers-
  // knowing who's turn it is:
  //toggle bar
  //toggles when a square is clicked


  let turn = true;

  //when user clicks on a square, alternate between displaying pink and yellow
  const play = (event) => {
    // debugger;
    const $move = $(event.currentTarget);

    //when turn is true, its pink's turn
    if(turn === true){
      // Pink token div
      // const $pinkToken = ;

      // when a gameboard div is clicked, a pink token will be appended to it
      const $makePink = $('.path').on('click', (event)=>{
        $move.append($('<div class="pinkToken"></div>'));
        turn = false;
        $move.off('click');
      })

      $move
        .on('click', $makePink);

    } else if(turn === false) {//when turn = false, its yellow's turn
      // Yellow token div
      // const $yellowToken = ;

      // when a gameboard div is clicked, a yellow token will be appended to it
      const $makeYellow = $('.path').on('click', (event)=>{
        $move.append($('<div class="yellowToken"></div>'));
        turn = true;
        $move.off('click');
      })

      $move
        .on('click', $makeYellow);





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
    // $('.path').load(play);
  }

generateGameBoard();

});
