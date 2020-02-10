const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes/');
const app = express();

const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const server = app.listen(port, () => {
    console.log(`Server started: Port ${port}`);
});