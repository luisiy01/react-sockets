const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;

    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado", socket.id);

      socket.on("solicitar-ticket", (data, callback) => {
        const nuevoTicket = this.ticketList.crearTicket();
        callback(nuevoTicket);
      });

      socket.on("siguiente-ticket-trabajar", (data, callback) => {
        const ticketAsignado = this.ticketList.asignarTicket(
          data.escritorio,
          data.agente,
        );
        callback(ticketAsignado);
      });
    });
  }
}

module.exports = Sockets;
