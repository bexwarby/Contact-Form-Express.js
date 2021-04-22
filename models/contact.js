/*
* models/contact.js - Contact model
*/

const mongoose = require("mongoose");

/* Schema */
const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

/* Model creation */
module.exports = mongoose.model("Contact", ContactSchema);