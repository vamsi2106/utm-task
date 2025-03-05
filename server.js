require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Schema & Model
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    utm_source: String,
    utm_medium: String,
    utm_campaign: String,
    utm_term: String,
    utm_content: String,
    timestamp: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// API Route
app.post('/submit', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.json({ success: true, message: 'Data saved!' });
    } catch (err) {
        console.error('Error saving data:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
