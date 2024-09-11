import {PokemonDetail} from "../types/pokedex.ts";

interface Props {
    pokemon: PokemonDetail;
}

function DettaglioPokemon({pokemon}: Props) {
    return (
        <>
            <div>
                <img src={pokemon.sprites.other["showdown"].front_default} alt="immagine pokemon" style={{width: 250}}/>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <hr/>
                <h4>Tipo</h4>
                <div style={{display: "flex"}}>
                    {pokemon.types.map(type => (
                        <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                            <p>{type.type.name}</p>
                        </div>
                    ))}
                </div>
                <h4>Caratteristiche</h4>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                        <p>Peso: {(pokemon.weight/10).toFixed(1)}kg</p>
                    </div>
                    <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                        <p>Altezza: {(pokemon.height/10).toFixed(1)}m</p>
                    </div>
                </div>
                <hr/>
                <h4>Statistiche</h4>
                <div style={{display: "flex"}}>
                    {pokemon.stats.map(stat => (
                        <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                            <p>{stat.stat.name}: {stat.base_stat}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DettaglioPokemon;