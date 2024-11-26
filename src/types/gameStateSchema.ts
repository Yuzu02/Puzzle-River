import { z } from "zod";

export const PersonajeEnum = z.enum(["granjero", "lobo", "oveja", "lechuga"]);
export const OrillasEnum = z.enum(["izquierda", "derecha"]);

export const PosicionesSchema = z.record(PersonajeEnum, OrillasEnum);
export const EstadoJuegoSchema = z.object({
  posiciones: PosicionesSchema,
  historial: z.array(PosicionesSchema),
  estadosFuturos: z.array(PosicionesSchema),
  juegoTerminado: z.boolean(),
  haGanado: z.boolean(),
});

export type Personaje = z.infer<typeof PersonajeEnum>;
export type Orilla = z.infer<typeof OrillasEnum>;
export type Posiciones = z.infer<typeof PosicionesSchema>;
export type EstadoJuego = z.infer<typeof EstadoJuegoSchema>;
