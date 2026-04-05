import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

export const BandAdd = () => {
  const [nombre, setNombre] = useState("");
  const { socket } = useContext(SocketContext);

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
