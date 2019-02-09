

const crud =  require('./crud');

console.log(crud.readNotes());
crud.createNote('dsadasdsas   1');
crud.createNote('dsadasdsas   12');
crud.createNote('dsadasdsas   13');
crud.createNote('dsadasdsas   14');
crud.createNote('dsadasdsas   15');
crud.createNote('dsadasdsas   16');
console.log(crud.readNotes());
crud.updateNote(1,'dummy');
crud.deleteNote(3);
console.log(crud.readNotes());
