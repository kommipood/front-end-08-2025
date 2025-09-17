import { useState } from "react"
import productsFromFile from "../../data/products.json"
import cartFromFile from "../../data/cart.json"


function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  function sortAZ() {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice())
  }

  function sortZA() {
    products.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(products.slice())
  }

  function sortPriceInc() {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice())
  }

  function sortPriceDec() {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice())
  }

  function sortRatingInc() {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice())
  }

  function sortRatingDec() {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice())
  }

  function addToCart(product) {
    cartFromFile.push(product);
  }

  return (
    <div>
      <button onClick={sortAZ}>Sort A to Z</button>
      <button onClick={sortZA}>Sort Z to A</button>
      <button onClick={sortPriceInc}>Sort price increasing</button>
      <button onClick={sortPriceDec}>Sort price decreasing</button>
      <button onClick={sortRatingInc}>Sort rating increasing</button>
      <button  onClick={sortRatingDec}>Sort rating decreasing</button>

      {products.map(product =>
        <div key={product.id}>
          <img className="picture" src={product.image} alt="" ></img>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.rating.rate} / {product.rating.count}</div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      )}
    </div>
  )
}

export default HomePage