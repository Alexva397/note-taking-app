// const fs = require('fs');
// const path = require('path');
// const noteDatabase = require('../db/db.json');
// const generateUniqueId = require('generate-unique-id');



// module.exports = app => {
//     app.get('/api/notes', (req, res) => res.json(noteDatabase));
//     //     fs.readFile('../db/db.json', 'utf8', (err, data) => {
//     //         if (err) throw err;
//     //         notes = JSON.parse(data);
//     //         return notes;
//     //     })
//     //     res.json(notes);
//     // });

    

//     const updateNoteDatabase = () => {

//         fs.writeFile('db/db.json', JSON.stringify(notes), err => {
//             if (err) throw err;
//             return true;
//         });
//     };


//     app.post('/api/notes', (req, res) => {
//         const newNotePost = req.body
//         const newId = generateUniqueId();
//         newNotePost.id = newId;
//         console.log(newNotePost);
//         notes.push(newNotePost);
//         res.json(newNotePost);
//         updateNoteDatabase();
//     });

// };