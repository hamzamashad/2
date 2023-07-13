var quoteArea = document.getElementById("quoteArea"),
quoteStorage =[], authorStorage = [];

var quote1 = "It's not what happens to you, but how you react to it that matters.", author1 = "Epictetus",
quote2 = "Resentment is like drinking poison and waiting for your enemies to die.", author2 = "Nelson Mandela",
quote3 = "Be yourself; everyone else is already taken.", author3 = "Oscar Wilde",
quote4 = "So many books, so little time.", author4 = "Frank Zappa",
quote5 = "Do what you can, with what you have, where you are.", author5 = "Theodore Roosevelt";

quoteStorage = [quote1, quote2, quote3, quote4, quote5];
authorStorage = [author1, author2, author3, author4, author5];

function generateQuote() {
    var i = Math.floor(Math.random() * quoteStorage.length),
    generatedQuote = quoteStorage[i],
    generatedAuthor = authorStorage[i],
    quote = `
        <p>"${generatedQuote}"</p>
        <p>--${generatedAuthor}</p>
    `
    
    quoteArea.innerHTML = quote;
}