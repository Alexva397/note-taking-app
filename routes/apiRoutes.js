// required packages
const fs = require('fs');
const noteDatabase = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');

// Assign an array to JSON file
let notesArray = noteDatabase;

// export the following express api methods
module.exports = app => {
    // request to retrieve db.json and create /api/notes
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
          if (err) throw err;
          res.json(JSON.parse(data));
        })
      });
      
      // post request for new note, generates a unique ID for each note
      app.post('/api/notes', (req, res) => {
        const newNotePost = req.body;
        const newId = generateUniqueId();
        newNotePost.id = newId;
        notesArray.push(newNotePost);
      
        // After each new note is created, rewrite db.json based off the notesArray
        fs.writeFile('./db/db.json', JSON.stringify(notesArray), (err) =>
          err ? console.log(err) : console.log(`successfully saved note: ${newNotePost.id}`));
        res.json(newNotePost);
      });
      

      // Retrieve a note based off its unique ID
      app.get('api/notes/:id', (req, res) => {
        const userCoice = req.params.id;
        res.json(userCoice);
      });
      
      // Handle note delete from Array
      app.delete('/api/notes/:id', (req, res) => {
        const deleteChoice = req.params.id;
        for (i = 0; i < notesArray.length; i++) {
          if (deleteChoice === notesArray[i].id) {
            notesArray.splice(i, 1);
          }
        }
        // Rewrite db.json after note is deleted.
        fs.writeFile('./db/db.json', JSON.stringify(notesArray), (err) =>
          err ? console.log(err) : console.log(`Note ${deleteChoice} successfully deleted!`));
        res.json(notesArray);
      });
};