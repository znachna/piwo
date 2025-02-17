const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Используем body-parser для обработки POST-запросов
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Статические файлы (HTML, CSS, изображения)
app.use(express.static(path.join(__dirname, 'public')));

// Главная страница
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Страница "О компании"
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Страница "Контакты"
app.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contacts.html'));
});

// Страница "Продукция"
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

// Обработка заказа (если нужно)
app.post('/order', (req, res) => {
  const { name, email, product } = req.body;
  console.log(`Новый заказ: ${name}, ${email}, продукт: ${product}`);
  res.json({ message: 'Заказ принят!', status: 'success' });
});

// Обработка контактной формы
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Новая заявка на контакт:
  Имя: ${name}
  Email: ${email}
  Сообщение: ${message}`);
  
  // Можно добавить логику отправки email или сохранения данных
  res.json({ message: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.', status: 'success' });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер работает на http://localhost:${port}`);
});
