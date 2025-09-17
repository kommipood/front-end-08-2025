import { useState } from "react"
import cartFromFile from "../../data/cart.json"

function Cart() {
    const [products, setProducts] = useState(cartFromFile);

    function remove(index) {
        cartFromFile.splice(index,1);
        setProducts(cartFromFile.slice());
    }

    function empty() {
        cartFromFile.splice(0);
        setProducts(cartFromFile.slice());
    }

    function addTogether() {
        let sum = 0;
        products.forEach(product => sum = sum + product.price);
        return sum
    }


  return (
    <div>
        {products.length > 0 &&
        <>
            <div>Cart contains {products.length} items</div>
            <button onClick={empty}>Empty</button><br></br>
        </>
        }

        {products.length === 0 && <div>Cart is empty</div>}

        {products.map((product, index) =>
            <div key={index}>
                <div>{product.title}</div>
                <div>{product.price} €</div>
                <button onClick={() => remove(index)}>x</button>
            </div>
        )}
        <div>Cart sum: {addTogether().toFixed(2)}</div>
    </div>
  )
}

export default Cart