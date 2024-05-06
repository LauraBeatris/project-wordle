import React, { useState } from "react";

function GuessInput() {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Guess: ", inputValue);

    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={inputValue}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setInputValue(event.target.value.toUpperCase())}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
