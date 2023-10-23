import React, { useState } from 'react';

const Modo = () => {
  const [modoOscuro, setModoOscuro] = useState(false);

  const manejarClick = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div style={{ 
      backgroundColor: modoOscuro ? 'black' : 'white', 
      color: modoOscuro ? 'white' : 'black',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button onClick={manejarClick}>
        Cambiar a modo {modoOscuro ? 'claro' : 'oscuro'}
      </button>
    </div>
  );
};

export default Modo;