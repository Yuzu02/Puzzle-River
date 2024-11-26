import { Personaje } from "@/types/gameStateSchema";
import { GiFarmer, GiWolfHead, GiSheep, GiCarrot } from "react-icons/gi";

// Lista de personajes del juego con sus íconos y nombres.
export const Personajes: {
  id: Personaje;
  icon: React.ReactNode;
  name: string;
}[] = [
  { id: "granjero", icon: <GiFarmer className="w-8 h-8" />, name: "Granjero" },
  { id: "lobo", icon: <GiWolfHead className="w-8 h-8" />, name: "Lobo" },
  { id: "oveja", icon: <GiSheep className="w-8 h-8" />, name: "Oveja" },
  { id: "lechuga", icon: <GiCarrot className="w-8 h-8" />, name: "Lechuga" },
];
