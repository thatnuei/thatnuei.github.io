module.exports = {
  purge: ["./**/*.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "'Fira Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
