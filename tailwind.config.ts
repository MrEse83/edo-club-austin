import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm parchment paper — the site's base, not a generic pale cream
        parchment: "#F1E8D9",
        "parchment-soft": "#E9DCC6",
        // Deep warm near-black, used for body text — reads as oxidized bronze, not pure black
        ink: "#241A14",
        // Primary brand color: burnt bronze, drawn from cast bronze plaques
        bronze: {
          DEFAULT: "#8B4A2B",
          dark: "#6B3820",
          light: "#A86A45",
        },
        // Accent / calls-to-action: coral, referencing the coral beads (ivie) worn in Edo regalia
        coral: {
          DEFAULT: "#D24B36",
          dark: "#B23A28",
        },
        // Secondary accent, used sparingly: brass/gold detailing
        gold: "#BB8A3C",
        // Deep contrast section background (used once, for the History section)
        deep: "#2B1B12",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
