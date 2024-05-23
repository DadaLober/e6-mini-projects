const BASE_URL = "https://api.breakingbadquotes.xyz/v1/quotes/10";
const quoteElement = document.querySelector("#quote");
const buttonElement = document.querySelector("#button");

let arr = [];

const fetchData = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        arr.push(...data);
    } catch (error) {
        console.error(error);
    }
};

const displayQuote = () => {
    quoteElement.innerHTML = `"${arr[0].quote}" - <i>${arr[0].author}<i>`;
    arr.shift();
    console.log(arr);
    arr.length <= 1 ? fetchData() : null;
};

buttonElement.addEventListener("click", displayQuote);
fetchData();
