module.exports={
    entry: "./src/js/app.js",
    output: {
        path: __dirname+"/public/",
        filename: "bundle.js",
      },
      watch: true,
      mode: "development"
}