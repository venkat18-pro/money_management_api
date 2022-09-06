import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import { baseRouter } from './router/router.mjs'

const app = express();
const ENV = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.user('/mm/api', baseRouter);

app.listen(3000, () => {
    console.log("Server is running in ", ENV.API_PORT)
})