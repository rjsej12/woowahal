module.exports={
  entry: {
    cart: './src/js/pages/cart.js',
    category: './src/js/pages/category.js',
    main: './src/js/pages/main.js',
    result: './src/js/pages/result.js',
    store_detail: './src/js/pages/store_detail.js',
    store_list: './src/js/pages/store_list.js',
    store_order: './src/js/pages/store_order.js',
  },
  output: {
    path: __dirname+"/public/js/",
    filename: "[name].js",
  },

  watch: true,
  mode: "development"
}