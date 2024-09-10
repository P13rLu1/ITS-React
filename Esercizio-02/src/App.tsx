import './App.css'
import {useEffect, useState} from "react";
import ListaComponent from "./components/ListaComponent.tsx";

function App() {

    const [contatore, setContatore] = useState(0);

    //useEffect con Array vuoto
    //Il componente viene creato
    // useEffect(() => {
    //     // fetch data
    //     console.log('Creato con il componente App')
    // }, []);

    //useEffect con Array vuoto
    //Il componente viene distrutto
    // useEffect(() => {
    //     //....
    //     return () => {
    //         console.log('Distrutto il componente App')
    //     }
    // }, []);

    //useEffect con dipendenza da contatore
    // la funzione viene eseguita ogni volta che il contatore cambia
    useEffect(() => {
        console.log('Incrementa la variabile contatore')
    }, [contatore]);

    return (
        <>
            <h2>Esercitazione</h2>
            <button onClick={() => setContatore(contatore + 1)}>
                <p>Hai Cliccato {contatore} volte</p>
            </button>
            <hr/>
            {(contatore %2 == 0) && <ListaComponent/>}
        </>
    )
}

export default App
