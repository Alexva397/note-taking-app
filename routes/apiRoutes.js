// const noteDatabase = require('../db/db');
// const noteDatabase = require('../db/notes');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

let notesArray = [];

module.exports = (app) => {
    fs.readFile('db/db.json', 'utf8', (err, notes) => {
        if (err) throw err;

        let notesArray = JSON.parse(notes);

        app.get('/api/notes', (req, res) => res.json(notesArray));




        const updateNoteDatabase = () => {

            fs.writeFile('db/db.json', JSON.stringify(notesArray), err => {
                if (err) throw err;
                return true;
            });
        };


        app.post('/api/notes', (req, res) => {
            const newNotePost = req.body
            const newId = generateUniqueId();
            newNotePost.id = newId;
            console.log(newNotePost);
            notesArray.push(newNotePost);
            res.json(newNotePost);
            updateNoteDatabase();
        });
    })
};