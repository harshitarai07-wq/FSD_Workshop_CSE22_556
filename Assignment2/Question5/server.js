const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve HTML pages from the pages folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'menu.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.listen(PORT, () => {
    console.log(`Bakery website is running at http://localhost:${PORT}`);
});
