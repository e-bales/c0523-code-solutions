console.log('Lodash is loaded:', typeof _ !== 'undefined');
function calculatePoints(player) {
  // given a player object, with property 'hand', calculate their score
  let points = 0;
  for (let i = 0; i < player.hand.length; i++) {
    const cardVal = player.hand[i].value;
    if (isNaN(Number(cardVal))) {
      // if converting to a number produces NaN, we know we have a face card
      if (cardVal === 'Ace') points += 11;
      else points += 10;
    } else {
      // else, we can just convert the string to the corresponding number
      points += Number(cardVal);
    }
  }
  player.total = points;
  return points;
}

function cardGame(players, handSize) {
  // This function assumes players is an array of strings, where the strings are player names;
  const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
    'Ace',
  ];
  let cardArray = [];
  for (let i = 0; i < suits.length; i++) {
    // create the deck array
    for (let j = 0; j < values.length; j++) {
      cardArray.push({ suit: suits[i], value: values[j] });
    }
  }
  cardArray = _.shuffle(cardArray); // shuffle our hand;

  const playerArray = [];
  for (let i = 0; i < players.length; i++) {
    // create our player Objects
    playerArray.push({ name: players[i], hand: [] });
  }
  for (let i = 0; i < players.length * handSize; i++) {
    // want to deal players * handSize number of cards
    playerArray[i % players.length].hand.push(cardArray.pop()); // deal one card from the 'top' of the deck, round-robin fashion
  }
  console.log('Your players are: ', playerArray);
  let max = 0;
  let winnerIndex = -1;
  const pointsArray = [];
  for (let i = 0; i < playerArray.length; i++) {
    // calculate points from initial dealing
    const playerPoints = calculatePoints(playerArray[i]);
    pointsArray.push(playerPoints);
    if (playerPoints > max) {
      max = playerPoints;
      winnerIndex = i;
    }
  }
  // check for tie
  while (pointsArray.filter((number) => number === max).length > 1) {
    // we know we have a tie
    console.log('We have a tie!');
    const tieIndices = [];
    for (let i = 0; i < playerArray.length; i++) {
      if (playerArray[i].total === max) {
        tieIndices.push(i);
        playerArray[i].hand.push(cardArray.pop());
      }
    }
    while (pointsArray.length > 0) {
      pointsArray.pop();
    }
    for (const index of tieIndices) {
      console.log(
        `Before the next dealing, ${playerArray[index].name} has ${playerArray[index].total} points.`
      );
      const newTotal = calculatePoints(playerArray[index]);
      if (newTotal >= max) {
        max = newTotal;
        pointsArray.push(newTotal);
        winnerIndex = index;
      }
    }
  }

  console.log(
    `The player with the most points is ${playerArray[winnerIndex].name} and they had ${playerArray[winnerIndex].total} points!`
  );
}

cardGame(['Me', 'You'], 2);
