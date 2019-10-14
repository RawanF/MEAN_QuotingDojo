const express = require("express");
const mongoose = require('mongoose');
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/QuotingDojo', { useNewUrlParser: true });
const QuoteSchema = new mongoose.Schema({
    UserName: String,
    text: String
})
mongoose.model('Quote', QuoteSchema)
const Quote = mongoose.model('Quote');
require('./server/config/routes.js')(app)
app.listen(8000, () => console.log("listening on port 8000")); 