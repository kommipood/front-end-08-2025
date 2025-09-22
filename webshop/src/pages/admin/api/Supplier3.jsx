import { useState } from "react";
import { useEffect } from "react"


function Supplier3() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.itbook.store/1.0/search/react?page=1')
            .then(res=>res.json())            
            .then(json=>setProducts(json.books))
    }, []);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Subtitle</th>
                    <th>Image</th>
                    <th>Buy</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) =>
                    <tr key={product.isbn13}>
                        <td>{product.isbn13}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.subtitle}</td>
                        <td><img className="picture" src={product.image} alt="" /></td>
                        <td><a href={product.url}>Buy</a></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Supplier3