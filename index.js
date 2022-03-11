import express from 'express';
import bodyParser from 'body-parser' //<----- Can take in post request bodys

import usersRoutes from './routes/users.js';

const app = express(); // <--application lives in this;
const PORT = 4000; //Can be any number

app.use(bodyParser.json());//JSON data being used in entire application

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage'));

app.listen(PORT, () => console.log(`Serving running on port: http://localhost:${PORT}`));
//listening to incoming requests