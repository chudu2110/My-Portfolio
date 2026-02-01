const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

// Example route for CV data if you want to move it to backend later
app.get('/api/cv', (req, res) => {
    res.json({
        name: "VU HUY DU",
        role: "Software Developer",
        // ...other data
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
