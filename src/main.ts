import { Chicken } from "./chicken"
// https://www.youtube.com/watch?v=4zdBk6wisxc&ab_channel=AlexZ

// https://www.youtube.com/watch?v=4zdBk6wisxc&ab_channel=AlexZ
console.log("hi")
const chicken = new Chicken();
chicken.cluck()

import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);
    });

    ws.send('Hello, client!');
});

