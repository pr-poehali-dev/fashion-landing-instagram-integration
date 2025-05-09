
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        playfair: ["Playfair Display", "serif"],
        'space-mono': ['"Space Mono"', "monospace"],
        'oswald': ["Oswald", "sans-serif"],
        'bebas-neue': ['"Bebas Neue"', "sans-serif"],
      },
      colors: {
        // Ретро-цвета 60-х
        'retro-orange': '#FF5E1A',
        'retro-yellow': '#FFD800',
        'retro-mint': '#96E6B3',
        'retro-pink': '#FF5C8D',
        'retro-teal': '#05B2DC',
        'retro-beige': '#F0EAD6',
        'retro-brown': '#6E4C1E',
        'retro-red': '#E94B3C',
        'retro-navy': '#1D3461',
        'retro-bg': '#F9F4EF',
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "rotate-in": {
          "0%": { transform: "rotate(-5deg) scale(0.9)", opacity: "0" },
          "100%": { transform: "rotate(0) scale(1)", opacity: "1" }
        },
        "pop-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "psychedelic": {
          "0%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(45deg)" },
          "100%": { filter: "hue-rotate(0deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "rotate-in": "rotate-in 0.5s ease-out forwards",
        "pop-in": "pop-in 0.5s ease-out forwards",
        "psychedelic": "psychedelic 10s infinite ease-in-out"
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
