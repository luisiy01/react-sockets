import { SocketProvider } from "./context/SocketContext";
import HomePage from "./pages/HomePAge";

export const BandNamesApp = () => {
  return (
    <SocketProvider>
      <HomePage />
    </SocketProvider>
  );
};
