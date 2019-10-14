const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const quotes = require('../controller/quotes.js');

module.exports= function (app){
    app.get('/quotes', function (req, res) { 
        quotes.index(req, res);
    });
    app.post("/quotes", function (req, res) {
        quotes.create(req, res);
    })
}