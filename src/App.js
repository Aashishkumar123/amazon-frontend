import './static/css/bootstrap.css';
import './static/css/style.css';
import { 
  BrowserRouter, 
  Routes, 
  Route }
from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from './pages/auth/Signin';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ap/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
