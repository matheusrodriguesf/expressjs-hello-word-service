// app.js
const express = require('express');
const fs = require('fs');
const app = express();
const packageInfo = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/info', (req, res) => {
    res.json({
        name: packageInfo.name,
        version: packageInfo.version,
        description: packageInfo.description,
        expressVersion: packageInfo.dependencies.express,
    });
});

module.exports = app;
