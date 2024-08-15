supermarket23_search = async (searchterm) => {
    url = (
        `https://apitreewsearchengine.treew.com/v3/products/search/` +
        `?currency=USD&client_id=241044&language=SPA&query=${searchterm}` +
        `&user_id=null&localities_key=38&province_id=3` +
        `&excludedProviders=506,558&page=1&page_size=20`
    );
    const result = await $.ajax({
        "url": url,
        "dataType": "json",
        "type": 'get'
    });
    
    let products = [];
    var i;
    for(i = 0; i < result.products.length; i++){
        let prod = result.products[i];
        products.push({
            "name": prod.SpanishName,
            "description": prod.SpanishDescription,
            "price": prod.PriceUSD,
            "url": `https://www.supermarket23.com/es/producto/${prod.ProductId}`
        });
    }
    return products;
}