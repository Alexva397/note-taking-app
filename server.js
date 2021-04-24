const express = require('express');
// const noteDatabase = require('./db/db.json');
// const fs = require('fs');
const path = require('path');
// const generateUniqueId = require('generate-unique-id');

const app = express();
const PORT = process.env.PORT || 8675;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});