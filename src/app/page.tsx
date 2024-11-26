import { GameBoard } from "@/components/game/GameBoard";

export default function Game() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 py-8 dark:bg-gradient-to-b dark:from-blue-900 dark:to-slate-900">
      <GameBoard />
    </div>
  );
}
