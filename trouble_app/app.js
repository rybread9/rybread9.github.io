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



// point-and-click to move tokens.- event listeners and handlers- review.
$(()=>{


  // point-and-click to move tokens.- event listeners and handlers- review.

  
    const $redToken = $('<div class="redToken"></div>');
    $('.tile').on('click', (event)=>{
      $(event.currentTarget).append($redToken);
    })

})
