const noteDatabase = require('../db/db.json');
// const noteDatabase = require('../db/notes');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
    res.json(noteDatabase);
    console.log(noteDatabase);
});


    const updateNoteDatabase = () => {
        
        fs.writeFile('./db/db.json', JSON.stringify(noteDatabase), err => {
            if (err) throw err;
            return true;
        });
    };


    app.post('/api/notes', (req, res) => {
        const newNotePost = req.body
        const id = generateUniqueId();
        newNotePost.id = id;
        console.log(newNotePost);
        noteDatabase.push(newNotePost);
        res.json(true);
        updateNoteDatabase();
    });
};