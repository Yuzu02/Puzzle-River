import { Personaje, Posiciones } from "@/types/gameStateSchema";

// Valida si un movimiento es permitido:
// - El granjero siempre debe estar presente en cualquier movimiento
// - Solo se puede mover un personaje que esté en la misma orilla que el granjero
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

// Verifica las condiciones de pérdida del juego:
// 1. Si el lobo y la oveja están en la misma orilla sin el granjero
// 2. Si la oveja y la lechuga están en la misma orilla sin el granjero
export const verificarJuegoTerminado = (
  posiciones: Posiciones,
): string | null => {
  if (
    posiciones.lobo === posiciones.oveja &&
    posiciones.granjero !== posiciones.lobo
  ) {
    return "El lobo se comió a la oveja";
  }

  if (
    posiciones.oveja === posiciones.lechuga &&
    posiciones.granjero !== posiciones.oveja
  ) {
    return "La oveja se comió la lechuga";
  }

  return null;
};

// Verifica la condición de victoria:
// - Todos los personajes deben estar en la orilla derecha
export const verificarVictoria = (posiciones: Posiciones): boolean => {
  return Object.values(posiciones).every((posicion) => posicion === "derecha");
};
