const productsArray = [
    {
        id: 'price_1MNbKjLKixd3lbIt5T7wK7tW',
        name: 'Coffee',
        price: 4.99,
    },
    {
        id: 'price_1MNbTULKixd3lbIty4yzH7hL',
        name: 'Sunglasses',
        price: 9.99,
    },
    {
        id: 'price_1MNbUCLKixd3lbIt2avqhIUH',
        name: 'Camera',
        price: 39.99,
    },
];

function getProductData(id) {
    let productData = productsArray.find((product) => product.id === id);

    if (productData === undefined) {
        console.error(`Product data does not exist for ID: ${id}`);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
