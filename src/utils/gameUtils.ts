import { Personaje, Posiciones } from "@/types/gameStateSchema";

export const esMovimientoValido = (
  posiciones: Posiciones,
  personaje: Personaje,
): boolean => {
  if (
    personaje !== "granjero" &&
    posiciones.granjero !== posiciones[personaje]
  ) {
    return false;
  }
  return true;
};

export const verificarJuegoTerminado = (posiciones: Posiciones): boolean => {
  if (
    posiciones.lobo === posiciones.oveja &&
    posiciones.granjero !== posiciones.lobo
  ) {
    return true;
  }

  if (
    posiciones.oveja === posiciones.lechuga &&
    posiciones.granjero !== posiciones.oveja
  ) {
    return true;
  }

  return false;
};

export const verificarVictoria = (posiciones: Posiciones): boolean => {
  return Object.values(posiciones).every((posicion) => posicion === "derecha");
};
