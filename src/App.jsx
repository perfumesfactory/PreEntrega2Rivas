import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Catalogo from "./components/Catalogo";
import NavBar from "./components/NavBar";
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Catalogo />} />
          <Route exact path="/category/:categoryName" element={<Catalogo />} />
          <Route exact path="/product/:productId" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
