const express = require('express');
const noteDatabase = require('./db/db.json');
const fs = require('fs');
const path = require('path');
const generateUniqueId = require('generate-unique-id');

const app = express();
const PORT = process.env.PORT || 8675;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// require('./routes/htmlRoutes')(app);
// require('./routes/apiRoutes')(app);

// Assign an array to JSON file
let notesArray = noteDatabase;


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  })
});

app.post('/api/notes', (req, res) => {
  const newNotePost = req.body;
  const newId = generateUniqueId();
  newNotePost.id = newId;
  notesArray.push(newNotePost);

  fs.writeFile('./db/db.json', JSON.stringify(notesArray), (err) =>
    err ? console.log(err) : console.log(`successfully saved note: ${newNotePost.id}`));
  res.json(newNotePost);
});

app.get('api/notes/:id', (req, res) => {
  const userCoice = req.params.id;
  res.json(userCoice);
});


app.delete('/api/notes/:id', (req, res) => {
  const deleteChoice = req.params.id;
  for (i = 0; i < notesArray.length; i++) {
    if (deleteChoice === notesArray[i].id) {
      notesArray.splice(i, 1);
    }
  }
  fs.writeFile('./db/db.json', JSON.stringify(notesArray), (err) =>
    err ? console.log(err) : console.log('success'));
  res.json(notesArray);
  console.log(`Note ${deleteChoice} successfully deleted!`);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});