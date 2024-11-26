import { Personaje, EstadoJuego } from "@/types/gameStateSchema";

export interface AccionesJuego {
  mover: (personaje: Personaje) => void;
  deshacer: () => void;
  rehacer: () => void;
  reiniciar: () => void;
}

export const estadoInicial: EstadoJuego = {
  posiciones: {
    granjero: "izquierda",
    lobo: "izquierda",
    oveja: "izquierda",
    lechuga: "izquierda",
  },
  historial: [],
  estadosFuturos: [],
  juegoTerminado: false,
  haGanado: false,
};
