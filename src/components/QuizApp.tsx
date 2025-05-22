import React, { useState } from "react";
import type { Question } from "../data/questions";
import QuestionCard from "./QuestionCard";
import Explanation from "./Explanation";
import ProgressBar from "./ProgressBar";
import ScoreSummary from "./ScoreSummary";
import NextButton from "./NextButton";

interface QuizAppProps {
  questions: Question[];
  onReset: () => void;
}

const QuizApp: React.FC<QuizAppProps> = ({ questions, onReset }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);

    if (index === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setShowScore(false);
    onReset();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <ProgressBar
        progress={
          showScore ? 100 : (currentQuestionIndex / questions.length) * 100
        }
      />

      {showScore ? (
        <ScoreSummary
          score={score}
          total={questions.length}
          onReset={resetQuiz}
        />
      ) : (
        <>
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
          />

          {selectedAnswer !== null && showExplanation && (
            <>
              <Explanation explanation={currentQuestion.explanation} />
              <NextButton onClick={nextQuestion} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default QuizApp;
