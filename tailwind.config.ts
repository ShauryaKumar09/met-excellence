import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#E8EEF1",
        blue1: "#43B0F1",
        blue2: "#057DCD",
        blue3: "#1E3D58",
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
} satisfies Config;
