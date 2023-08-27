const mongoose = require('mongoose')

const Schema = mongoose.Schema

const portfolioSchema = new Schema({
    pname: {
        type: String,
        required: true
    },
    creationdate: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    finishdate: {
        type: Number,
        required: true
    },
    skills: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('portfolio', portfolioSchema)