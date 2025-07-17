import ProductFavoriteCard from "./ProductFavoriteCard";
import { toast } from "react-toastify";
import api from "../../services/axios";
import { useState } from "react";
import { SkeletonCard } from "../SkeletonCard";

export default function ProductsFavoriteList({
  products,
  setProducts,
  loadingData,
}) {
  //biến loading để tránh spam handleFavorite
  const [loadingFavoriteButton, setLoadingFavoriteButton] = useState(false);

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
      {loadingData ? (
        [1].map((index) => <SkeletonCard key={index} />)
      ) : products.length === 0 ? (
        <p className="text-center mt-8 text-gray-600">
          Bạn chưa thích sản phẩm nào.
        </p>
      ) : (
        products.map((product) => (
          <ProductFavoriteCard
            key={product.id}
            product={product}
            onFavorite={handleFavorite}
          />
        ))
      )}
    </div>
  );
}
