
import React from 'react';

const ResumenCompra = ({ asientosSeleccionados }) => {
  const total = asientosSeleccionados.length * 10; 

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5>Resumen de Compra</h5>
        <p>Asientos seleccionados: {asientosSeleccionados.length}</p>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default ResumenCompra;
