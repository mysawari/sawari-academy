/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: "#17181A",
          soft: "#212327",
          line: "#2C2E32",
        },
        concrete: {
          DEFAULT: "#E9E6DD",
          dim: "#DEDACE",
          line: "rgba(23,24,26,0.14)",
        },
        plate: {
          yellow: "#F5B700",
          "yellow-dim": "#C99400",
          green: "#1F7A4D",
        },
        paper: "#FAFAF8",
        steel: "#8A9099",
        ink: "#1D1F22",
      },
      fontFamily: {
        display: ["var(--font-barlow)", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      letterSpacing: {
        plate: "0.08em",
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },
      backgroundImage: {
        "lane-dark":
          "repeating-linear-gradient(to bottom, rgba(245,183,0,0.55) 0px, rgba(245,183,0,0.55) 22px, transparent 22px, transparent 40px)",
        "lane-light":
          "repeating-linear-gradient(to bottom, rgba(23,24,26,0.35) 0px, rgba(23,24,26,0.35) 22px, transparent 22px, transparent 40px)",
      },
    },
  },
  plugins: [],
};
