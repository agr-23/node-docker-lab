const quotes = [
  { id: 1, text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { id: 2, text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { id: 3, text: "Continuous improvement is better than delayed perfection.", author: "Mark Twain" },
  { id: 4, text: "Programs must be written for people to read...", author: "Harold Abelson" },
  { id: 5, text: "If you automate a mess, you get an automated mess.", author: "Rod Michael" },
  { id: 6, text: "Eso es verda.", author: "Alejandro Garcés Ramírez"},
  { id: 7, text: "Yo cuando dije eso?", author: "Alejandro Garcés Ramírez"}

];

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

module.exports = { quotes, getRandomQuote };
