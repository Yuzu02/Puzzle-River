import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { EstadoJuego, Orilla } from "@/types/gameStateSchema";
import { AccionesJuego, estadoInicial } from "@/utils/gameState";
import {
  verificarJuegoTerminado,
  verificarVictoria,
  esMovimientoValido,
} from "@/utils/gameUtils";

// Store principal del juego usando Zustand
// Mantiene el estado del juego y define las acciones permitidas
export const useGameStore = create<EstadoJuego & AccionesJuego>()(
  devtools((set, get) => ({
    ...estadoInicial,

    // Mueve un personaje de una orilla a otra
    // - Valida que el movimiento sea legal
    // - Actualiza las posiciones
    // - Guarda el historial para deshacer
    // - Verifica condiciones de victoria o pérdida
    mover: (personaje) => {
      const estadoActual = get();
      const { posiciones } = estadoActual;

      if (
        estadoActual.juegoTerminado ||
        estadoActual.haGanado ||
        !esMovimientoValido(posiciones, personaje)
      ) {
        return;
      }

      const nuevaOrilla: Orilla =
        posiciones[personaje] === "izquierda" ? "derecha" : "izquierda";
      const nuevasPosiciones = {
        ...posiciones,
        [personaje]: nuevaOrilla,
        ...(personaje !== "granjero" ? { granjero: nuevaOrilla } : {}),
      };

      const razonPerdida = verificarJuegoTerminado(nuevasPosiciones);

      set({
        posiciones: nuevasPosiciones,
        historial: [...estadoActual.historial, posiciones],
        estadosFuturos: [],
        juegoTerminado: Boolean(razonPerdida),
        haGanado: verificarVictoria(nuevasPosiciones),
        razonPerdida: razonPerdida,
      });
    },

    // Deshace el último movimiento
    // - Restaura el estado anterior del historial
    // - Guarda el estado actual en estados futuros
    // - Resetea las condiciones de victoria o pérdida
    deshacer: () => {
      const { historial, posiciones, estadosFuturos } = get();
      if (historial.length === 0) return;

      const estadoAnterior = historial[historial.length - 1];
      const nuevoHistorial = historial.slice(0, -1);

      set({
        posiciones: estadoAnterior,
        historial: nuevoHistorial,
        estadosFuturos: [posiciones, ...estadosFuturos],
        juegoTerminado: false,
        haGanado: false,
        razonPerdida: null,
      });
    },

    // Rehace un movimiento previamente deshecho
    // - Restaura el siguiente estado de estados futuros
    // - Actualiza el historial
    // - Verifica condiciones de victoria o pérdida
    rehacer: () => {
      const { estadosFuturos, posiciones, historial } = get();
      if (estadosFuturos.length === 0) return;

      const siguienteEstado = estadosFuturos[0];
      const nuevosEstadosFuturos = estadosFuturos.slice(1);

      const razonPerdida = verificarJuegoTerminado(siguienteEstado);

      set({
        posiciones: siguienteEstado,
        historial: [...historial, posiciones],
        estadosFuturos: nuevosEstadosFuturos,
        juegoTerminado: Boolean(razonPerdida),
        haGanado: verificarVictoria(siguienteEstado),
        razonPerdida: razonPerdida,
      });
    },

    // Reinicia el juego al estado inicial
    reiniciar: () => {
      set(estadoInicial);
    },
  })),
);
