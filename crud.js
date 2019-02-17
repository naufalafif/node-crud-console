const Schema = require('validate')
let notes_data = {
  "notes": [{
    "id": 1,
    "contet": "Note 1",
    "content": "Updated Note 1"
  }, {
    "content": "New Note Content ...",
    "id": 2
  }]
}
const filepath = "./notes-data.json";
const fs = require('fs');

const notesSchema = new Schema({
  note: {
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

if (!fs.existsSync(filepath)) {
  let notes_template = JSON.stringify({
    notes: []
  })
  fs.writeFileSync(filepath, notes_template);
}

const createNoteId = () => {
  let notes_data = readNotes();
  const id_lists = notes_data.notes.map(i => i.id);
  if (id_lists.length) {
    const max = Math.max(...id_lists);
    return max + 1;
  }
  return 0;
}

const getNoteIndex = (note_id) => {
  let notes_data = readNotes();
  const id_lists = notes_data.notes.map(i => i.id);
  if (id_lists.length) {
    const searched_index = id_lists.findIndex(id => id == note_id);
    return searched_index;
  }
  return -1;
}

const saveNotesData = (notes) => {
  try {
    fs.writeFileSync(filepath, JSON.stringify(notes));
    return true;
  } catch (error) {
    return false;
  }
}

const createNote = (note) => {
  note_to_save = {
    note: note,
    id: createNoteId()
  }
  const error = notesSchema.validate(note_to_save)[0];
  if (!error) {
    let notes_data = readNotes();
    notes_data.notes.push(note_to_save);
    saveNotesData(notes_data);
    return true;
  } else {
    console.log(`Error Messages : ${error.message} `)
    return false;
  }
}

const readNotes = () => {
  let notes = JSON.parse(fs.readFileSync(filepath))
  return notes;
}

const updateNote = (note) => {

  const searched_note_index = getNoteIndex(note.id);

  const error = notesSchema.validate(note)[0];
  if (!error) {
    if (searched_note_index != -1) {
      let notes_to_save = readNotes();
      notes_to_save.notes = notes_to_save.notes.map(i => {
        if (i.id == note.id) i.note = note.note;
        return i;
      });
      saveNotesData(notes_to_save);
      return true;
    } else {
      console.log(`Note does not exist`);
      return false;
    }
  }
  console.log(`Error Messages : ${error.message} `)
}

const deleteNote = (note_id) => {
  let notes_data = readNotes();
  const current_length = notes_data.notes.length;
  notes_data.notes = notes_data.notes.filter(i => i.id != note_id)
  saveNotesData(notes_data);

  if (notes_data.notes.length < current_length)
    return true;
  return false;
}

module.exports = {
  readNotes,
  createNote,
  updateNote,
  deleteNote
}