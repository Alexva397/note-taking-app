const express = require('express');
const fs = require('fs');
const path = require('path');
const noteDatabase = ('./db/db.json');

const app = express();

const PORT = process.env.PORT || 8675;

let notes = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require('./routes/htmlRoutes')(app);
// require('./routes/apiRoutes')(app);



app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });