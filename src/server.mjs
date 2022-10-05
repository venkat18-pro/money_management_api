import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import { baseRouter } from './router/router.mjs'

const app = express();
const ENV = process.env;
const port = ENV.API_PORT

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/mm/api', baseRouter);

app.listen(port, () => {
    console.log("Server is running in ", port);
})