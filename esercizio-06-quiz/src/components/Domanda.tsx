import { useEffect, useState } from "react"
import { Question } from "../types/quiz"

interface Props {
  domanda: Question
  avanti: (risposta: string) => void
}

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Domanda({ domanda, avanti }: Props) {

  const [risposte, setRisposte] = useState<Array<string>>([]);
  const [rispostaSelezionata, setRispostaSelezionata] = useState<string>("");

  const selezionaRisposta = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setRispostaSelezionata(e.currentTarget.value);
  }

  useEffect(() => {
    setRispostaSelezionata("");
    const possibiliRisposte = [...domanda.incorrect_answers, domanda.correct_answer];
    shuffleArray(possibiliRisposte);
    setRisposte(possibiliRisposte);
  }, [domanda]);

  return (
    <div>
      <p>Domanda: {domanda.question}</p>
      <hr />
      {risposte.map(risp => (
        <div key={risp}>
          <label htmlFor={risp}>
            <input
              type="radio"
              id={risp}
              name={domanda.question}
              value={risp}
              checked={risp === rispostaSelezionata}
              onChange={selezionaRisposta} />
            {risp}
          </label>
        </div>
      ))}
      <hr />
      <button disabled={!rispostaSelezionata} onClick={() => avanti(rispostaSelezionata)}>Avanti</button>
    </div>
  )
}


export default Domanda