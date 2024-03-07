import  BodyParser  from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import Express from "express";

BodyParser.json();
dotenv.config();

const app = Express();

cors();



const PORT = process.env.APPLICATION_PORT;

app.listen(PORT, 
    () => console.log(`[Express] running on port ${PORT}`)
);


app.get('/', (req, res) => {
    console.log(req.headers);
    res.send({
        user: 'Name',
        pass: 'Wordf'
    });
})



