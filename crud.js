let dataset = {
    "notes": [{
        id: 0,
        content: 'Hello World!'
    }],
    "author": "naufalafif",
    "email": "naufalafif58@gmail.com"
}

console.log('---- Start crud app ')
console.log(`---- Total notes ${dataset.notes.length} `);

const createNoteId = () => {
    const id_lists = dataset.notes.map(i => i.id);
    const max = Math.max(...id_lists);
    return max + 1;
}

const getNoteIndex = (note_id) => {
    const id_lists = dataset.notes.map(i => i.id);
    const searched_index = id_lists.findIndex(id=>id==note_id);
    return searched_index;
}

module.exports.createNote = (note) => {
    dataset.notes.push({
        content: note,
        id: createNoteId()
    });
}

module.exports.readNotes = () => dataset.notes;


module.exports.updateNote = (note_id,note_content) => {
    const searched_note_index = getNoteIndex(note_id);
    if(searched_note_index!=-1){
        dataset.notes[searched_note_index].content = note_content;
    }else{
        console.log(`Note does not exist`);
    }
}

module.exports.deleteNote = (note_id) => {
    const index = getNoteIndex(note_id);
    if(index!=-1){
        dataset.notes.splice(index,1);
    }else{
        console.log(`Note does not exist`);
    }
}