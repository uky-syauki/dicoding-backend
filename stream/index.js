const fs = require('fs');

const readableStream = fs.createReadStream('./stream/input.txt', { highWaterMark: 15 });
const writableStream = fs.createWriteStream('stream/output.txt');

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        console.log(`Terjadi kesalahan: ${error}`);
    }
})

readableStream.on('end', () => {
    console.log("Selesai!");
})