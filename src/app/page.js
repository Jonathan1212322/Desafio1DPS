"use client"
import React, { useState } from 'react';
import SalaCine from '../components/SalaCine';
import ResumenCompra from '../components/ResumenCompra';
import SelectorSala from '../components/SelectorSala';

const Page = () => {
  const [salaActual, setSalaActual] = useState('sala1');
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
  const [asientos, setAsientos] = useState({
    sala1: [
      { numero: 1, ocupado: false },
      { numero: 2, ocupado: false },
    ],
    sala2: [
      { numero: 1, ocupado: false },
      { numero: 2, ocupado: false },
    ],
  });

  const seleccionarSala = (sala) => {
    setSalaActual(sala);
    setAsientosSeleccionados([]); 
  };

  const seleccionarAsiento = (asiento) => {
    if (!asiento.ocupado) {
      setAsientosSeleccionados([...asientosSeleccionados, asiento]);
      const nuevosAsientos = { ...asientos };
      nuevosAsientos[salaActual] = nuevosAsientos[salaActual].map((a) =>
        a.numero === asiento.numero ? { ...a, ocupado: true } : a
      );
      setAsientos(nuevosAsientos);
    }
  };

  return (
    <div className="container mt-5">
      <SelectorSala salas={['sala1', 'sala2']} seleccionarSala={seleccionarSala} />
      <SalaCine
        sala={salaActual}
        asientos={asientos[salaActual]}
        seleccionarAsiento={seleccionarAsiento}
      />
      <ResumenCompra asientosSeleccionados={asientosSeleccionados} />
    </div>
  );
};

export default Page;
