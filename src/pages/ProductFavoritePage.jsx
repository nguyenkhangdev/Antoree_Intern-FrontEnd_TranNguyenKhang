import { useEffect, useState } from "react";
import api from "../services/api";
import ProductsFavoriteList from "../components/product/ProductsFavoriteList";

export default function ProductFavoritePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = async () => {
    try {
      const res = await api.get("/products?favorite=true");
      setProducts(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách yêu thích:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFavorites();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Đang tải danh sách yêu thích...</p>;
  }

  if (products.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Bạn chưa thích sản phẩm nào.
      </p>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm yêu thích</h1>
      <ProductsFavoriteList
        products={products}
        setProducts={setProducts}
        fetchNewData={fetchFavorites}
      />
    </div>
  );
}
