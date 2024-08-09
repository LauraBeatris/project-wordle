import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results, answer }) {
  const instances = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {instances.map((_, index) => (
        <Guess result={results?.[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
