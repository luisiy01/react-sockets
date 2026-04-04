import { useState } from "react";

export const BandAdd = ({ nuevaBanda }) => {
  const [nombre, setNombre] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim().length > 1) {
      nuevaBanda(nombre);
      setNombre("");
    }
  };
  return (
    <>
      <h3>Add new band</h3>
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="Band name"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </form>
    </>
  );
};
