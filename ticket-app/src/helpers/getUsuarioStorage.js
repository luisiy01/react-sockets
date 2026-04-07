export const getUsuarioStorage = () => {
  const agente = localStorage.getItem("agente") || null;
  const escritorio = localStorage.getItem("escritorio") || null;

  return { agente, escritorio };
};
