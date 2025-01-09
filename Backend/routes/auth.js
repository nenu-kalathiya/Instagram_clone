const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

router.get('/', (req,res)=>{
    res.send("Hello")
})

router.post("/signup", (req, res) => {
    // res.json("data posted successfully")
    const {name, userName, email, password} = req.body;
    if (!name || !email || !userName || !password) {
        res.status(422).json({ error: "Please add all the fields" })
    }
    USER.findOne({email:email}),them((savedUser) => {
        console.log(savedUser);
        
    })

    const user = new USER({
        name,
        email,
        userName,
        password
    })

    user.save()
    .then(user => {res.json({message: "Saved successfully"})})
    .catch(err => {console.log(err);
    })
})

module.exports = router