import {useEffect, useState} from "react";

function ListaComponent() {

    const [search, setSearch] = useState("");

    //useEffect con log di creazione e distruzione del componente
    useEffect(() => {
        console.log('Creato con il componente ListaComponent')
        return () => {
            console.log('Distrutto il componente ListaComponent')
        }
    }, []);

    //useEffect con dipendenza da search
    useEffect(() => {
        console.log('Ricerca cambiata: ' + search)
    }, [search]);

    const nomi = ['Mario', 'Luigi', 'Peach', 'Toad', 'Yoshi'];

    return (
        <>
            <p>Lista Component</p>
            <input type="text" value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>
            <ul>
                {nomi.filter(nome => nome.toLowerCase().includes(search.toLowerCase())).map(nome => <li>{nome}</li>)} {/*questa funzione filtra i nomi in base alla ricerca effettuata dall'utente e li mostra in una lista*/}
            </ul>
        </>
    );
}

export default ListaComponent;