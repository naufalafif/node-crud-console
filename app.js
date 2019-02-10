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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
const header = ()=>{
    console.log("\n\nCommand { r : Read, C : Create, U : Update, D : Delete, E : Exit, CLS : Clear Screen }\nthis app will wait for 5 second for each input");
    process.stdout.write("Enter Command : ");
}

function sleep(milliSeconds){
    var startTime = new Date().getTime();                    // get the current time
    while (new Date().getTime() < startTime + milliSeconds); // hog cpu until time's up
}

header();
stdin.addListener("data", function(command) {
    const clean_command = command.toString().trim().toLowerCase();
    
    switch (clean_command) {
        case 'r':
            console.log(readNotes());
            break;
        case 'c':
            readline.question(`Enter Note : `, (note) => {
                createNote(note.toString());
            })
            sleep(5000);
            break
        case 'cls':
            console.reset();
            break;
        case 'u':
            // readline.question(`Enter Note ID & New Content (id|"note") : `, (note) => {
            //     deleteNote(note);
            // })
            // sleep(5000);
            break;
        case 'd':
            readline.question(`Enter Note Id : `, (note) => {
                deleteNote(note);
            })
            sleep(5000);
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
