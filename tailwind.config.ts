import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        // KHG-Grün aus dem Logo-Schriftzug (500 = Button-Fläche, Kontrast > 4.5 auf bone).
        brand: {
          50: "#F1F8EA",
          100: "#DDEFCB",
          200: "#BADF98",
          300: "#8CC35A",
          400: "#5A9E2A",
          500: "#3A7F1A",
          600: "#2F6B15",
          700: "#255512",
          800: "#1C410F",
          900: "#132C0A"
        },
        // Stahlgrau aus dem Logo-Ring: Sekundärakzent für Haustechnik.
        stahl: {
          50: "#F3F5F7",
          100: "#E3E7EB",
          200: "#C7CED6",
          300: "#A3ADB8",
          400: "#7E8A97",
          500: "#5F6B78",
          600: "#4A5561",
          700: "#38404A",
          800: "#2A3038",
          900: "#1C2026"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
