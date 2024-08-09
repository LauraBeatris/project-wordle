import { NUM_OF_LETTERS } from "../../constants";
import { range } from "../../utils";

function GuessSlot({ guess }) {
  const lettersLength = range(0, NUM_OF_LETTERS);

  return (
    <p className="guess">
      {guess ? (
        guess.value.split("").map((letter, index) => (
          <span key={index} className="cell">
            {letter}
          </span>
        ))
      ) : (
        <>
          {lettersLength.map(() => (
            <span className="cell"></span>
          ))}
        </>
      )}
    </p>
  );
}

export default GuessSlot;
