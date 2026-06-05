import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
