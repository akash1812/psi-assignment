import express from 'express';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Hello")
})

app.post('/signup', (req,res)=>{
    const email = req.body.email;
    const pass = req.body.pass;

    bcrypt.hash(pass, 8, (err, hashedP)=>{
        if(err){
            res.status(500).json({
                msg: "error in hashing"
            })
        }
        res.status(200).json({
            email: email,
            password : hashedP
    })
        })
    
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})