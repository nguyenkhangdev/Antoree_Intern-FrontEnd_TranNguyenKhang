import ProductFavoriteCard from "./ProductFavoriteCard";
import { toast } from "react-toastify";
import api from "../../services/axios";
import { useState } from "react";

export default function ProductsFavoriteList({ products, setProducts }) {
  //biến loading để tránh spam handleFavorite
  const [loadingFavoriteButton, setLoadingFavoriteButton] = useState(false);

  if (products.length === 0) {
    return (
      <p className="text-center mt-8 text-gray-600">
        Không có sản phẩm yêu thích nào.
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
        setProducts((prev) => prev.filter((p) => p.id !== updated.id));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Thêm sản phẩm thất bại.");
      })
      .finally(() => {
        setLoadingFavoriteButton(false);
      });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      {products.map((product) => (
        <ProductFavoriteCard
          key={product.id}
          product={product}
          onFavorite={handleFavorite}
        />
      ))}
    </div>
  );
}
