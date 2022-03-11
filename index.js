import express from 'express';
import bodyParser from 'body-parser' //<----- Can take in post request bodys

const app = express(); // <--application lives in this;
const PORT = 4000; //Can be any number

app.use(bodyParser.json());//JSON data being used in entire application

app.listen(PORT, () => console.log(`Serving running on port: http://localhost:${PORT}`));
//listening to incoming requests