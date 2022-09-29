const path = require("path");

module.exports = {
  entry: {
    cart: "./src/js/pages/cart",
    category: "./src/js/pages/category",
    main: "./src/js/pages/main",
    result: "./src/js/pages/result",
    store_detail: "./src/js/pages/store_detail",
    store_list: "./src/js/pages/store_list",
    store_order: "./src/js/pages/store_order",
  },

  output: {
    path: path.resolve(__dirname, "./public/js/"),
    filename: "[name].js",
  },
};
