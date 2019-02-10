const Schema = require('validate')
let dataset = {"notes":[{"id":1,"contet":"Note 1","content":"Updated Note 1"},{"content":"New Note Content ...","id":2}]}

const createNoteId = () => {
    const id_lists = dataset.notes.map(i => i.id);
    const max = Math.max(...id_lists);
    return max + 1;
}

const getNoteIndex = (note_id) => {
    const id_lists = dataset.notes.map(i => i.id);
    const searched_index = id_lists.findIndex(id => id == note_id);
    return searched_index;
}
const notesSchema = new Schema({
    content: {
        type: String,
        required: true,
        length: {
            min: 6
        }
    },
    id: {
        type: Number,
        required: true
    }
})

module.exports.createNote = (note) => {
    note_to_save = {
        content: note,
        id: createNoteId()
    }
    const error = notesSchema.validate(note_to_save)[0];
    if (!error) {
        dataset.notes.push(note_to_save);
        console.log('Note successfully added')
        return true;
    }else{
        console.log(`Error Messages : ${error.message} `)
        return false;
    }
}

module.exports.readNotes = () => dataset.notes;


module.exports.updateNote = (note) => {
    const searched_note_index = getNoteIndex(note.id);

    const error = notesSchema.validate(note)[0];
    if (!error) {
        if (searched_note_index != -1) {
            dataset.notes[searched_note_index].content = note.content;
            console.log('Note successfully updated')
            return true;
        } else {
            //console.log(`Note does not exist`);
        }
    }    
    console.log(`Error Messages : ${error.message} `)
}

module.exports.deleteNote = (note_id) => {
    const index = getNoteIndex(note_id);
    if (index != -1) {
        dataset.notes.splice(index, 1);
        console.log('Note successfully deleted')
        return true;
    }
    console.log(`Note does not exist`);
    return false;

}