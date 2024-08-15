$(function() {
    const searchForm = $("#search-form");
    const searchInput = $("#searchtext");
    const searchResultDiv = $("#search-results");

    searchForm.on("submit", async function(e) {
        e.preventDefault();
        const searchText = searchInput.val();
        let products = await search(searchText);
        renderAllProducts(products);
    });

    search = async (searchText) => {
        // Supermarket23
        let products = []
        products.push(... await supermarket23_search(searchText));
        return products
    }

    renderAllProducts = (products) => {
        searchResultDiv.empty();
        var i;
        for(i = 0; i < products.length; i++){
            let prod = products[i];
            renderProduct(prod);
        }
    }

    renderProduct = (product) => {
        searchResultDiv.append(
            `<div>` +
            `<p><strong>Nombre: ${product.name}</strong></p>` +
            `<p><strong>Descripción: ${product.description}</strong></p>` +
            `<p><strong>Precio: ${product.price} USD</strong></p>` +
            `<p><strong>URL: ${product.url}</strong></p>` +
            `</div>`
        );
    }
});