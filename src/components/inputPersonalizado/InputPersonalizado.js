import React, { useRef } from 'react';

const InputPersonalizado = () => {
  const inputRef = useRef();

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={enfocarInput}>Enfocar input</button>
    </div>
  );
};

export default InputPersonalizado;