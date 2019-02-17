#! /usr/bin/node

const {
  createNote,
  readNotes,
  updateNote,
  deleteNote
} = require('./crud');

const yargs = require('yargs')
let argv = yargs.argv;

if (argv._.length) {
  switch (argv._[0]) {
    case 'read':
      console.log(readNotes());
      break;
    case 'create':
      if ("note" in argv)
        if (createNote(argv.note))
          console.log("note created");
        else
          console.log("Note Empty");
      break;
    case 'update':
      if (updateNote({
          note: argv.note,
          id: argv.id
        }))
        console.log("note updated");
      break;
    case 'delete':
      if ('id' in argv) {
        if (deleteNote(argv.id))
          console.log("note deleted");
        else
          console.log("note not found");

      } else
        console.log("Id Empty");
      break;
    default:
      console.log("Command not valid");
      break;
  }
} else console.log("Command Not Found");