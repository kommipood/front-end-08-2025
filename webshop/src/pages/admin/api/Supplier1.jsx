import { useState } from "react";
import { useEffect } from "react"


function Supplier1() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>setProducts(json))
    }, []);

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
                </tr>
            </thead>
            <tbody>
                {products.map((product) =>
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td><img className="picture" src={product.image} alt="" /></td>
                        <td>{product.rating.rate}</td>
                        <td>{product.rating.count}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Supplier1