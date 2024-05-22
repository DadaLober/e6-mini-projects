const BASE_URL = "https://api.breakingbadquotes.xyz/v1/quotes/5";
const quoteElement = document.getElementById("quote");
const buttonElement = document.getElementById("button");

let data = [];

const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    const newData = await response.json();
    data.push(...newData);
  } catch (error) {
    console.error(error);
  }
};

const displayQuote = async () => {
  const nextQuote = data.shift();
  console.log(data);
  quoteElement.innerHTML = `"${nextQuote.quote}" - ${nextQuote.author}`;
  if (data.length === 0) {
    await fetchData();
  }
};

buttonElement.addEventListener("click", displayQuote);
fetchData();
