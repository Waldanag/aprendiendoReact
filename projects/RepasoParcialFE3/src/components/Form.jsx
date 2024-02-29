import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  // Creamos el manjeador para el evento onSubmit
  const onSubmitForm = (e) => {
    e.preventDefault();
    alert(`Bienvenido: ${userName}`);
  };

  return (
    <div className="App">
      <h3>Iniciar Sesión</h3>
      {/* Pasamos nuestro manejador al evento onSubmit */}
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
