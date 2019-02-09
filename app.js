const {
    createNote,
    readNotes,
    updateNote,
    deleteNote
} = require('./crud');

const stdin = process.openStdin();
console.reset = function () {
  return process.stdout.write('\033c');
}

const header = ()=>{
    console.log("\n\nCommand { r : Read, C : Create, U : Update, D : Delete, E : Exit, C : Clear Screen }");
    process.stdout.write("Enter Command : ");
}

header();
stdin.addListener("data", function(command) {
    const clean_command = command.toString().trim().toLowerCase();
    
    switch (clean_command) {
        case 'r':
            console.log(readNotes());
            break;
        case 'c':
            console.reset();
            break;
        case 'c':
            // TODO
            break;
        case 'e':
            process.exit();
            break;
        default:
            console.log('!!Command not valid')
            break;
    }
    
    header();
});
