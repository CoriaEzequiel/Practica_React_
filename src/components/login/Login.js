import React, { useState } from 'react';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [pais, setPais] = useState('');

  const manejarCambioUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const manejarCambioContraseña = (event) => {
    setContraseña(event.target.value);
  };

  const manejarCambioPais = (event) => {
    setPais(event.target.value);
  };

  const manejarSubmit = (event) => {
    event.preventDefault();
    alert(`Bienvenido, ${usuario} de ${pais}!`);
    setUsuario('');
    setContraseña('');
    setPais('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <label>
        Usuario:
        <input type="text" value={usuario} onChange={manejarCambioUsuario} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={contraseña} onChange={manejarCambioContraseña} />
      </label>
      <label>
        País:
        <select value={pais} onChange={manejarCambioPais}>
          <option value="">--Por favor elige un país--</option>
          <option value="argentina">Argentina</option>
          <option value="españa">España</option>
          <option value="brasil">Brasil</option>
          <option value="estados unidos">Estados Unidos</option>
          <option value="uruguay">Uruguay</option>
        </select>
      </label>
      <input type="submit" value="Iniciar sesión" />
    </form>
  );
};

export default Login;