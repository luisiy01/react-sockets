import { useState, useEffect } from "react";

export const BandList = ({ bands }) => {
  const [bandas, setBandas] = useState(bands);

  useEffect(() => {
    setBandas(bands);
  }, [bands]);

  const createRows = () => {
    return bandas.map((band) => (
      <tr key={band.id}>
        <td>
          <button className="btn btn-primary">+1</button>
        </td>
        <td>
          <input value={band.name} className="form-control" />
        </td>
        <td>
          <h3>10</h3>
        </td>
        <td>
          <button className="btn btn-danger">Borrar</button>
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
