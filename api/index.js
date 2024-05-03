import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import { error } from 'console';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("conectado a base de dados");
    }).catch((err) =>{
        console.log(err);
    });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor a correr na porta 3000')
    }
);


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); 


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        succes: false,
        statusCode,
        message,
    });
});