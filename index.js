const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello world!' });
});

app.post('/users', (req, res) => {
    res.json({
        success: true,
        received: req.body
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});