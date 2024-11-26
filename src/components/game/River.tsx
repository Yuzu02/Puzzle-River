"use client";

import { useGameStore } from "@/hooks/useGameStore";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiCanoe } from "react-icons/gi";

export const River = () => {
  const posiciones = useGameStore((state) => state.posiciones);
  const isBoatOnRight = posiciones.granjero === "derecha";
  const [isMoving, setIsMoving] = useState(false);
  const [moveDirection, setMoveDirection] = useState<"left" | "right" | null>(
    null,
  );
  const [boatFacingRight, setBoatFacingRight] = useState(true);

  useEffect(() => {
    if (isBoatOnRight) {
      setMoveDirection("right");
      setBoatFacingRight(true); // Mira hacia la derecha cuando va hacia la derecha
    } else {
      setMoveDirection("left");
      setBoatFacingRight(false); // Mira hacia la izquierda cuando va hacia la izquierda
    }
    setIsMoving(true);

    const timer = setTimeout(() => {
      setIsMoving(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isBoatOnRight]);

  return (
    <div className="w-40 bg-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 mx-8 rounded-[2rem] relative overflow-visible min-h-[300px] flex items-center justify-center shadow-inner">
      <div className="absolute inset-0">
        {/* Water waves effect */}
        <div className="absolute inset-0 opacity-30 overflow-hidden rounded-[2rem]">
          {[...Array(12)].map((_, index) => (
            <div
              key={`wave-${crypto.randomUUID()}`}
              className="absolute w-full h-4 bg-white/30"
              style={{
                top: `${index * 25}px`,
                animation: "wave 2s ease-in-out infinite",
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Directional arrows */}
        <div
          className={cn(
            "absolute top-1/2 transform -translate-y-1/2 transition-all duration-700 z-10",
            isBoatOnRight ? "right-[-2rem]" : "left-[-2rem]",
          )}
        >
          <div className="bg-white/90 dark:bg-gray-800 p-3 rounded-full shadow-xl hover:scale-110 transition-transform">
            {isBoatOnRight ? (
              <FaArrowLeft className="w-6 h-6 text-blue-600 dark:text-blue-400 animate-pulse" />
            ) : (
              <FaArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 animate-pulse" />
            )}
          </div>
        </div>

        {/* Animated Boat */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 transition-all duration-1000",
            "transform hover:scale-110",
            isMoving ? "scale-105" : "",
            !boatFacingRight ? "scale-x-[-1]" : "",
            (() => {
              if (moveDirection === "right") {
                return isMoving ? "left-[50%] translate-x-[-50%]" : "right-2";
              }
              return isMoving ? "left-[50%] translate-x-[-50%]" : "left-2";
            })(),
          )}
          style={{
            transform: "translateY(-50%)",
          }}
        >
          <GiCanoe className="w-16 h-16 text-amber-800 dark:text-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
        </div>
      </div>
    </div>
  );
};
