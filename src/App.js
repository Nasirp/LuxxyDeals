import { Route,Routes } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Login from "./Login";
import SignUp from './SignUp'
function App() {
  return (
    
    <>
    <Routes>
         
         <Route path="/" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>} />
           <Route path="/Login" element={<Login />} />
           <Route path="/signup" element={<SignUp/>}/>
           
          
     </Routes>
    
   
        </>
  );
}

export default App;
