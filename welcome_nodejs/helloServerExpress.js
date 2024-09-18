const express = require('express');  // Подключаем express

const app = express();  // Создаем экземпляр приложения Express

// Определяем маршрут для GET-запросов на корневой URL
app.get('/', (req, res) => {
    res.send('Hello World!\n');  // Отправляем ответ
});

// Запускаем сервер на порту 3000
app.listen(3000, '127.0.0.1', () => {
    console.log('Listening on http://127.0.0.1:3000');
});