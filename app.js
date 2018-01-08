'use strict';
console.log('starting app.js...');

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

let argv = yargs.argv;

///////////////////////////////////////////////
///////////// Getting User Input //////////////
///////////////////////////////////////////////

// the argv(arguments vector) is an attribute that belongs to the process object. argv returns an array of arguments passed when the Node.js process was launched.
console.log(process.argv);

let UserCommand = process.argv[2];

console.log('Command: ', UserCommand);

console.log('Process ', process.argv);

console.log('Yargs ', argv);


///////////////////////////////////////////////
//////////// Conditional Output  //////////////
///////////////////////////////////////////////

if (UserCommand === 'add') {

    notes.addNote(argv.title, argv.body);

} else if (UserCommand === 'read') {

    console.log('Retrieving individual note...');

} else if (UserCommand === 'list') {

    console.log('Listing all notes...');

} else if (UserCommand === 'remove') {

    console.log('Removing note...');

} else {

    console.log('Command not recognized');

}



