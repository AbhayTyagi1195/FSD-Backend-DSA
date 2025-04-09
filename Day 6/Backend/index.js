import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import User from "./models/user.js";
import user from "./models/user.js";
dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.post("/user",async (req, res) => {
    try{
       await User.create(req.body);
         res.status(201).json({"user":user});
    }catch(error){
        res.status(500).json({"message":"Error User Creation!"});

    }
})
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Welcome!');
});
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));