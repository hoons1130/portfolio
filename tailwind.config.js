/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom1: "rgb(249, 247, 247)",
        custom2: "rgb(219, 226, 239)",
        custom3: "rgb(63, 114, 175)",
        custom4: "rgb(17, 45, 78)",
      },
    },
  },
  plugins: [],
};
