// required packages
const express = require('express');
const path = require('path');

// create express isntance and PORT
const app = express();
const PORT = process.env.PORT || 8675;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// // require('./routes/htmlRoutes')(app);

// require api routing exports
require('./routes/apiRoutes')(app);


// express routing for static HTML files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


// create a listener for starting the server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});