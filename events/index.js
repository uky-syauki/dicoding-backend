const { EventEmitter } = require('events');

const birthdayListener = ( name ) => {
    console.log(`Happy birthday ${name}`);
}

const myEmitter = new EventEmitter()

myEmitter.on('birthday', birthdayListener);

myEmitter.emit('birthday', 'Ahmad Syauki');