import React from "react";

function GuessResults({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map(({ id, value }) => (
        <p key={id} class="guess">
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
