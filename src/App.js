
import './App.css';
import { a, b } from './components/Products/Products';

import Products from './components/Products/Products';
import { useState } from 'react';

function App() {
  let [cart,setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    if(!newcart[Products.id])
    {
      newCart[product.id]={
        id : product.id,
        title : ptoduct.title,
        price : product.price,
        quantity : 0
      };
    }
      newCart[product.id].quantity++;
      setcart(newCart);
    }
    function decreaseQuantity(product) {
      const newCart = { ...cart };
      if (!newCart[product.id]) return;
      newCart[product.id].quantity -= 1;
      if (newCart[product.id].quantity <= 0) {
        delete newCart[product.id];
      }
      setCart(newCart);
    }
    console.log(a,b);
  return (
    <div className="App">
      
      <Products />
      
      
    </div>

  );
}

export default App;
