const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
});

// Запускаем простой HTTP сервер локально на порту 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:3000');
});