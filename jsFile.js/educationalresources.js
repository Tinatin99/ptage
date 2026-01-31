const search = document.querySelector(".search");
function renderQuotes(data) {
    for (let quote of data) {
        let div = document.createElement("div");
        div.classList.add("list-item");
        list.append(div);
        let h2 = document.createElement("h2");
        h2.textContent = quote.author;
        div.append(h2);
        div.append((document.createElement("p").textContent = quote.text));
    }
    }

    // renderQuotes(localQuotes);

    search.addEventListener("input", () => {
        list.innerHTML = "";

        let filteredData = localQuotes.filter((quote) => {
            let quoteText = quote.text.toLowerCase();
            let quoteAuthor = quote.author.toLowerCase();
            let searchValue = search.value.toLowerCase();
            quoteText = quote.text.toUpperCase();
            quoteAuthor = quote.author.toUpperCase();
            searchValue = search.value.toUpperCase();
            console.log(searchValue);

            return quoteText.includes(searchValue) || quoteAuthor.includes(searchValue);
        });
        renderQuotes(filteredData);
    });