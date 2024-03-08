import { useState, useEffect } from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState() 
    const [loading, setLoading] = useState(true)
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setPokemon(data)
        } )
        }, []);

    return (
        <div>
            {console.log(pokemon)}
            {loading ? 'Cargando...'  : <img src={pokemon.sprites.other.dream_world.front_default} alt="" />}
        </div>
        )
}

export default Pokemon