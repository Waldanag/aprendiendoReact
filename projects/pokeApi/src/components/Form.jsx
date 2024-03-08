import { useState } from "react";
import Pokemon from "./Pokemon";

const Form = () => {

    const [pokemonName, setPokemonName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <div>
            <h4>
            Busca un Pokemon de <strong>Primera Generación</strong>:{" "}
            </h4>
            <form onSubmit={handleSubmit}>
                <span>Pokémon</span>
                <input type="text" placeholder="Busca un Pokémon" onChange={(event)=>setPokemonName(event.target.value)} />
                <button>Buscar</button>
            </form>
            <Pokemon pokemonName={pokemonName}/>
        </div>
        );
};

export default Form;
