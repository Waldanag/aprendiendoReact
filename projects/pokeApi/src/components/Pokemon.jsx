import { useState, useEffect } from 'react'

const Pokemon = (pokemonName) => {
    const [pokemon, setPokemon] = useState() 
    const [loading, setLoading] = useState(true)
    const url_base = 'https://pokeapi.co/api/v2/pokemon/'
    const pokeName = () => {
        if (typeof pokemonName === 'string') {
            return pokemonName.toLowerCase().trim()
        }
    }

    //como concatenar una url con un string ingresado por un form para formar una nueva url que se conecte con una api
    const url = `${url_base}${pokeName}`
    console.log(url);

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setPokemon(data)
        } )
        }, [pokemonName, url]);

    return (
        <div>
            <div>
                <h5>{pokemon?.name}</h5>
            </div>
            <div>
                {loading ? 'Cargando...'  : <img src={pokemon.sprites.other.dream_world.front_default} alt="" />}
            </div>
            <hr />
            <div>
                <h3>Información Basica:</h3>
            </div>
            <div>
                <p><strong>Numero: </strong>{pokemon?.id}</p>
                <p><strong>Tipo: </strong>{pokemon?.type}</p>
                <p><strong>Peso: </strong>{pokemon?.weight} lb.</p>
                <p><strong>Altura: </strong>{pokemon?.height} ft.</p>
            </div>
        </div>
        
        )
}

export default Pokemon