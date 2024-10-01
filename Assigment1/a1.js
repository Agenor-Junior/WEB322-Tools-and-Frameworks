/**********************************************************************************
WEB322 – Assignment 1
I declare that this assignment is my own work in accordance with Seneca Academic Policy.
No part of this assignment has been copied manually or electronically from any other source
(including web sites GPT) or distributed to other students.
Name: [Agenor Junior]
Student ID: [138121223]
Date: [2023-09-11]
**********************************************************************************/

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processFile(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file: ${err.message}`);
            return;
        }

        const numLines = countLines(data);
        const numWords = countWords(data);
        const numChars = countCharacters(data);
        const letterFrequency = countLetterFrequency(data);

        console.log(`\nReport for file: ${fileName}`);
        console.log(`Number of lines: ${numLines}`);
        console.log(`Number of words: ${numWords}`);
        console.log(`Number of characters: ${numChars}`);
        console.log('Letter frequency (case insensitive):');
        console.table(letterFrequency);
    });
}

function countLines(content) {
    return content.split('\n').length;
}

function countWords(content) {
    return content.split(/\s+/).filter(Boolean).length;
}

function countCharacters(content) {
    return content.length;
}

function countLetterFrequency(content) {
    const letterFrequency = {};
    const lowerContent = content.toLowerCase();

    for (let char of lowerContent) {
        if (/[a-z]/.test(char)) {
            letterFrequency[char] = (letterFrequency[char] || 0) + 1;
        }
    }

    return letterFrequency;
}

function processDirectory(dirName) {
    fs.readdir(dirName, (err, files) => {
        if (err) {
            console.log(`Error reading directory: ${err.message}`);
            return;
        }

        let txtFiles = files.filter(file => path.extname(file) === '.txt');
        let totalSize = 0;

        if (txtFiles.length === 0) {
            console.log(`No .txt files found in the directory ${dirName}`);
            return;
        }

        txtFiles.forEach(file => {
            let filePath = path.join(dirName, file);
            let fileSize = fs.statSync(filePath).size;
            totalSize += fileSize;

            processFile(filePath);
        });

        console.log(`\nTotal number of .txt files: ${txtFiles.length}`);
        console.log(`Cumulative size of all .txt files: ${totalSize} bytes`);
    });
}

function startProgram() {
    rl.question('Do you wish to process a File (f) or Directory (d)? ', answer => {
        if (answer.toLowerCase() === 'f') {
            rl.question('File name: ', fileName => {
                processFile(fileName);
                rl.close();
            });
        } else if (answer.toLowerCase() === 'd') {
            rl.question('Directory name: ', dirName => {
                processDirectory(dirName);
                rl.close();
            });
        } else {
            console.log('Invalid selection');
            rl.close();
        }
    });
}

startProgram();


