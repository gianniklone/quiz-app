import React, { useState } from "react";
import StartScreen from "./components/StartScreen"; // Schermata iniziale per inserire nome e iniziare quiz
import QuizApp from "./components/QuizApp"; // Componente principale del quiz
import { questions } from "./data/questions"; // Array delle domande del quiz
import AnimatedBackground from "./components/AnimatedBackground"; // Sfondo animato

const App: React.FC = () => {
  // Stato per memorizzare il nome dell'utente
  const [userName, setUserName] = useState("");
  // Stato per controllare se il quiz è stato avviato
  const [started, setStarted] = useState(false);

  // Funzione chiamata da StartScreen quando l'utente inserisce il nome e avvia il quiz
  const handleStart = (name: string) => {
    setUserName(name);
    setStarted(true);
  };

  // Funzione per resettare il quiz e tornare alla schermata iniziale
  const handleReset = () => {
    setUserName("");
    setStarted(false);
  };

  return (
    <>
      {/* Sfondo animato*/}
      <AnimatedBackground />

      {/* Contenitore principale*/}
      <div className="max-w-xl mx-auto p-4 relative z-10">
        {/* Se il quiz non è iniziato, mostra la schermata iniziale */}
        {!started ? (
          <StartScreen onStart={handleStart} />
        ) : (
          <>
            {/* Messaggio di benvenuto personalizzato */}
            <h2 className="mb-4 text-center">
              Ciao, {userName}! Metticela tutta :D
            </h2>
            {/* Componente quiz con domande e funzione di reset */}
            <QuizApp questions={questions} onReset={handleReset} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
