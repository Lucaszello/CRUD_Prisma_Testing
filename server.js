const express = require('express')
const router = require('./routes/post')
const addRouter = require('./routes/addPost')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
app.set("view engine","ejs")
app.set("views","views")

app.use((req,res,next) => {
    console.log("home");
    next()
} )

app.use((req,res,next) => {
    console.log("addPost");
    next()
} )

app.use(bodyParser.urlencoded({extended : false}))
app.use(router)
app.use("/admin",addRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))