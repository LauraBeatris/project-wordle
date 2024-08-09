import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function onSubmit(tentativeGuess) {
    setGuesses((prev) => [...prev, tentativeGuess]);
  }

  const results = guesses.map((guess) => ({
    value: checkGuess(guess.value, answer),
    id: guess.id,
  }));

  const hasCorrectAnswer = results.some((result) =>
    result.value.every(({ status }) => status === "correct")
  );

  const hasLost =
    guesses.length === NUM_OF_GUESSES_ALLOWED && !hasCorrectAnswer;

  const isGameOver = hasLost || hasCorrectAnswer;

  return (
    <>
      <GuessResults answer={answer} results={results} />
      <GuessInput isDisabled={isGameOver} onSubmit={onSubmit} />

      {hasCorrectAnswer && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}

      {hasLost && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
