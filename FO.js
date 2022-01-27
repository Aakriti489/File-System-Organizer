const fs = require('fs');
const path = require('path');
const helpModule = require('./commands/help')
// const helpModule = require('./commands/help')
const tree = require('./commands/tree')
const organize = require('./commands/organize')
let inputArr = process.argv.slice(2);


  
let command = inputArr[0];
switch(command){
    case 'tree':
       tree.treeKey(inputArr[1]);
        break;
    case 'organizer':
       organize.organizeKey(inputArr[1]);
        break;
    case 'help':
        helpModule.helpKey();
        break;
    default:
        console.log('Invalid');
        break;
}

