// const http = require('http');
// const hostname = process.env.MODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
// const port = 3000;
// const requestHandler = (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// };


// const server = http.createServer(requestHandler);
// server.listen(port, hostname, () => {
//     console.log(memoryInformation);
//     console.log(`Server berjalan pada http://${hostname}:${port}/`);
// });


// const memoryInformation = process.memoryUsage();
// console.log(memoryInformation);

// const firstname = process.argv[2];
// const lastname = process.argv[3];

// console.log(`Hello ${firstname} ${lastname}`);

// https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env


// const coffee = require('./lib/coffee');
// const { firstname, lastname } = require('./lib/user');
// import { firstname, lastname } from './lib/user.js';

// console.log(coffee);
// console.log(firstname);
// console.log(lastname);


// const moment = require('moment');

// const date = moment().format("MMM Do YY");
// console.log(date);

const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat`);
};

const onCoffeeOrderListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderListener);

myEventEmitter.emit('coffee-order', {name: 'Kapal Api', price: 15000 });