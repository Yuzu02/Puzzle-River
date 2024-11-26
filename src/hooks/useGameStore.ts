import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { EstadoJuego, Orilla } from "@/types/gameStateSchema";
import { AccionesJuego, estadoInicial } from "@/utils/gameState";
import {
  verificarJuegoTerminado,
  verificarVictoria,
  esMovimientoValido,
} from "@/utils/gameUtils";

export const useGameStore = create<EstadoJuego & AccionesJuego>()(
  devtools((set, get) => ({
    ...estadoInicial,

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

      set({
        posiciones: nuevasPosiciones,
        historial: [...estadoActual.historial, posiciones],
        estadosFuturos: [],
        juegoTerminado: verificarJuegoTerminado(nuevasPosiciones),
        haGanado: verificarVictoria(nuevasPosiciones),
      });
    },

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
      });
    },

    rehacer: () => {
      const { estadosFuturos, posiciones, historial } = get();
      if (estadosFuturos.length === 0) return;

      const siguienteEstado = estadosFuturos[0];
      const nuevosEstadosFuturos = estadosFuturos.slice(1);

      set({
        posiciones: siguienteEstado,
        historial: [...historial, posiciones],
        estadosFuturos: nuevosEstadosFuturos,
        juegoTerminado: verificarJuegoTerminado(siguienteEstado),
        haGanado: verificarVictoria(siguienteEstado),
      });
    },

    reiniciar: () => {
      set(estadoInicial);
    },
  })),
);
