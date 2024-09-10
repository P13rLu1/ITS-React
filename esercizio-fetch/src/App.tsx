import {useState} from 'react'
import './App.css'
import CardUtente from "./components/CardUtente.tsx";
import {Utente} from "./types/utente.ts";

function App() {

    const [utenti, setUtenti] = useState<Utente[]>([]);

    const url = "https://jsonplaceholder.typicode.com/users";
    const getUtenti = () => {
        fetch(url).then(response => response.json()).then(data => {
            console.log(data);
            setUtenti(data);
        });
    }

    return (
        <>
            <button onClick={getUtenti}>
                <p>Numero utenti: {utenti.length}</p>
            </button>
            {utenti.map(utente => (
                <CardUtente
                    nome={utente.name}
                    email={utente.email}
                    azienda={utente.company.name}
                />
            ))}
        </>
    )
}

export default App
