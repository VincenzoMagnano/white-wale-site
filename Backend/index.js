const port = 4000;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://magnanovincenzojobs:p6jcsZZNnTkSthz1@cluster0.t50ujml.mongodb.net/')

app.get('/', (_, res) => {
    res.send("Express is Running")
})

app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on Port" + port)
    } else {
        console.log("Error" + error)
    }
})

const Users = mongoose.model("Users", {
    id: {
        type: Number,
        require: true
    },
    completename: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cellnumber:{
        type: Number,
        required: true
    }
  

})
app.post('/addusers', async (req, resp) => {
    let users = await Users.find({});
    let id;
    if (users.length > 0) {
        last_users = users.slice(-1)[0]
        id = last_users.id + 1
    } else {
        id = 1
    }
    const user = new Users({
        id: id,
        completename: req.body.completename,
        email: req.body.email,
        password: req.body.password,
        cellnumber: req.body.cellnumber
        
    })
    console.log(users);
    await user.save();
    console.log('Saved')
    resp.json({
        success: true,
        completename: req.body.completename
    })
})