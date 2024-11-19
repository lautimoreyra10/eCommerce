import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
