import "./App.css";
import CartCheckout from './pages/CartCheckout/CartCheckout'
import { ProductListing, Home, ErrorPage } from './pages'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>

  );
}

export default App;
