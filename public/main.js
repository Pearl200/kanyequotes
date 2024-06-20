document.addEventListener('DOMContentLoaded', (event) => {
    let previousQuote = "";

    function fetchQuote() {
        fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(data => {
                const newQuote = data.quote;
                if (newQuote !== previousQuote) {
                    previousQuote = newQuote;
                    addQuoteToList(newQuote);
                } else {
                    fetchQuote(); // Call the function again if the quote is the same
                }
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    }

    function addQuoteToList(quote) {
        const quoteList = document.getElementById('quote-list');
        const quoteItem = document.createElement('div');
        quoteItem.className = 'quote-item';
        quoteItem.innerHTML = `
            <img src="/public/images/ye.jpeg"  height= "50" width="50" alt="Kanye West">
            <div>
                <p>"${quote}"</p>
                <span>- Kanye West</span>
            </div>
        `;
        quoteList.appendChild(quoteItem);
    }

    const getBtn = document.getElementById('getBtn');
    if (getBtn) {
        getBtn.addEventListener('click', fetchQuote);
    } else {
        console.error('Button with id "getBtn" not found');
    }
});
