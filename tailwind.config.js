/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--clr-bg))",
        destructive: "hsl(var(--clr-destructive))",
        primary: "hsl(var(--clr-text))",
        border: "hsl(var(--clr-border))",
        input: "hsl(var(--clr-input))",
        ring: "hsl(var(--clr-ring) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
