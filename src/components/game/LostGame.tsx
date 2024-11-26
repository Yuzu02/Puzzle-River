import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const LostGame = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <Card className="bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 p-4">
        <p className="text-red-500 dark:text-red-400 font-bold text-xl">
          ¡Juego terminado! ¡Alguien se comió a alguien! Intenta de nuevo.
        </p>
      </Card>
    </motion.div>
  );
};
