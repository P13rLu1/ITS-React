import {useState} from "react";
import {QuizType} from "../types/quiz";
import Domanda from "./Domanda";
import Risultati from "./Risultati";

interface Props {
    quiz: QuizType
    nuovoQuiz: () => void
}

function Quiz({quiz, nuovoQuiz}: Props) {

    const [domandaCorrente, setDomandaCorrente] = useState<number>(0);

    const [risposte, setRisposte] = useState<Array<string>>([]);

    const avanti = (rispostaFornita: string) => {
        console.log("risposta fornita", rispostaFornita);
        setRisposte([...risposte, rispostaFornita]);
        setDomandaCorrente(domandaCorrente + 1);
    };

    return (
        <div className="card">

            {domandaCorrente < quiz.results.length && (
                <div>
                    <p>Domanda n° {domandaCorrente + 1}/{quiz.results.length}</p>
                    <Domanda domanda={quiz.results[domandaCorrente]} avanti={avanti}/>
                </div>
            )}

            {domandaCorrente == quiz.results.length && (
                <Risultati domande={quiz.results} risposte={risposte} nuovoQuiz={nuovoQuiz}/>
            )}
        </div>
    )

}

export default Quiz;