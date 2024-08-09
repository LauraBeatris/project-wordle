import { NUM_OF_LETTERS } from "../../constants";
import { range } from "../../utils";

function Guess({ result }) {
  const lettersLength = range(0, NUM_OF_LETTERS);

  return (
    <p className="guess">
      {result ? (
        result.value.map(({ letter, status }, index) => (
          <span key={index} className={`cell ${status}`}>
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

export default Guess;
