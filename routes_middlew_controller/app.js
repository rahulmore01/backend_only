const express = require('express')
const app = express()
const port = process.env.PORT || 8000;

// to import our routes
const products_routes = require("./routes/products.js")

// middleware or "use" to use the custom routes
app.use("/api/products", products_routes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})