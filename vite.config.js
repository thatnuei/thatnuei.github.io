const { resolve } = require("path")

module.exports = {
  build: {
    rollupOptions: {
      input: {
        "main": resolve(__dirname, "index.html"),
        "group-sorter": resolve(__dirname, "group-sorter.html"),
      },
    },
  },
}
