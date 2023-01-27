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


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ap/signin" element={<Signin />} />
          <Route path="/ap/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
