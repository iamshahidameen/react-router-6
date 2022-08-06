import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
          <Route path="products/:productID" element={<SingleProduct />} />
        </Route>
        <Route path="dashboard" element={<h1>Dashboard</h1>}>
          <Route path="asana" element={<h1>ASANA</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
