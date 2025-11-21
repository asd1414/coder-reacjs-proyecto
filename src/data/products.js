import products from './products.json';


const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)

    }, 500);

  })
}

export default getProducts;