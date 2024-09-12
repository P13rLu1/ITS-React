import {useState} from 'react';
import './App.css';
import StartQuiz from './components/StartQuiz';
import {QuizType} from './types/quiz';
import Quiz from './components/Quiz';

const URL = "https://opentdb.com/api.php?amount=10";

function App() {
    const [quiz, setQuiz] = useState<QuizType>();

    const startQuiz = () => {
        setQuiz(undefined);
        fetch(URL).then(res => res.json()).then(setQuiz);
    };

    return (
        <>
            <h1>Trivia Quiz</h1>
            {!quiz && (
                <StartQuiz onStart={startQuiz}/>
            )}
            {quiz && (
                <Quiz quiz={quiz} nuovoQuiz={startQuiz}/>
            )}
        </>
    )
}

export default App
