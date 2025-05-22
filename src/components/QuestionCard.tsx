import React from "react";
import type { Question } from "../data/questions";

// Definizione delle proprietà del componente
interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  return (
    // Visualizzazione delle domande utilizzando Tailwind css

    <div className="bg-green-50  p-6 rounded shadow-md ">
      <h2 className="text-xl font-semibold mb-4 text-green-900">
        {question.question}
      </h2>

      <ul>
        {question.options.map((option, index) => {
          let className = "cursor-pointer p-2 mb-2 border rounded ";

          if (selectedAnswer !== null) {
            if (index === question.correctIndex) {
              className += " bg-green-200";
            } else if (
              index === selectedAnswer &&
              selectedAnswer !== question.correctIndex
            ) {
              className += " bg-red-200";
            } else {
              className += " bg-gray-100";
            }
          } else {
            className += " bg-gray-100 hover:bg-gray-200";
          }

          return (
            <li
              key={index}
              className={className}
              onClick={() => onAnswer(index)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionCard;
