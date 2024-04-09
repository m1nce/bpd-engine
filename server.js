// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3000;
const password = process.env.MIK042_PASSWORD;

// connect to mongodb
const dbURI = `mongodb+srv://mik042:${password}@bpd-cluster.3yktq7x.mongodb.net/?retryWrites=true&w=majority&appName=bpd-cluster`;
mongoose.connect(dbURI)
    .then((result) => app.listen(PORT))
    .catch((err) => console.log(err));

// Serve static files and listen for incoming requests, using the index.html file as the entry point
app.use(express.static('static'));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'static' });
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));