

const {createNote,readNotes,updateNote,deleteNote} =  require('./crud');

console.log(readNotes());
createNote('dsadasdsas   1');
createNote('dsadasdsas   12');
createNote('dsadasdsas   13');
createNote('dsadasdsas   14');
createNote('dsadasdsas   15');
createNote('dsadasdsas   16');
console.log(readNotes());
updateNote(1,'dummy');
deleteNote(3);
console.log(readNotes());
