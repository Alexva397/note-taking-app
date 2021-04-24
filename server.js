const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

const PORT = process.env.PORT || 8675;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);
// const apiRoutes = require('./routes/apiRoutes');
// app.use('./api', apiRoutes);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });