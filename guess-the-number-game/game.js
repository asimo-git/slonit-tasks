const UPPER_LIMIT = 100;
const LOWER_LIMIT = 1;

function makeGuess(start, end) {
  const guess = start + Math.floor((end - start) / 2);
  console.log(`Компьютер 2: Пробую число ${guess}`);
  return guess;
}

function playGame() {
  const secretNumber =
    Math.floor(Math.random() * (UPPER_LIMIT - LOWER_LIMIT + 1)) + LOWER_LIMIT;

  let attemptCounter = 1;
  let guess;
  let guessStart = LOWER_LIMIT;
  let guessEnd = UPPER_LIMIT;

  while (guess !== secretNumber) {
    console.log(
      `Попытка №${attemptCounter} Диапазон: [${guessStart}, ${guessEnd}]`
    );
    guess = makeGuess(guessStart, guessEnd);

    if (guess === secretNumber) {
      console.log("Компьютер 1: Угадал!\n");
      break;
    } else if (guess > secretNumber) {
      guessEnd = guess - 1;
      console.log("Компьютер 1: Меньше.\n");
    } else {
      guessStart = guess + 1;
      console.log("Компьютер 1: Больше.\n");
    }
    attemptCounter++;
  }

  console.log(
    `Загаданное число: ${secretNumber}, количество попыток: ${attemptCounter}`
  );
}

playGame();
