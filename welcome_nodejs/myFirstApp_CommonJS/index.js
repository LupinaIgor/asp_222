const Sitemapper = require('sitemapper');//Импорт библиотеки Sitemapper
const sitemapper = new Sitemapper();         //Создание экземпляра Sitemapper

const url = 'https://ninydev.com/sitemap_index.xml';//Указание URL карты сайта

sitemapper.fetch(url)
    .then(({ url, sites }) => console.log(`url:${url}`, 'sites:', sites))
    .catch(error => console.log(error));   //Запрос к карте сайта и работа с результатами