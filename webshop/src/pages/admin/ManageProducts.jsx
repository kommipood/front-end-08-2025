import { useState } from "react"
// import productsFromFile from "../../data/products.json"
import { useEffect } from "react";

function ManageProducts() {
    //const [products, setProducts] = useState(productsFromFile);
  const productsUrl = "https://webshop-merili-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []))
    
  }, []);

    function remove(index) {
        products.splice(index,1);
        setProducts(products.slice());
        fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)});
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating rate</th>
                    <th>Rating count</th>
                    <th>Delete button</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) =>
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td><img className="picture" src={product.image} alt="" /></td>
                        <td>{product.rating.rate}</td>
                        <td>{product.rating.count}</td>
                        <td><button onClick={() => remove(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ManageProducts