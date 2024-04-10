const port = 4000;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

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
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cellnumber: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }


})

const trasporter = nodemailer.createTransport({
    host:  'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'magnano.vincenzo.jobs@gmail.com',
        password:''
    },
})

async function sendEmail(email, completename) {
    try {
        const mailOptions = {
            from: 'magnano.vincenzo.jobs@gmail.com',
            to: email,
            subject: 'Email verification',
            html: `<h1>Benvenuto in White Wale ${completename}</h1>`,

        }

        await trasporter.sendMail(mailOptions)
        console.log("Email di benvenuto inviata con successo a: " + email)
    } catch (error) {
        console.error("Errore nell'invio dell'email: " + error)
        throw new error("Errore nell'invio dell'email")
    }
}

//SIGNUP

app.post('/signup', async (req, resp) => {
    let id;
    try {
        let users = await Users.find({});
        if (users.length > 0) {
            let lastUser = users.slice(-1)[0];
            id = lastUser.id + 1;
        } else {
            id = 1;
        }

        const { completename, email, password, confirmPassword, cellnumber } = req.body;
        if (password !== confirmPassword) {
            return resp.status(400).json({ error: "le password non corrispondono" });
        }

        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return resp.status(400).json({ success: false, error: "email gia esistente" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new Users({
            id: id,
            completename,
            email,
            password: hashedPassword,
            cellnumber
        });

        await user.save();

        await sendEmail(email, completename);

        const data = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(data, 'secret_ecom', {
            expiresIn: 3600
        });

        resp.json({ success: true, token });

    } catch (error) {
        console.error("Errore durante la registrazione dell'utente", error);
        resp.status(500).json({ error: "Si è verificato un errore durante la registrazione dell' utente" });
    }
});

// app.post('/signup', async (req, resp) => {
//     let users = await Users.find({});
//     let id;

//     if (users.length > 0) {
//         last_users = users.slice(-1)[0]
//         id = last_users.id + 1
//     } else {
//         id = 1
//     }

//     let check = await Users.findOne({ email: req.body.email })
//     if (check) {
//         return resp.status(400).json({ success: false, error: "existing user found with same email address" })
//     }

//     const user = new Users({
//         id: id,
//         completename: req.body.completename,
//         email: req.body.email,
//         password: req.body.password,
//         cellnumber: req.body.cellnumber

//     })


//     console.log(users);
//     await user.save();
//     console.log('Saved')
//     resp.json({
//         success: true,
//         completename: req.body.completename
//     })

//     const data = {
//         user:{
//             id:user.id
//         }
//     }

//     const token = jwt.sign(data, 'jwt-secret')
//     resp.json({
//         success: true, token
//     })
// })

//LOGIN

app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        }
        else {
            res.json({ success: false, error: 'Wrong Password' });
        }
    }
    else {
        res.json({ success: false, error: 'Wrong Email Id' })
    }
})