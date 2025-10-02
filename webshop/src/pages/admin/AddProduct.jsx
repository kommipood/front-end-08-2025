import { useEffect } from 'react';
import { useState } from 'react'
// import productsFromFile from "../../data/products.json"

function AddProduct() {
  const [product, setProduct] = useState({});
  const productsUrl = "https://webshop-merili-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [products, setProducts] = useState([]);
  const categoriesUrl = "https://webshop-merili-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  


  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []))
    
  }, []);


  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
    
  }, []);

    function add() {
        products.push(product);
        fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)});
        setProduct({
          id: "",
          title: "",
          price: "",
          description: "",
          image: "",
          category: "",
          rating: { rate: "", count: "" }
        });
    }

  return (
    <div>
        <div>Lihtsalt väljanäitamiseks: {JSON.stringify(product)}</div>
        <label>ID</label> <br></br>
        <input onChange={(e) => setProduct({...product, id: Number(e.target.value)})} type="text"></input> <br></br>
        <label>Title</label> <br></br>
        <input onChange={(e) => setProduct({...product, title: e.target.value})} type="text"></input> <br></br>
        <label>Price</label> <br></br>
        <input onChange={(e) => setProduct({...product, price: Number(e.target.value)})} type="text"></input> <br></br>
        <label>Description</label> <br></br>
        <input onChange={(e) => setProduct({...product, description: e.target.value})} type="text"></input> <br></br>
        <label>Category</label> <br></br>
        {/* <input onChange={(e) => setProduct({...product, category: e.target.value})} type="text"></input> <br></br> */}
        <select onChange={(e) => setProduct({...product, category: e.target.value})} defaultValue="">
          <option disabled value="" >Vali kategooria</option>
          {categories.map(category => <option key={category.name}>{category.name}</option>)}
        </select>
        <br></br>
        <label>Image</label> <br></br>
        <input onChange={(e) => setProduct({...product, image: e.target.value})} type="text"></input> <br></br>
        <label>Rating rate</label> <br></br>
        <input onChange={(e) => setProduct({...product, rating: {...product.rating, rate: e.target.value}})} type="text"></input> <br></br>
        <label>Rating count</label> <br></br>
        <input onChange={(e) => setProduct({...product, rating: {...product.rating, count: e.target.value}})} type="text"></input> <br></br>
        <button onClick={add}>Add</button>
    </div>
  )
}

export default AddProduct