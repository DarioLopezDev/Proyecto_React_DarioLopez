const products = [
    {
        id:'1',
        name: 'Coca Cola 3L',
        price: 2500,
        category:'Gaseosas',
        img: '',
        stock: 30,
        description: 'Gaseosa sabor Cola de 3 Litros'
    },
    {
        id:'2',
        name: 'Quilmes Clasica 473cc',
        price: 1000,
        category:'Cervezas',
        img: '',
        stock: 48,
        description: 'Cerveza Rubia Quilmes Clasico de 473cc'
    },
    {
        id:'3',
        name: 'Fernet Branca 750ml',
        price: 10000,
        category:'Aperitivos',
        img: '',
        stock: 36,
        description: 'Fernet Branca de 750ml'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Filtra los productos que coinciden con la categoría
            const filteredProducts = products.filter(product => product.category === categoryId);
            resolve(filteredProducts);
        }, 500);
    });
};
