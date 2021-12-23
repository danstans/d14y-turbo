module.exports = {
  mode: "jit",
  content: ["./**/*.{ts,tsx,js,jsx}"],
  prefix: 'vision-',
  fontFamily: {
    sans: ["Inter", "sans-serif"], // Overrides "default" font so we don't have to set a `font-*` class everywhere
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          'system-ui',
          "sans-serif",
        ]
      }
    },
  },
  plugins: [],
}
