/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  // if (number < 5) {
  //   return true;
  // } else {
  //   return false;
  // }
  return number < 5;
}

function isEven(number) {
  return number % 2 === 0;
}

function startsWithJ(string) {
  return string[0] === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  console.log("Don't try it pal...");
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH < 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'The Avengers';
    case 'comedy':
      return 'Airplane!';
    case 'horror':
      return 'Saw';
    case 'drama':
      return 'Gladiator';
    case 'musical':
      return 'Les Miserables';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not recognized. Pick between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
