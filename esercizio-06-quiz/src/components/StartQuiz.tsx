interface Props {
  onStart: () => void
}

function StartQuiz({ onStart }: Props) {
  return (
    <div className="card">
      <p>Premi il pulsante per iniziare un nuovo quiz</p>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  )
}

export default StartQuiz