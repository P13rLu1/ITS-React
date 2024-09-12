import {useMemo} from "react";
import {Question} from "../types/quiz";

interface Props {
    domande: Array<Question>
    risposte: Array<string>
    nuovoQuiz: () => void
}

function Risultati({domande, risposte, nuovoQuiz}: Props) {
    console.log("domande", domande);
    console.log("risposte", risposte);

    const numeroRisposteEsatte = useMemo(() => {
        return domande.filter((domanda, i) => domanda.correct_answer === risposte[i]).length;
    }, [domande, risposte]);

    return (
        <div>
            <p>Risultati {numeroRisposteEsatte} / {domande.length}</p>
            <ul>
                {domande.map((domanda, i) => (
                    <li key={i}>
                        <p>{domanda.question}</p>
                        <p>Risposta data: {risposte[i]}</p>
                        <p>Risposta corretta: {domanda.correct_answer}</p>
                    </li>
                ))}
            </ul>
            <p>{numeroRisposteEsatte <= 6 ? "coglione" : "bravo"}</p>
            <button onClick={nuovoQuiz}>Nuovo Quiz</button>
        </div>
    )
}


export default Risultati