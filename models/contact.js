const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
