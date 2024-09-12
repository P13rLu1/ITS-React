import {useEffect, useState} from 'react'
import './App.css'
import {Pokedex, Pokemon, PokemonDetail} from "./types/pokedex.ts";
import PokemonListItem from "./components/Pokemon";
import DettaglioPokemon from "./components/DettaglioPokemon.tsx";

function App() {

    const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon");
    const [listaPokemon, setListaPokemon] = useState<Pokemon[]>([])
    const [dettaglioPokemon, setDettaglioPokemon] = useState<PokemonDetail>();

    useEffect(() => {
        fetch(url).then(response => response.json()).then((data: Pokedex) => {
            console.log(data);
            setUrl(data.next);
            setListaPokemon(data.results);
        });
    }, []);

    function caricaAltri() {
        fetch(url).then(response => response.json()).then((data: Pokedex) => {
            console.log(data);
            setUrl(data.next);
            setListaPokemon([...listaPokemon, ...data.results]);
        });
    }

    function getDettaglioPokemon(urlDettaglio: string) {
        fetch(urlDettaglio).then(response => response.json()).then((data) => {
            console.log(data);
            setDettaglioPokemon(data);
        });
    }

    return (
        <>
            <h1>Pokédex Internazionale</h1>

            <div style={{display: 'flex'}}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,

                    borderRadius: 16,
                    marginRight: 20,
                    height: '100vh',
                    overflowY: 'scroll'
                }}>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                        {listaPokemon.map((pokemon, index) => (
                            <PokemonListItem pokemon={pokemon} index={index} getDettaglio={() => getDettaglioPokemon(pokemon.url)} key={pokemon.name}/>
                        ))}
                    </div>
                    <button onClick={caricaAltri} style={{marginTop: 20}}>Cerca Altri 20 pokemon</button>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 3,
                    backgroundColor: "#2E3138",
                    border: "1px solid #766F7A",
                    borderRadius: 16
                }}>
                    <h4>Dettaglio Pokemon</h4>
                    {
                        dettaglioPokemon ? <DettaglioPokemon pokemon={dettaglioPokemon}/> : <p>Premere su un pokemon per visualizzare il dettaglio</p>
                    }
                </div>
            </div>
        </>
    )
}

export default App
