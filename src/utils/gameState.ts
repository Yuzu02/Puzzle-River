import { Personaje, EstadoJuego } from "@/types/gameStateSchema";

// Interfaz que define las acciones posibles en el juego
export interface AccionesJuego {
  mover: (personaje: Personaje) => void;    // Mueve un personaje de una orilla a otra
  deshacer: () => void;                     // Deshace el último movimiento
  rehacer: () => void;                      // Rehace un movimiento deshecho
  reiniciar: () => void;                    // Reinicia el juego al estado inicial
}

// Estado inicial del juego:
// - Todos los personajes comienzan en la orilla izquierda
// - Historial y estados futuros vacíos
// - Juego no terminado y no ganado
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
  razonPerdida: null,
};
