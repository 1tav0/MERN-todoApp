import express from 'express';
import dotenv from 'dotenv'; //for sentitive info variables accessed at runtime ie usrname, password, api key, etc
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos.js';
const app = express();
dotenv.config();
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors()); //for security of accesing hhtp requests the server we asked to decides if we have permission
app.use('/todos', todosRoutes);

app.get('/',(req,res) => {
    res.send('Welcome to server')
})
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', true).connect(process.env.mongodb).then(() => {
    app.listen(PORT);
    console.log(`server is running on  port ${PORT}`)}).catch(err => console.log(err));