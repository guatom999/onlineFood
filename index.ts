import bodyParser from 'body-parser';
import express from 'express';
import mongoose  from 'mongoose';
import { MONGO_URI } from './config';

import {AdminRoute, VandorRoute} from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}))

app.use('/admin',AdminRoute);
app.use('/vandor',VandorRoute);

mongoose.connect(MONGO_URI)
.then(result => {
    console.log(result)
    // console.log('DB connected')
}).catch(err => {
    console.log("error" + err)
})

// app.use('/',(req,res) => {
//     return res.json("Hello from backend ");
// })

app.listen(8000, () => {

    console.log("App is listening the port 8000");
})