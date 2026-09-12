import { useEffect } from "react";

function ThemeManager() {
  useEffect(() => {
    const applyTheme = () => {
      let savedSettings = null;

      try {
        savedSettings = JSON.parse(
          localStorage.getItem("appSettings")
        );
      } catch {
        savedSettings = null;
      }

      const selectedTheme =
        savedSettings?.appearance?.theme || "light";

      let finalTheme = selectedTheme;

      if (selectedTheme === "system") {
        finalTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";
      }

      document.documentElement.setAttribute(
        "data-theme",
        finalTheme
      );

      const compactMode =
        savedSettings?.appearance?.compactMode || false;

      document.documentElement.setAttribute(
        "data-compact",
        compactMode ? "true" : "false"
      );
    };

    applyTheme();

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleSystemThemeChange = () => {
      let settings = null;

      try {
        settings = JSON.parse(
          localStorage.getItem("appSettings")
        );
      } catch {
        settings = null;
      }

      if (
        settings?.appearance?.theme === "system"
      ) {
        applyTheme();
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );

    window.addEventListener(
      "settingsUpdated",
      applyTheme
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );

      window.removeEventListener(
        "settingsUpdated",
        applyTheme
      );
    };
  }, []);

  return null;
}

export default ThemeManager;