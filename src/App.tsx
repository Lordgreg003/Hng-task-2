import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductScreen, Cart, CheckoutScreen } from "./screens/index";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<ProductScreen />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
