"use client";

// Components
import { Moon, Sun } from "lucide-react"; // ? Se puede cambiar por iconos de react-icons
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { themeMessages, toastMessages } from "@/utils/constants";

// Hooks
import useCustomTheme from "@/hooks/useCustomTheme";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// Utils
interface ThemeModeToggleProps {
  className?: string;
  icon?: string;
}

export function ThemeModeToggle({
  className,
  icon,
}: Readonly<ThemeModeToggleProps>) {
  // Setup hooks
  const { setTheme } = useTheme();
  const theme = useCustomTheme();

  // Manejo de cookies para el tema
  function handleThemeCookieChange(newTheme: string): void {
    document.cookie = `NEXT_THEME=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={cn(className)}>
          <Sun
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
              icon,
            )}
          />
          <Moon
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              icon,
            )}
          />
          <span className="sr-only">{themeMessages.toggleThemeText}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="bg-white dark:bg-gray-800/95 border dark:border-gray-800/95 "
      >
        <DropdownMenuCheckboxItem
          onClick={() => {
            setTheme("light");
            handleThemeCookieChange("light");
            toast.success(themeMessages.themeChangeToLightMode, {
              duration: 2500,
            });
          }}
          checked={theme === "light"}
          className="cursor-pointer hover:bg-slate-100 dark:bg-gray-800/95 dark:text-white"
        >
          {toastMessages.lightThemeText}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => {
            setTheme("dark");
            handleThemeCookieChange("light");
            toast.success(themeMessages.themeChangeToDarkMode, {
              duration: 2500,
            });
          }}
          checked={theme === "dark"}
          className="cursor-pointer hover:bg-slate-100 dark:bg-gray-800/95 dark:text-white"
        >
          {toastMessages.darkThemeText}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => {
            setTheme("system");
            handleThemeCookieChange("");
            toast.success(themeMessages.themeChangeToSystemMode, {
              duration: 2500,
            });
          }}
          checked={theme === "system"}
          className="cursor-pointer hover:bg-slate-100 dark:bg-gray-800/95 dark:text-white"
        >
          {toastMessages.systemThemeText}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
