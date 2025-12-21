import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
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
        neon: {
          purple: "hsl(var(--neon-purple))",
          blue: "hsl(var(--neon-blue))",
          pink: "hsl(var(--neon-pink))",
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, hsl(var(--neon-purple)), hsl(var(--neon-blue)), hsl(var(--neon-pink)))',
      },
      transitionProperty: {
        'smooth': 'var(--transition-smooth)',
      },
      boxShadow: {
        'neon': 'var(--shadow-neon)',
        'glow': 'var(--shadow-glow)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
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
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(20px, -50px) scale(1.1)" },
          "50%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "75%": { transform: "translate(50px, 50px) scale(1.05)" },
        },
        "blob-reverse": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-30px, 40px) scale(1.1)" },
          "50%": { transform: "translate(30px, -30px) scale(0.95)" },
          "75%": { transform: "translate(-40px, -40px) scale(1.05)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "neon-line": {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "translateX(-100%) rotate(-45deg)"
          },
          "50%": { 
            opacity: "1",
            transform: "translateX(100%) rotate(-45deg)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob var(--blob-duration) infinite ease-in-out",
        "blob-reverse": "blob-reverse var(--blob-reverse-duration) infinite ease-in-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "neon-line": "neon-line 4s ease-in-out infinite",
      },
      animationDelay: {
        "2000": "2s",
        "3000": "3s",
        "4000": "4s",
        "5000": "5s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;