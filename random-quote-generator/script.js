const BASE_URL = "https://api.breakingbadquotes.xyz/v1/quotes";

const getQuote = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const quote = data[0];
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = `"${quote.quote}" - <i>${quote.author}</i>`;
  } catch (error) {
    console.error(error);
  }
};

const button = document.getElementById("button");
button.addEventListener("click", getQuote);
