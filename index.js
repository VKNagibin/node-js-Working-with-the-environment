const fork = require('child_process').fork;
require('dotenv').config();

const parentMessage = `node_env is ${process.env.NODE_ENV}`;
const child = fork('child.js', ['hi, child!', "Hello"]);

child.send(parentMessage)

child.on('message', message => {
    console.log('Message from child:', message);
});

child.on('close', (code) => {
    console.log('child closed with exit code:' + code);
})

console.log('log from process')