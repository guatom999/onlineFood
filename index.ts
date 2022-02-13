import express from 'express';

import {AdminRoute, VandorRoute} from './routes';

const app = express();

app.use('/admin',AdminRoute);
app.use('/vandor',VandorRoute);

// app.use('/',(req,res) => {
//     return res.json("Hello from backend ");
// })

app.listen(8000, () => {

    console.log("App is listening the port 8000");
})