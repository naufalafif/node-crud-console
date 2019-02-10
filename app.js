const {
    createNote,
    readNotes,
    updateNote,
    deleteNote
} = require('./crud');

console.log("create note\n");;
console.log(createNote("New Note Content ..."));
console.log("read note\n");;
console.log(readNotes());
console.log("read note\n");;
console.log(updateNote({id:1,content:"Updated Note 1"}));
console.log("delete note\n");;
console.log(deleteNote(1));

