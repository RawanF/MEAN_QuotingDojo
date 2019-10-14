const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
module.exports = {
    index: function (req, res) {
        Quote.find()
            .then(data => res.render("./DisplayQuotes", { quotes: data }))
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        const quote = new Quote();
        quote.UserName = req.body.name;
        quote.text = req.body.quote;
        quote.save()// inserts the data into the database then returns a promise
            .then(newQuoteData => console.log('quote created: ', newQuoteData))//will execute upon successfully inserting data in the database
            .catch(err => console.log(err));//will execute if there is an error
        res.redirect('/quotes');
    },
};