// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3000;
const password = process.env.MIK042_PASSWORD;
const Query = require('./models/query')

// connect to MongoDB
const dbURI = `mongodb+srv://mik042:${password}@bpd-cluster.3yktq7x.mongodb.net/bpd?retryWrites=true&w=majority&appName=bpd-cluster`;
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(err => console.error(err));

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the 'static' directory
app.use(express.static('static'));

// GET request to the root, serving 'main.html'
app.get('/', (req, res) => {
    res.sendFile('main.html', { root: 'static' });
});

// Connects form.html to the server
// GET request to '/add-query' to return all queries
app.get('/add-query', (req, res) => {
    res.sendFile('form.html', { root: 'static' });
});

// POST endpoint to create a new query document
app.post('/add-query', (req, res) => {
    const newQuery = new Query({
        class: req.body.class,
        function: req.body.function,
        input: req.body.input,
        output: req.body.output,
        example: req.body.example,
        example_result: req.body.example_result
    });

    newQuery.save()
        .then(result => res.status(201).json(result))
        .catch(err => {
            console.error(err);
            res.status(400).json({ message: 'Error creating new query', error: err });
        });
});