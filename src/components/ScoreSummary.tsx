import React from "react";

// Definizione delle proprietà del componente ScoreSummary
interface ScoreSummaryProps {
  score: number;
  total: number;
  onReset: () => void; // Funzione che resetta il quiz
}
// Funzione che restituisce il livello delle skill in base alle riposte corrette
const getSkillLevel = (score: number) => {
  if (score <= 3) return { label: "Base", color: "text-red-600" };
  if (score <= 6) return { label: "Intermedio", color: "text-yellow-600" };
  if (score <= 9) return { label: "Espert*", color: "text-blue-600" };
  return { label: "Maestr*", color: "text-green-600" };
};

const ScoreSummary: React.FC<ScoreSummaryProps> = ({
  score,
  total,
  onReset,
}) => {
  const level = getSkillLevel(score); // Calcolo  del livello delle skill

  return (
    <div className="max-w-md mx-auto p-8 text-center bg-white rounded-xl shadow-lg space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Risultato finale
      </h2>

      <p className="text-lg text-gray-700">
        Hai risposto correttamente a{" "}
        <span className="font-bold text-green-700 text-xl">{score}</span> su{" "}
        <span className="font-bold text-green-700 text-xl">{total}</span>{" "}
        domande!
      </p>

      <p className={`text-xl font-semibold ${level.color}`}>
        Livello: {level.label}
      </p>

      <button
        onClick={onReset}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
      >
        Riprova il quiz
      </button>
    </div>
  );
};

export default ScoreSummary;
