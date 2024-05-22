const BASE_URL = "https://api.breakingbadquotes.xyz/v1/quotes/5";
const quoteElement = document.getElementById("quote");
const buttonElement = document.getElementById("button");

let data = [];
let isFetching = false;

const fetchData = async () => {
  if (isFetching) return;
  isFetching = true;
  try {
    const response = await fetch(BASE_URL);
    const newData = await response.json();
    data.push(...newData);
  } catch (error) {
    console.error(error);
  } finally {
    isFetching = false;
  }
};

const displayQuote = async () => {
  if (data.length === 0) {
    await fetchData();
  }
  console.log(data);
  const nextQuote = data.shift();
  quoteElement.innerHTML = `"${nextQuote.quote}" - ${nextQuote.author}`;
  if (data.length === 0) {
    await fetchData();
  }
};

buttonElement.addEventListener("click", displayQuote);
fetchData();
