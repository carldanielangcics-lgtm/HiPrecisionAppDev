/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
        danger: "#ef4444",
        warning: "#f59e0b",
        info: "#0ea5e9",
        light: "#f3f4f6",
        dark: "#1f2937",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        base: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
