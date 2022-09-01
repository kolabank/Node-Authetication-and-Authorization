const mongoose = require("mongoose");

const credentialsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

})

const Credential = mongoose.model('Credential', credentialsSchema);
module.exports = Credential;