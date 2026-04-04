import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const connectSocketServer = () => {
  const socket = io("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

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

  const nuevaBanda = (nombre) => {
    socket.emit("nueva-banda", nombre);
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
          <BandAdd nuevaBanda={nuevaBanda} />
        </div>
      </div>
    </div>
  );
}

export default App;
