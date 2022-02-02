const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./database/config');
const app = express();
const port = process.env.PORT || 9000;

//these parsers should come before the app.use(require('./routes')) (!)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(require('./routes'));

mongoose.connect(db.uri, { useNewUrlParser: true });

app.listen(port, () => {
    console.log(`ouvindo à porta ${port}`);
});