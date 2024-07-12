import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswersRef = useRef(
    [...answers].sort(() => Math.random() - 0.5)
  );

  return (
    <ul id="answers">
      {shuffledAnswersRef.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let className = isSelected ? "selected" : "";

        if (answerState === "answered" && isSelected) {
          className = "selected";
        } else if (answerState === "correct" && isSelected) {
          className = "correct";
        } else if (answerState === "wrong" && isSelected) {
          className = "wrong";
        }

        return (
          <li key={answer} className="answer">
            <button className={className} onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
