import products from './products.json';


const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)

    }, 1000);

  })
}

export default getProducts;