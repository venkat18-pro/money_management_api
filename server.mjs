import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const ENV = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello')
});

app.listen(3000, () => {
    console.log("Server is running in ", ENV.API_PORT)
})