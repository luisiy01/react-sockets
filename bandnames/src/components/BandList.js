import { useState, useEffect } from "react";

export const BandList = ({ bands, votar, borrarBanda }) => {
  const [bandas, setBandas] = useState(bands);

  useEffect(() => {
    setBandas(bands);
  }, [bands]);

  const cambioNombre = (event, id) => {
    setBandas(
      bandas.map((band) => {
        if (band.id === id) {
          band.name = event.target.value;
        }
        return band;
      }),
    );
  };

  const onPerdioFoco = (id, nombre) => {
    console.log(id, nombre);
  };

  const createRows = () => {
    return bandas.map((band) => (
      <tr key={band.id}>
        <td>
          <button onClick={() => votar(band.id)} className="btn btn-primary">
            +1
          </button>
        </td>
        <td>
          <input
            value={band.name}
            className="form-control"
            onChange={(event) => cambioNombre(event, band.id)}
            onBlur={() => onPerdioFoco(band.id, band.name)}
          />
        </td>
        <td>
          <h3>{band.votes}</h3>
        </td>
        <td>
          <button
            onClick={() => borrarBanda(band.id)}
            className="btn btn-danger"
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h3>Bandas Actuales </h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Votes</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};
