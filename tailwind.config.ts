import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Beagle design system — browns, tans, and cream
        beagle: {
          // Warm creams
          cream: "#FDF6EC",
          "cream-dark": "#F5E8D3",
          // Golden tans
          tan: "#D4A96A",
          "tan-light": "#E8C99A",
          "tan-dark": "#B8863A",
          // Rich browns
          brown: "#7B4F2E",
          "brown-light": "#A06B3F",
          "brown-dark": "#4E2E12",
          // Warm blacks / deep espresso
          espresso: "#2C1A0E",
          // Accent — warm amber
          amber: "#E8A030",
          "amber-light": "#F5C060",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"],
      },
      fontSize: {
        // Typography scale
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.16" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
      },
      spacing: {
        // Extended spacing scale
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
      },
      maxWidth: {
        prose: "65ch",
        content: "80rem",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        warm: "0 4px 24px 0 rgba(123, 79, 46, 0.10)",
        "warm-lg": "0 8px 40px 0 rgba(123, 79, 46, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
