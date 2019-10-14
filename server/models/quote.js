const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
    UserName: String,
    text: String
})
mongoose.model('Quote', QuoteSchema)