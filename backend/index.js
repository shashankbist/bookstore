import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors()); 

// 2nd way for cors
// app.use(
//     cors({
//         origin:'http://127.0.0.1:5555/',
//         methods:['GET','POST','PUT','DELETE',],
//         allowedHeaders:['Content-Type'],
//     })
// );

// app.get('/', (request, response) => {
//     console.log(request)
//     return response.status(200).send('Welcome to MERN Stack Tutorial')
// });


app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)

.then(()=> {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error)=> {
    console.log(error); 
    
});