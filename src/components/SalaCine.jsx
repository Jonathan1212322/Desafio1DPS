
import React from 'react';
import Asiento from './Asiento';

const SalaCine = ({ sala, asientos }) => {
  return (
    <div className="container mt-5">
      <h2>Sala {sala}</h2>
      <div className="row">
        {asientos.map((asiento, index) => (
          <div key={index} className="col-md-1">
            <Asiento asiento={asiento} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaCine;
