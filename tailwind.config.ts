import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#E1E2F1",
          300: "#B2B6E2",
          500: "#9CA2EA",
          700: "#6B74CE",
          900: "#4651D1",
        },
        warning: {
          100: "#FFF4E4",
          500: "#D9CA7B",
          900: "#9E8E00",
        },
        error: {
          100: "#FFEEEF",
          500: "#F55C67",
          900: "#DD224F",
        },
        gray: {
          100: "#F3F5F7",
          200: "#E2E5E7",
          300: "#D4D7DD",
          400: "#CBCBCF",
          500: "#ABAFB5",
          600: "#989DA5",
          700: "#747A81",
          800: "#5A5F62",
          900: "#1F2324",
        },
        destructive: "#DD224F",
      },
    },
  },
  plugins: [],
};
export default config;
