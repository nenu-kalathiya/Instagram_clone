// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("server created");
//     res.end("working")
// });

// server.listen(5000, "localhost", () => {
//     console.log("Server is running on 5000");

// })

// const express = require("express");
// const app = express();
// const PORT = 5000;
// const cors = require("cors")
// const data = require('./data.js')

// app.use(cors())

// app.get('/about',(req,res) => {
//     res.json("Hello World")
// }),
// app.get('/',(req,res) => {
//     res.json(data)
// })

// app.listen(PORT, () => {
//     console.log("server is running on " + PORT);
// })

const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose")
const mongoUrl = require("./keys")

require("./models/model")
app.use(express.json())
app.use(require("./routes/auth"))
mongoose.connect(mongoUrl);

mongoose.connection.on("connected",() => {
    console.log("successfully connected to mongo");
})

mongoose.connection.on("error",() => {
    console.log("not connected to mongodb");
})

app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
})