import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { useState, useEffect } from "react";
import { useSocket } from "./hooks/useSocket";

function App() {
  const [bands, setBands] = useState([]);

  const { socket, online } = useSocket("http://localhost:8080");

  useEffect(() => {
    socket.on("current-bands", (data) => {
      setBands(data);
    });
  }, [socket]);

  const votar = (id) => {
    socket.emit("votar-banda", id);
  };

  const borrarBanda = (id) => {
    socket.emit("borrar-banda", id);
  };

  const cambiarNombreBanda = (id, nombre) => {
    socket.emit("cambiar-nombre-banda", { id, nombre });
  };

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          {online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList
            bands={bands}
            votar={votar}
            borrarBanda={borrarBanda}
            cambiarNombreBanda={cambiarNombreBanda}
          />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
