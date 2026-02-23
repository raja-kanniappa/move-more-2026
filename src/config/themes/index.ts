import { fitmonks } from "./fitmonks";
import { sleek } from "./sleek";
import { funky } from "./funky";
import { metamask } from "./metamask";
import { alpine } from "./alpine";
import type { ThemeTokens } from "./types";

export type ThemeName = "fitmonks" | "sleek" | "funky" | "metamask" | "alpine";

export const themes: Record<ThemeName, ThemeTokens> = {
  fitmonks,
  sleek,
  funky,
  metamask,
  alpine,
};

export const themeLabels: Record<ThemeName, string> = {
  fitmonks: "FitMonks",
  sleek: "Sleek",
  funky: "Funky",
  metamask: "MetaMask",
  alpine: "Alpine",
};

// Preview swatch: [bg, primary, accent]
export const themeSwatches: Record<ThemeName, [string, string, string]> = {
  fitmonks: ["#f2f6eb", "#568265", "#fb6e52"],
  sleek:    ["#000000", "#30D158", "#FF453A"],
  funky:    ["#0f0f1a", "#e91e8c", "#ffe600"],
  metamask: ["#1A1026", "#8B5CF6", "#FB713C"],
  alpine:   ["#00050d", "#4dabff", "#ff4d6d"],
};

export type { ThemeTokens };
