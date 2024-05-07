import React, { useState } from "react";

function GuessInput({ onSubmit }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Guess: ", tentativeGuess);
    onSubmit({
      id: Math.random(),
      value: tentativeGuess,
    });

    setTentativeGuess("");
  }

  function handleChange(event) {
    setTentativeGuess(event.target.value.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={tentativeGuess}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={handleChange}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
