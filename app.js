

const {createNote,readNotes,updateNote,deleteNote} =  require('./crud');

console.log(readNotes());
createNote('Note   1');
createNote('Note   2');
console.log(readNotes());
updateNote({id:1,content:'Updated Note 2'});
deleteNote(0);
console.log(readNotes());
