const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Load routing
require('./route/index')(app);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).end('Problem...');
    console.error(err);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

