// Definizione delle proprietà delle domande, risposta  corretta e la spiegazione della risposta

export interface Question {
    question: string;  // Domanda
    options: string[];  // Risposte multiple
    correctIndex: number;  // Indice della risposta giusta
    explanation: string;  // Spiegazione della risposta
}

export const questions: Question[] = [
    {
        question: "Qual è l'impatto ambientale maggiore del consumo di carne?",
        options:  [
            "Emissioni di gas serra",
            "Consumo di acqua",
            "Deforestazione",
            "Tutti i precedenti",
        ],
        correctIndex: 3, // Tutti i precedenti
        explanation:"Il consumo di carne ha un impatto multiplo: causa deforestazione per i pascoli, consuma molta acqua e produce elevate emissioni di gas serra, soprattutto metano."
    },
    {
        question: "Quale alimento richiede più acqua per essere prodotto?",
        options: [
            "Riso",
            "Carne di manzo",
            "Patate",
            "Lenticchie"
        ],
        correctIndex: 1,  // Carne di manzo
        explanation:"La carne di manzo richiede fino a 15.000 litri d’acqua per ogni chilo prodotto, molto più di qualsiasi alimento vegetale."
    },
    {
        question: "Quale tra questi metodi di agricoltura è considerato più sostenibile?",
        options: [
            "Agricoltura intensiva con pesticidi",
            "Agricoltura biologica",
            "Monocoltura estensiva",
            "Uso massiccio di fertilizzanti chimici"
        ],
        correctIndex: 1,  // Agricoltura biologica
        explanation:"L’agricoltura biologica evita l’uso di sostanze chimiche dannose e promuove la biodiversità, riducendo l’impatto ambientale."
    },
    {
        question:"Quale gas serra è principalmente prodotto dall'allevamento di bovini?",
        options: [
            "Anidride carbonica (CO2)",
            "Metano",
            "Ossido di azoto",
            "Vapor  d'acqua"
        ],
        correctIndex: 1,  // Metano
        explanation:"I bovini producono grandi quantità di metano attraverso la digestione, un gas serra molto più potente della CO2."
    },
    {
        question:"Quale pratica alimentare  aiuta a ridurre gli sprechi alimentari?",
        options: [
            "Comprare solo ciò che serve",
            "Conservare bene il cibo",
            "Usare gli avanzi per nuove ricette",
            "Tutte le precedenti"
        ],
        correctIndex: 3,  // Tutte le precedenti
        explanation:"Tutte queste pratiche aiutano a evitare lo spreco, massimizzando l’uso del cibo che acquistiamo."
    },
    {
        question:"Quale tra questi alimenti ha la minor impronta di carbonio?",
        options: ["Avocado","Pollo","Fagioli","Formaggio"],
        correctIndex: 2,  // Fagioli
        explanation:"I fagioli, come altri legumi, hanno un’impronta di carbonio molto bassa rispetto a prodotti di origine animale o importati."
    },
    {
        question:"Cosa significa 'km0' riferito al cibo?",
        options: [
            "Che il cibo è biologico",
            "Che il cibo è stato coltivato senza pesticidi",
            "Che il cibo è stato prodotto  localmente",
            "Che il cibo non contiene glutine"
        ],
        correctIndex: 2,  // Prodotto localmente
        explanation:"Il cibo a km0 è prodotto vicino al luogo di consumo, riducendo le emissioni legate al trasporto."
    },
    {
        question:"Cosa indica il termine 'stagionalità' in  alimentazione?",
        options: [
            "Mangiare solo cibi surgelati",
            "Scegliere  alimenti prodotti nella stagione attuale",
            "Mangiare cibi importati tutto l'anno",
            "Seguire una dieta  a rotazione stagionale"
        ],
        correctIndex: 1,  // Prodotti stagione attuale
        explanation:"Consumare cibi di stagione riduce l’impatto ambientale e favorisce un’alimentazione più naturale e locale."
    },
    {
        question:"Qual è uno dei principali vantaggi delle diete vegetali per l'ambiente?",
        options: [
            "Producono più  rifiuti",
            "Richiedono più energia",
            "Hanno un impatto climatico minore",
            "Richiedono più acqua"
        ],
        correctIndex: 2,  // Impatto climatico minore
        explanation:"Le diete vegetali richiedono meno risorse e producono meno emissioni, riducendo l’impatto sul clima."
    },
    {
        question:"Quale azione può contribuire alla riduzione dello spreco alimentare domestico?",
        options: [
            "Comprare in grandi quantità",
            "Tenere  il frigo troppo pieno",
            "Fare una lista prima di fare la spesa",
            "Comprare tutto quello che è  in offerta"
        ],
        correctIndex: 2,  // Fare una lista
        explanation:"Pianificare la spesa con una lista aiuta a evitare acquisti impulsivi e sprechi inutili."
    },
];
