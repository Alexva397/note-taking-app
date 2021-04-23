const noteDatabase = require('../db/db.json');
const fs = require('fs');
// const generateUniqueId = require('generate-unique-id');



// const id = generateUniqueId({
//     length: 2,
//     useLetters: false
//    });

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteDatabase));


    // const updateNoteDatabase = () => {
    //     fs.writeFile('db.json', JSON.stringify(noteDatabase), err => {
    //         if (err) throw err;
    //         return true;
    //     });
    // };


    app.post('/api/notes', (req, res) => {
        const newNotePost = req.body
        // newNotePost.id = id();
        console.log(newNotePost);
        noteDatabase.push(newNotePost);
        res.json(true);
        // updateNoteDatabase()
    });
};