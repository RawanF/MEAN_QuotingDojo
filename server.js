const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QuotingDojo', { useNewUrlParser: true });
const QuoteSchema = new mongoose.Schema({
    UserName: String,
    text: String
})
const Quote = mongoose.model('Quote', QuoteSchema);
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/quotes', (req, res) => {  
    Quote.find()
        .then(data => res.render("./DisplayQuotes", {quotes: data}))
        .catch(err => res.json(err));
});
app.post("/quotes", (req, res) => {
    const quote = new Quote();
    quote.UserName = req.body.name;
    quote.text = req.body.quote;
    quote.save()// inserts the data into the database then returns a promise
        .then(newQuoteData => console.log('quote created: ', newQuoteData))//will execute upon successfully inserting data in the database
        .catch(err => console.log(err));//will execute if there is an error
    res.redirect('/quotes');
})

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000")); 