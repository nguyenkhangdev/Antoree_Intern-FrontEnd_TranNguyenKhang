import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "./NotFound";
import Product from "../pages/ProductPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/san-pham" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
