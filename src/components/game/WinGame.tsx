import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const WinGame = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <Card className="bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 p-6 inline-block">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-green-600 dark:text-green-400 font-bold text-xl"
        >
          🎉 ¡Felicitaciones! ¡Has ganado! 🎉
        </motion.div>
      </Card>
    </motion.div>
  );
};
