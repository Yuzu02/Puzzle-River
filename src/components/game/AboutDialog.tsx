"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaInfoCircle } from "react-icons/fa";

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="hover:scale-105 transition-transform duration-200 ease-in-out bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 dark:hover:bg-gray-700/90 hover:bg-gray-100/90 dark:text-gray-100 p-2"
        >
          <FaInfoCircle className="h-4 w-4 text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-black dark:text-white rounded-2xl shadow-2xl border-2 border-blue-100 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900 dark:text-blue-300 pb-4 border-b border-blue-100 dark:border-gray-700 text-center">
            Trabajo Final IA 2024-03
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          <div className="px-3 py-2 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">
              Nombre
            </p>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400 tracking-wide bg-blue-50 dark:bg-blue-900/20 py-2 px-4 rounded-lg inline-block shadow-sm hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 ease-in-out cursor-default hover:text-blue-700 dark:hover:text-blue-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 animate-fade-in">
              Frederick Daell Lied Diaz
            </p>
          </div>
          <div className="px-3 py-2 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">
              Matrícula
            </p>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400 tracking-wide bg-blue-50 dark:bg-blue-900/20 py-2 px-4 rounded-lg inline-block shadow-sm hover:shadow-xl hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-300 ease-in-out cursor-default hover:text-blue-700 dark:hover:text-blue-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 animate-fade-in">
              22-SISN-2-045
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
