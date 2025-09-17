import { useState } from "react"
import productsFromFile from "../../data/products.json"

function ManageProducts() {
    const [products, setProducts] = useState(productsFromFile);

    function remove(index) {
        productsFromFile.splice(index,1);
        setProducts(productsFromFile.slice());
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