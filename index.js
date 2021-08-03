const express = require("express"),
      app = express(),
      port = process.env.PORT || 3000


app.use(express.static("files"))
app.set("view engine", "ejs")
app.set("views", "files/templates")
module.exports.app = app
const routes = require("./files/routes")


app.listen(port, () => {
    console.log(`Server listening on port http:/localhost:${port}...`)
})
