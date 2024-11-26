// hooks/useCustomTheme.ts
import { useTheme } from "next-themes";

export default function useCustomTheme() {
  //* Hook para manejar el tema de la app y de sonner al mismo tiempo
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system" | undefined;
  };
  return theme;
}
