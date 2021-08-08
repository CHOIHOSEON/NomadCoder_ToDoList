const quotes = [
{
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
},
{
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
},
{
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockfeller",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;