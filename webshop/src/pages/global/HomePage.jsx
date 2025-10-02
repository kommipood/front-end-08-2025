import { useState } from "react"
// import productsFromFile from "../../data/products.json"
import { useEffect } from "react";
// import cartFromFile from "../../data/cart.json"
import toast, {Toaster} from "react-hot-toast"


function HomePage() {
  // const [products, setProducts] = useState(productsFromFile);
  const productsUrl = "https://webshop-merili-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [products, setProducts] = useState([]); //HTMLis muutuv seis
  const [dbProducts, setDbProducts] = useState([]); //originaalseis, täpselt nagu andmebaasis
  const categoriesUrl = "https://webshop-merili-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
      })
    
  }, []);

  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
    
  }, []);

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
    // cartFromFile.push(product);
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));
    toast.success('Edukalt ostukorvi lisatud');
  }

  function filterByCategory(clickedCategory) {
    const result = dbProducts.filter(product => product.category === clickedCategory);
    setProducts(result);
  }

  //1. võtma localStorgae-st (localStorage.getItem())
  //1b. kui localStorgae-s on tühjus, sis võta tühi array ( || [])
  //2. võtma localStorgae-st võetult jutumärgid maha (JSON.parse())
  //3. lisama ühe juurde ( .push())
  //4. lisama jutumärgid tagasi ( JSON.stringify())
  //5. lisama localStorgae-sse tagasi (localStorage.setItem())

  function sort(sortClicked) {
    if (sortClicked === "sortaz") {
      sortAZ();
      return;
    }

    if (sortClicked === "sortza") {
      sortZA();
      return;
    }

    if (sortClicked === "sortpriceinc") {
      sortPriceInc();
      return;
    }

    if (sortClicked === "sortpricedec") {
      sortPriceDec();
      return;
    }

    if (sortClicked === "sortratinginc") {
      sortRatingInc();
      return;
    }

     if (sortClicked === "sortratingdec") {
      sortRatingDec();
      return;
    }
  }

  return (
    <div>
      <select onChange={(e) => sort(e.target.value)}>
        <option value="sortaz">Sort A to Z</option>
        <option value="sortza">Sort Z to A</option>
        <option value="sortpriceinc">Sort price increasing</option>
        <option value="sortpricedec">Sort price decreasing</option>
        <option value="sortratinginc">Sort rating increasing</option>
        <option value="sortratingdec">Sort rating decreasing</option>
      </select>

      <br></br> <br></br>
      <div>Kokku tooteid: {products.length}</div>

      {categories.map(category => 
        <button key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}
        </button>)}

      <br></br> <br></br>

      <div className="products">
        {products.map(product =>
          <div className="home-product" key={product.id}>
            <img className="picture" src={product.image} alt="" ></img>
            <div className="home-title">{product.title}</div>
            <div>{product.price}</div>
            <div>{product.rating?.rate} / {product.rating?.count}</div>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
      
      )}
      </div>
      <Toaster />
    </div>
  )
}

export default HomePage