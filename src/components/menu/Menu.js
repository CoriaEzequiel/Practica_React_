import React, { useState } from 'react';

const Menu = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const manejarClick = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div>
      <button onClick={manejarClick}>
        {mostrarMenu ? 'Ocultar menú' : 'Mostrar menú'}
      </button>
      {mostrarMenu && (
        <ul>
          <li>Inicio</li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
        </ul>
      )}
    </div>
  );
};

export default Menu;