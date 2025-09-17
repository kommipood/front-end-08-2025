import { useState } from 'react'
import productsFromFile from "../../data/products.json"

function AddProduct() {
    const [product, setProduct] = useState({});

    function add() {
        productsFromFile.push(product);
    }

  return (
    <div>
        <div>Lihtsalt väljanäitamiseks: {JSON.stringify(product)}</div>
        <label>ID</label> <br></br>
        <input onChange={(e) => setProduct({...product, id: e.target.value})} type="text"></input> <br></br>
        <label>Title</label> <br></br>
        <input onChange={(e) => setProduct({...product, title: e.target.value})} type="text"></input> <br></br>
        <label>Price</label> <br></br>
        <input onChange={(e) => setProduct({...product, price: e.target.value})} type="text"></input> <br></br>
        <label>Description</label> <br></br>
        <input onChange={(e) => setProduct({...product, description: e.target.value})} type="text"></input> <br></br>
        <label>Category</label> <br></br>
        <input onChange={(e) => setProduct({...product, category: e.target.value})} type="text"></input> <br></br>
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