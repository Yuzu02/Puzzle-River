"use client";

import { FaUndo, FaRedo, FaSync } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGameStore } from "@/hooks/useGameStore";
import { BankSection, River, LostGame, WinGame } from "@/components/game";
import { GameRulesDialog } from "@/components/game/GameRulesDialog";
import { AboutDialog } from "@/components/game/AboutDialog";
import { ThemeModeToggle } from "@/components/theme/ThemeModeToggle";

// Componente principal que representa el tablero del juego y coordina los subcomponentes.
export function GameBoard() {
  const {
    deshacer,
    rehacer,
    reiniciar,
    historial,
    estadosFuturos,
    juegoTerminado,
    haGanado,
  } = useGameStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto p-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-white/60 dark:to-purple-500 bg-clip-text text-transparent">
          Puzzle del Río
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          ¡Ayuda al granjero a transportar a todos de manera segura a través del
          río!
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center mb-8 gap-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={deshacer}
          disabled={historial.length === 0}
          className="hover:scale-110 transition-transform bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 dark:hover:bg-gray-700/90 hover:bg-gray-100/90 dark:text-gray-100"
        >
          <FaUndo className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={rehacer}
          disabled={estadosFuturos.length === 0}
          className="hover:scale-110 transition-transform bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 dark:hover:bg-gray-700/90 hover:bg-gray-100/90 dark:text-gray-100"
        >
          <FaRedo className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          onClick={reiniciar}
          className="hover:scale-105 transition-transform duration-200 ease-in-out bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 dark:hover:bg-gray-700/90 hover:bg-gray-100/90 dark:text-gray-100"
        >
          <FaSync className="mr-2 h-4 w-4 text-blue-500" />
          Reiniciar Juego
        </Button>
        <GameRulesDialog />
        <AboutDialog />
        <ThemeModeToggle className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 dark:hover:bg-gray-700/90 hover:bg-gray-100/90 dark:text-gray-100" />
      </motion.div>

      <Card className="p-6 mb-10 dark:bg-blue-900 dark:border-blue-700">
        <motion.div
          className="flex items-center justify-between gap-4"
          layoutId="game-area"
        >
          <BankSection side="izquierda" />
          <River />
          <BankSection side="derecha" />
        </motion.div>
      </Card>

      {juegoTerminado && !haGanado && <LostGame />}

      {haGanado && <WinGame />}
    </motion.div>
  );
}
