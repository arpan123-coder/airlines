const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/airlineTicketing');
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        // Handle error, e.g., log to a file, send a notification
        process.exit(1); // Exit the process with an error code
    }
}

connectToDatabase();

// Basic Route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start Server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});


