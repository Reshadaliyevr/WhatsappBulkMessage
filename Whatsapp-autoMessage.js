const fs = require('fs');
const axios = require('axios');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const { MessageMedia } = require('whatsapp-web.js');

const NUMBERS_FILE_PATH = './numbers.txt';
const IMAGE_FILE_PATH = './cat.png'; // Replace with the path to your image file
const MESSAGE = 'Your Message';

const client = new Client();

client.on('qr', (qr) => {
    console.log('QR code received, scan it with your phone.');
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('Client is ready!');

    const numbers = fs.readFileSync(NUMBERS_FILE_PATH, 'utf-8')
        .split('\n')
        .map(number => number.trim()) // Trim any extra spaces
        .filter(number => number.length > 0); // Filter out empty lines
    const imageBuffer = fs.readFileSync(IMAGE_FILE_PATH);
    const imageMedia = new MessageMedia('image/png', imageBuffer.toString('base64'), 'cat.png'); // Replace 'image/png' with the appropriate MIME type if needed

    for (const number of numbers) {
        const formattedNumber = `${number}@c.us`;
        try {
            await client.sendMessage(formattedNumber, imageMedia, { caption: 'Image Caption here' });
            await client.sendMessage(formattedNumber, MESSAGE);
            console.log(`Message and picture sent to ${number}`);
        } catch (error) {
            console.error(`Failed to send message and picture to ${number}: ${error.message}`);
        }
        await new Promise(resolve => setTimeout(resolve, 5000)); // Add a delay of 5 seconds between sending messages
    }

    client.destroy();
});

client.initialize();
