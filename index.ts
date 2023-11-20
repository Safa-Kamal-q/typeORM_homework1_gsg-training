import express from 'express';
import "reflect-metadata"
import dataSource, { initDB } from './db/dataSource.js';
import userRouter from './router/user.js'

const app = express();
const PORT = 3000;
app.use(express.json()) //this to make the project know the json content that it will bring from request

app.get('/', (req, res) => {
    res.send('SERVER UP')
})

app.use('/user', userRouter);

app.use((req, res) => {
    res.status(404).send("you requested something I don't have ")
})

app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
    initDB();
});