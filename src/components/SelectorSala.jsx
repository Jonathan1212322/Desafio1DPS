
import{ useState } from 'react';

const SelectorSala = ({ salas, seleccionarSala }) => {
  const [salaActual, setSalaActual] = useState(salas[0]);

  const cambiarSala = (sala) => {
    setSalaActual(sala);
    seleccionarSala(sala);
  };

  return (
    <div className="form-group mt-5">
      <select
        className="form-control"
        value={salaActual}
        onChange={(e) => cambiarSala(e.target.value)}
      >
        {salas.map((sala) => (
          <option key={sala} value={sala}>
            Sala {sala}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorSala;
