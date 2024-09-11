import {Pokemon} from "../types/pokedex.ts";

interface Props {
    pokemon: Pokemon;
    getDettaglio: (urlDettaglio: string) => void;
    index: number;
}

function PokemonListItem({pokemon, getDettaglio, index}: Props) {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                padding: 10,
                margin: 10,
                border: "1px solid gray",
                backgroundColor: "#564D4A",
                borderRadius: 16,
                width: "100%"
            }}
                 onClick={() => getDettaglio(pokemon.url)}>

                <div>
                    <p>{pokemon.name}</p>
                    <img width={150}
                         src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (index + 1) + ".png"}
                         alt="immagine pokemon"/>
                </div>
            </div>
        </>
    )
}

export default PokemonListItem;