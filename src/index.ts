import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import bookingController from './controllers/bookingHttp.controller';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

app.post('/booking', bookingController);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
