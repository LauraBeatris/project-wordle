import React from "react";
import GuessSlot from "../GuessSlot";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  const instances = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {instances.map((_, index) => {
        const guess = guesses?.[index];

        return <GuessSlot key={index ?? guess?.id} guess={guess} />;
      })}
    </div>
  );
}

export default GuessResults;
