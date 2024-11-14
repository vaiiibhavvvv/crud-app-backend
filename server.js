import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/itemRoutes.js';
import Item from './model/Items.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/items",router);

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

if(!DB_URI){
    console.error("Error: Database URI is not defined in environment variable");
    process.exit(1);
}

mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
.then(() => {
    console.log("connected to database");
    app.listen(PORT, () =>{
        console.log(`server is up and running on ${PORT}`);

    });
})
.catch(error => {
    console.log("Database connection error:",error);
    process.exit(1);
});
