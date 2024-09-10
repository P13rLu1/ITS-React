import {useState} from 'react'
import './App.css'
import {Consiglio} from "./types/consiglio.ts";
import CardConsiglio from "./components/CardConsiglio.tsx";

function App() {

    const [consiglio, setConsiglio] = useState<Consiglio>();

    const url = "https://api.adviceslip.com/advice";
    const urlWithTimestamp = `${url}?timestamp=${new Date().getTime()}`;

    const getConsiglio = () => {
        fetch(urlWithTimestamp).then(response => response.json()).then(data => {
            console.log(data);
            setConsiglio(data);
        });
    }

    return (
        <>
            <button onClick={getConsiglio}>Premi Per Avere un Consiglio ☝️</button>
            {consiglio && <CardConsiglio consiglio={consiglio.slip.advice}/>}
        </>
    )
}

export default App
