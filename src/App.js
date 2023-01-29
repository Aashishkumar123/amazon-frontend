import './static/css/bootstrap.css';
import './static/css/style.css';
import { 
  BrowserRouter, 
  Routes, 
  Route }
from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from './pages/auth/Signin';
import { Signup } from './pages/auth/Signup';
import { Account } from './pages/account/Account';
import { Address } from './pages/account/address/Address';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ap/signin" element={<Signin />} />
          <Route path="/ap/register" element={<Signup />} />
          <Route path="/gp/account" element={<Account />} />
          <Route path="/gp/account/address" element={<Address />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
