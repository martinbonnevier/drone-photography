import express, { Router } from 'express';
const app = express();
import bodyParser from 'body-parser';
import { router } from './routes/router.js';
import cors from 'cors';
import 'dotenv/config'
app.use(express.static('public'));

app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', cors(), router)
app.use('/', router);


app.listen(process.env.PORT, () => console.log('Server started on port 7800'));