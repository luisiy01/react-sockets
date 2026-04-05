import { useState } from "react";
import { useSocket } from "../hooks/useSocket";

export const BandAdd = () => {
  const [nombre, setNombre] = useState("");
  const { socket } = useSocket("http://localhost:8080");

  const onSubmit = (event) => {
    event.preventDefault();
    if (nombre.trim().length > 1) {
      socket.emit("nueva-banda", nombre);
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
