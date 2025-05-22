import React, { useState } from "react";

// Proprietà che il componente riceve: una funzione per iniziare il quiz con il nome utente
interface StartScreenProps {
  onStart: (userName: string) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState(""); // Stato  per memorizzare il nome utente
  const [error, setError] = useState(false); // STato per gestire la presenza di un errore (nome vuoto)

  // Funzione chiamata al submit del  form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim()); // Se il nome è valido, il quiz si avvia
    } else {
      setError(true); // Se è vuoto, visualizza un messaggio d'errore
    }
  };

  // Funzione chiamata al cambiamento del valore nell'input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (error) setError(false); // Se  c'era un errore, rimuove il messaggio d'errore appena si modifica l'input
  };

  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Benvenuto! Come ti chiami?</h1>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className={`border-2 border-green-600 p-2 mb-1 w-full transition-colors duration-200 ${
            error ? "border-red-500" : "border-green-600"
          }`}
          placeholder="Il tuo nome"
          autoFocus
        />

        {error && (
          <p className="text-red-500  mb-2">Inserisci un nome valido!</p>
        )}
        <button
          type="submit"
          className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors duration-200 mt-4"
        >
          Inizia Quiz
        </button>
      </form>
      <div className="bg-gray-100 p-4 rounded-lg text-left shadow mt-12">
        <h2 className="text-xl font-semibold mb-2">Come funziona il quiz?</h2>
        <p className="text-sm text-gray-700">
          Rispondi a 10 domande sul tema della sostenibilità ambientale legata
          all'alimentazione. Alla fine, scoprirai come sei andato! Buona fortuna
          :D
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
