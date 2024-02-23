import { useState } from "react";

const Form = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [favoritePokemon, setFavotitePokemon] = useState('')

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
            <input 
            type="text"
            onChange={(event) =>
                setName({name: event.target.value })
            }
            />
            <label>Edad: </label>
            <input
            type="int"
            onChange={(event) =>
                setAge({age: event.target.value })
            }
            />
            <label>Pokemon Favorito: </label>
            <input
            type="text"
            onChange={(event) =>
                setFavotitePokemon({favoritePokemon: event.target.value })
            }
            />
            <button>Enviar</button>
        </form>
        )}
        {/*usar show para mostrar mensaje de exito de completar el formulario y sacar de pantalla el form*/}
        {/*usar err para mensajes de error al completar el formulario*/}
    </div>
    );
};

export default Form;
