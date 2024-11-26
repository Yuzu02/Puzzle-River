"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useGameStore } from "@/hooks/useGameStore";

// Componente que muestra un mensaje y animación cuando el jugador pierde el juego.
export const LostGame = () => {
  const razonPerdida = useGameStore((state) => state.razonPerdida);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <Card className="bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 p-4">
        <p className="text-red-500 dark:text-red-400 font-bold text-xl">
          ¡Juego terminado! {razonPerdida}
        </p>
      </Card>
    </motion.div>
  );
};
