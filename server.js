var bootstrapApp = require("./setup_app/setup")
var app = bootstrapApp()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || 3000, () => console.log("Listening on 3000"))