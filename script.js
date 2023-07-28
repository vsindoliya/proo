const quoteList = document.getElementById("quote-list");
const allQuotesBtn = document.getElementById("all-quotes");
const newQuoteBtn = document.getElementById("new-quote");
const quoteForm = document.getElementById("quote-form");

const quotes = []; // Array to store all the quotes

const showAllQuotes = () => {
    quoteList.innerHTML = "";

    quotes.forEach((q) => {
        const quoteElement = document.createElement("div");
        quoteElement.classList.add("quote");
        quoteElement.innerHTML = `
            <p><strong>${q.author}</strong></p>
            <p>${q.quote}</p>
            <button class="view-full" onclick="viewFullQuote('${q.author}', '${q.quote}')">View Full Quote</button>
        `;
        quoteList.appendChild(quoteElement);
    });
};

const viewFullQuote = (author, quote) => {
    // Open a new page to show the full quote
    const fullQuotePage = document.createElement("div");
    fullQuotePage.innerHTML = `
        <h2>Author: ${author}</h2>
        <p>${quote}</p>
    `;
    document.body.innerHTML = "";
    document.body.appendChild(fullQuotePage);
};

allQuotesBtn.addEventListener("click", () => {
    // Show all quotes and hide the quote form
    showAllQuotes();
    quoteForm.style.display = "none";
    quoteList.style.display = "block";
});

newQuoteBtn.addEventListener("click", () => {
    // Show the quote form and hide the quote list
    quoteForm.style.display = "block";
    quoteList.style.display = "none";
});

quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the user input from the form
    const authorInput = document.getElementById("author");
    const quoteInput = document.getElementById("quote");

    const author = authorInput.value;
    const quote = quoteInput.value;

    if (author && quote) {
        // Add the new quote to the quotes array
        quotes.push({ author, quote });

        // Reset the form and hide it
        authorInput.value = "";
        quoteInput.value = "";
        quoteForm.style.display = "none";
        quoteList.style.display = "block";

        // Show all quotes, now including the new one
        showAllQuotes();
    }
});