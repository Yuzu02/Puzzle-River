"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaQuestionCircle, FaExclamationCircle } from "react-icons/fa";

// Componente que muestra un diálogo modal con las reglas del juego.
export function GameRulesDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="hover:scale-105 transition-transform duration-200 ease-in-out bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 dark:hover:bg-gray-700/90 hover:bg-gray-100/90 dark:text-gray-100"
        >
          <FaQuestionCircle className="mr-2 h-4 w-4 text-blue-500" />
          Reglas
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-black dark:text-white rounded-2xl shadow-2xl border-2 border-blue-100 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900 dark:text-blue-300 pb-4 border-b border-blue-100 dark:border-gray-700 text-center">
            Reglas del Juego
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <ul className="space-y-3">
            {[
              "El granjero solo puede llevar un elemento a la vez",
              "El lobo se comerá a la oveja si se quedan solos",
              "La oveja se comerá la lechuga si se quedan solas",
              "Haz clic en un personaje para moverlo con el bote",
            ].map((rule) => (
              <li
                key={rule}
                className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 group"
              >
                <FaExclamationCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors mr-3" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-900 dark:group-hover:text-blue-200 transition-colors duration-200 text-sm font-medium">
                  {rule}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
