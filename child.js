process.on('message', message => {
    console.log('Child got a message:' + message)
})

process.send('Hi from child!')

console.log('child running with arg: ' + process.argv[2] + process.argv[3]);

setTimeout(() => {
    console.log('Child will exit')
    process.exit();
}, 3000)
