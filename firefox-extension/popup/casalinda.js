casalinda_search = async (searchterm) => {
    url = (
        `https://www.casalindashop.it/_next/data/099pYKdNaQmfMuiyx7o_N` +
        `/es/catalog.json?query=${searchterm}&page=1`
    );
    const result = await $.ajax({
        "url": url,
        "dataType": "json",
        "type": 'get',
        "headers": {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8",
            "Sec-Fetch-Site": "cross-site",
            "Host": "www.casalindashop.it",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Upgrade-Insecure-Requests": 1
        }
    });
    
    let products = [];
    var i;
    let data = result.pageProps.dehydratedState.queries[1].state.data.data;
    for(i = 0; i < data.length; i++){
        let prod = data[i];
        products.push({
            "name": prod.name,
            "description": prod.brand,
            "price": prod.finalPrice,
            "url": `https://www.casalindashop.it/catalog/${prod.slug}`
        });
    }
    return products;
}