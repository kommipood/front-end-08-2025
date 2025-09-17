import { useState } from "react"
// import cartFromFile from "../../data/cart.json"
import { useTranslation } from "react-i18next";

function Cart() {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")));
    const { t } = useTranslation();

    function remove(index) {
        products.splice(index,1);
        setProducts(products.slice());
        localStorage.setItem("cart", JSON.stringify(products));
    }

    function empty() {
        products.splice(0);
        setProducts(products.slice());
        localStorage.setItem("cart", JSON.stringify(products));
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
            <button onClick={empty}>{t("cart.empty-button")}</button><br></br>
        </>
        }

        {products.length === 0 && <div>{t("cart.empty-text")}</div>}

        {products.map((product, index) =>
            <div key={index}>
                <div>{product.title}</div>
                <div>{product.price} €</div>
                <button onClick={() => remove(index)}>x</button>
            </div>
        )}
        <div>{t("cart.total")}: {addTogether().toFixed(2)}</div>
    </div>
  )
}

export default Cart