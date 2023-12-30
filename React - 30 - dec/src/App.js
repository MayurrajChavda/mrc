import { createContext, useState } from 'react';
import './App.css';
import MyRouter from './components/MyRouter';

export const MyContext = createContext();

function App() {
const [itemInCart,setItenInCart] = useState([]);
const [qty,setQty] = useState([])
console.log(itemInCart);
  return (
    <MyContext.Provider value={[itemInCart,setItenInCart,qty,setQty]}>
      <MyRouter/>
    </MyContext.Provider>
  );
}

export default App;