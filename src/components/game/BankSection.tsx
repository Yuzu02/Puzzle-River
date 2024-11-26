import { useGameStore } from "@/hooks/useGameStore";
import { Orilla } from "@/types/gameStateSchema";
import { cn } from "@/lib/utils";
import { Personajes } from "./Personajes";

export const BankSection = ({ side }: { side: Orilla }) => {
  const { posiciones, haGanado } = useGameStore();
  const move = useGameStore((state) => state.mover);

  const charactersOnThisSide = Personajes.filter(
    ({ id }) => posiciones[id] === side,
  );

  return (
    <div className="flex-1 min-h-[300px] bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-slate-800 p-6 rounded-xl shadow-lg border-2 border-green-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-6 text-center text-green-800 dark:text-green-400">
        {side === "derecha" ? "Orilla Izquierda" : "Orilla Derecha"}
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {charactersOnThisSide.map(({ id, icon, name }) => (
          <button
            key={id}
            onClick={() => move(id)}
            disabled={haGanado}
            className={cn(
              "flex flex-col items-center p-4 rounded-lg transition-all duration-300",
              "hover:bg-green-200 dark:hover:bg-gray-700 hover:scale-110 hover:shadow-md",
              "active:scale-95",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
              "border-2 border-transparent hover:border-green-300 dark:hover:border-green-500",
              "animate-fadeIn",
              "dark:text-gray-100",
            )}
          >
            {icon}
            <span className="text-sm font-medium mt-2">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
