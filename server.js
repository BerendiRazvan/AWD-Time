const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();
const PORT = 4200;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});