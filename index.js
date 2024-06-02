const path = require('path');
const express = require('express');

const app = express();

app.use('', express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    return response.sendFile('index.html', {root: './CHOAM-webpage'});
});

app.get('/auth/discord', (request, response) => {
    return response.sendFile('dashboard.html', {root: './CHOAM-webpage'});
});

const port = '53134';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));


// document.addEventListener('DOMContentLoaded', () => {
//     const heading = document.querySelector('h1');
//     heading.textContent = 'Hello, World!';
// });
