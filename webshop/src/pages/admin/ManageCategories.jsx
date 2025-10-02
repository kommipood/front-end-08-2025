import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function ManageCategories() {
  const categoriesUrl = "https://webshop-merili-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
    
  }, []);

  function add() {
    if (categoryRef.current.value === "") {
      alert("Ei saa tühja nimetusega lisada!");
      return;
    }
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice())
    fetch(categoriesUrl, {method: "PUT", body: JSON.stringify(categories)});
    categoryRef.current.value = "";
  }

  function deleteCategory(index) {
    categories.splice(index, 1);
    setCategories(categories.slice()); //uuendab HTMLi
    fetch(categoriesUrl, {method: "PUT", body: JSON.stringify(categories)}); //uuendab andmebaasi
  }

  return (
    <div>
      <div>Kategooriate arv: {categories.length}</div>

      <label>Kategooria nimi</label><br></br>
      <input ref={categoryRef} type="text"></input><br></br>
      <button onClick={add}>Lisa</button>

      {categories.map((category, index) =>
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>
      )}
    </div>
  )
}

export default ManageCategories