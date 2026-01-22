tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-in": "slideIn 0.8s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
};
