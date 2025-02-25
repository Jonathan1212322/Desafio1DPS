
import React from 'react';

const Asiento = ({ asiento, seleccionarAsiento }) => {
  const estilo = asiento.ocupado ? 'btn-danger' : 'btn-success';

  return (
    <button
      className={`btn ${estilo}`}
      onClick={() => seleccionarAsiento(asiento)}
    >
      {asiento.numero}
    </button>
  );
};

export default Asiento;
