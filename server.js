// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'static' directory
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'static' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
