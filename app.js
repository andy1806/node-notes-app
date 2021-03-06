'use strict';
console.log('starting app.js...');

///////////////////////////////////////////////
///////////// Title and Body objs /////////////
///////////////////////////////////////////////
let title = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

let body = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};


///////////////////////////////////////////////
/////////////// Node.js Modules ///////////////
///////////////////////////////////////////////

// fs (file system) built-in module. used for I/O file operations. It has both synchronous and asynchronous forms.
const fs = require('fs');

///////////////////////////////////////////////
///////////  Modules I have written ///////////
///////////////////////////////////////////////

// exporting functionality from a file created by myself by using require and passing a absolute path as a argument. Giving me access to methods inside notes.js
const notes = require('./notes.js');

///////////////////////////////////////////////
///////////// Third Party Modules /////////////
///////////////////////////////////////////////

// lodash is a third party module exported through npm, located inside the package.json file. Lodash is a toolkit of javascript functions that provides clean methods for manipulating objects and collections.
const _ = require('lodash');

// yargs is a module used to build interactive command line tools by persing arguments and generating an elegant user interface.
const yargs = require('yargs');

let argv = yargs.command('add', 'Add new note', {
    title,
    body
}).command('list', 'List all notes').command('read', 'Read a note', {
    title
}).command('remove', 'Remove a note', {
    title
}).help().argv;


///////////////////////////////////////////////
///////////// Getting User Input //////////////
///////////////////////////////////////////////

// the argv(arguments vector) is an attribute that belongs to the process object. argv returns an array of arguments passed when the Node.js process was launched.
// console.log(process.argv);

let UserCommand = argv._[0];

console.log('Command: ', UserCommand);

// console.log('Yargs ', argv);


///////////////////////////////////////////////
//////////// Conditional Output  //////////////
///////////////////////////////////////////////

if (UserCommand === 'add') {

    let note = notes.addNote(argv.title, argv.body);

    notes.logNote(note);

} else if (UserCommand === 'read') {

    let note = notes.getNote(argv.title);

    if (note) {

        notes.logNote(note);

    } else {
        console.log('Note not found');
    }


} else if (UserCommand === 'list') {

    notes.getAll();

} else if (UserCommand === 'remove') {

    let noteRemoved = notes.remove(argv.title);

    let result = noteRemoved ? argv.title + ' was removed from notes' : 'Note not found';

    console.log(result);

} else {

    console.log('Command not recognized');

}



