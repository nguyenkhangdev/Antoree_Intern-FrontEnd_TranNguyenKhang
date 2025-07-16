import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "./NotFound";
import Product from "../pages/ProductPage";
import ProductFavoritePage from "../pages/ProductFavoritePage";
import ProductViewedPage from "../pages/ProductViewedPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/san-pham" element={<Product />} />
      <Route path="/san-pham/yeu-thich" element={<ProductFavoritePage />} />
      <Route path="/san-pham/da-xem" element={<ProductViewedPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
