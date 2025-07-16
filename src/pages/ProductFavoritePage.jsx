import { useEffect, useState } from "react";
import ProductsFavoriteList from "../components/product/ProductsFavoriteList";
import ProductService from "../services/ProductService";
import { toast } from "react-toastify";

export default function ProductFavoritePage() {
  const [products, setProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const fetchFavorites = async () => {
    ProductService.get({ favorite: true })
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        toast.error("Lỗi khi lấy danh sách yêu thích.");
      })
      .finally(() => {
        setLoadingData(false);
      });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);


  return (
    <div className="max-w-[1100px] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm yêu thích</h1>
      <ProductsFavoriteList
        products={products}
        setProducts={setProducts}
        fetchNewData={fetchFavorites}
        loadingData={loadingData}
      />
    </div>
  );
}
