import React from "react";

export interface ExplanationProps {
  explanation: string;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation }) => {
  return (
    <div className="p-4 bg-blue-100 rounded mb-4">
      <p>{explanation}</p>
    </div>
  );
};

export default Explanation;
