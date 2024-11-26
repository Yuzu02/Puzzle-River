import { z } from "zod";

// Define los personajes disponibles en el juego
export const PersonajeEnum = z.enum(["granjero", "lobo", "oveja", "lechuga"]);
// Define las orillas posibles del río
export const OrillasEnum = z.enum(["izquierda", "derecha"]);

// Esquema que define la posición de cada personaje
export const PosicionesSchema = z.record(PersonajeEnum, OrillasEnum);

// Esquema principal del estado del juego
export const EstadoJuegoSchema = z.object({
  posiciones: PosicionesSchema,          // Posición actual de cada personaje
  historial: z.array(PosicionesSchema),  // Historial de movimientos para deshacer
  estadosFuturos: z.array(PosicionesSchema), // Estados guardados para rehacer
  juegoTerminado: z.boolean(),           // Indica si el juego se perdió
  haGanado: z.boolean(),                 // Indica si el jugador ganó
  razonPerdida: z.string().nullable(),   // Razón de la pérdida, si aplica
});

export type Personaje = z.infer<typeof PersonajeEnum>;
export type Orilla = z.infer<typeof OrillasEnum>;
export type Posiciones = z.infer<typeof PosicionesSchema>;
export type EstadoJuego = z.infer<typeof EstadoJuegoSchema>;
