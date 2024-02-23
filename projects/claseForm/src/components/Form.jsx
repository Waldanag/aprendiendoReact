import { useState } from "react";

const Form = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [favoritePokemon, setFavotitePokemon] = useState('')

    console.log(name, age, favoritePokemon);
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const numRegex = /[0-9]/
        if(name.length >= 3 && numRegex.test(age) && favoritePokemon.length >= 3){
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }

    return (
    <div>
        {show ? null : ( 
            <form onSubmit={handleSubmit}>

                <label>Nombre Completo: </label>
                <input type="text" onChange={(event) => setName(event.target.value)}/>

                <label>Edad: </label>
                <input type="number" onChange={(event) => setAge(event.target.value)}/>

                <label>Pokemon Favorito: </label>
                <input type="text" onChange={(event) => setFavotitePokemon(event.target.value)}/>

                <button>Enviar</button>
            </form>
        )}
        
        {show ? 
            <>
                <h4>Gracias, {name}!</h4>
                <h4>Sabemos que {favoritePokemon} es uno de los mejores, gran elección!!</h4>
            </> 
            : <p>Coloque sus datos para validar su pokemon</p>}
    
        {err ? <p style={{color: 'red'}}>Debe colocar su información correctamente</p> : null}
    </div>
    );
};

export default Form;
