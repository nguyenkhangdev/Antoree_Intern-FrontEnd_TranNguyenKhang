import { toast } from "react-toastify";
import api from "../../services/api";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductsList({ products, setProducts }) {
  //biến loading để tránh spam handleFavorite
  const [loadingFavoriteButton, setLoadingFavoriteButton] = useState(false);

  if (products.length === 0) {
    return (
      <p className="text-center mt-8 text-gray-600">
        Không tìm thấy sản phẩm nào phù hợp.
      </p>
    );
  }
  const handleFavorite = async (product) => {
    if (loadingFavoriteButton) return;
    setLoadingFavoriteButton(true);
    api
      .put(`/products/${product.id}`, { favorite: !product.favorite })
      .then((res) => {
        const updated = res.data;
        if (updated.favorite === true) {
          toast.success("Đã thêm sản phẩm vào yêu thích.");
        } else {
          toast.success("Đã loại sản phẩm khỏi yêu thích.");
        }
        // Cập nhật danh sách products
        setProducts((prev) =>
          prev.map((p) => (p.id === updated.id ? updated : p))
        );
      })
      .catch(() => {
        toast.error("Thêm sản phẩm thất bại.");
      })
      .finally(() => {
        setLoadingFavoriteButton(false);
      });
  };
  return (
    <div className="max-w-[1100px] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onFavorite={handleFavorite}
        />
      ))}
    </div>
  );
}
